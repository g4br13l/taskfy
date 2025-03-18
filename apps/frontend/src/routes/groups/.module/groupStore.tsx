import { signal } from '@preact/signals-react'
import { CategoryT, getCategoryKeyWithLabel, GroupT } from '@/routes/groups/.module/groupType'



export type CategorizedGroupsT = {
  [key in keyof CategoryT]: GroupT[]
}

export type GroupStoreT = {
  all: {
    groups: GroupT[]
    categorized: CategorizedGroupsT
  }
  filtered: {
    groups: GroupT[]
    categorized: CategorizedGroupsT
  },
  selected?: GroupT
}

export const emptyCategories: CategorizedGroupsT =
  { notification: [], calendar: [], cronJob: [], email: [] }

export const emptyState: GroupStoreT = {
  all: { groups: [], categorized: emptyCategories },
  filtered: { groups: [], categorized: emptyCategories }
}

export const groupSig = signal<GroupStoreT>(emptyState)




export function groupStore() {

  function mountGroupState(groups: GroupT | GroupT[], clean?: boolean): GroupT[] {
    return Array.isArray(groups)
      ? clean
        ? [...groups]
        : [...groupSig.value.all.groups, ...groups]
      : clean
        ? [groups]
        : [...groupSig.value.all.groups, groups]
  }

  function categorizeGroups(groupsParam: GroupT | GroupT[]): CategorizedGroupsT {

    let categorizedGroups: CategorizedGroupsT = emptyCategories
    const groups: GroupT[] = Array.isArray(groupsParam) ? groupsParam : [groupsParam]

    groups.forEach(group => {
      const currKey: keyof CategorizedGroupsT =
        getCategoryKeyWithLabel(group.category.label)
      categorizedGroups = {
        ...categorizedGroups,
        [currKey]: [ ...categorizedGroups[currKey], group]
      }
    })

    return categorizedGroups
  }


  return {

    add: (groups: GroupT | GroupT[]): GroupStoreT => {

      const categorizedGroups = categorizeGroups(groups)
      const groupsState = mountGroupState(groups, false)

      return groupSig.value = {
        all: {
          groups: groupsState,
          categorized: categorizedGroups
        },
        filtered: {
          groups: groupsState,
          categorized: categorizedGroups
        }
      }
    },

    restart: (groups: GroupT | GroupT[], select?: GroupT): GroupStoreT => {

      const categorizedGroups = categorizeGroups(groups)
      const groupsState = mountGroupState(groups, false)

      return groupSig.value = {
        all: {
          groups: groupsState,
          categorized: categorizedGroups
        },
        filtered: {
          groups: groupsState,
          categorized: categorizedGroups
        },
        selected: select ? select : undefined
      }
    },

    setSelected: (group: GroupT | undefined): GroupStoreT => {

      const groupState = groupSig.value

      return groupSig.value = {
        all: {
          groups: groupState.all.groups,
          categorized: groupState.all.categorized
        },
        filtered: {
          groups: groupState.filtered.groups,
          categorized: groupState.filtered.categorized
        },
        selected: group
      }
    }

  }
}
