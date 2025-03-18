import { PaginatedResT } from '@/main/types/http/paginatedRes'
import { TaskT } from '@/routes/tasks/.module/taskType'
import { taskStore } from '@/routes/tasks/.module/taskStore'
import { GroupT } from '@/routes/groups/.module/groupType'
import { groupStore } from '@/routes/groups/.module/groupStore'



export function groupService() {

  return {

    getAll: async (): Promise<PaginatedResT<GroupT>> => {

      //await new Promise(r => setTimeout(r, 1_000))
      const baseAPI = 'http://localhost:3500'
      const groupsPath = '/groups'

      const res = await fetch(`${baseAPI}${groupsPath}?_page=1&_per_page=10`)
      if (!res.ok) throw new Error('Error while trying to get groups')
      return await res.json() as PaginatedResT<GroupT>
    },

    getAllTasksOfGroup: async (groupId: string) => {

      const baseAPI = 'http://localhost:3500'
      const tasksPath = '/tasks'
      const firstEntityPag = '_page=1&_per_page=10'

      const res = await fetch(`${baseAPI}${tasksPath}?groupId=${groupId}&${firstEntityPag}`)
      if (!res.ok) throw new Error('Error while fetching tasks of a group.')
      return await res.json() as PaginatedResT<TaskT>
    },

    loadGroupDetailPageData: async (groupId: string) => {

      const [allGroupsPag, allTasksOfGroupPag] = await Promise.all([
        groupService().getAll(),
        groupService().getAllTasksOfGroup(groupId)
      ])

      groupStore().restart(
        allGroupsPag.data,
        allGroupsPag.data.find(g=> String(g.id) === groupId)
      )
      taskStore().restart(
        allTasksOfGroupPag.data,
        allTasksOfGroupPag.data.filter(t=> String(t.groupId) === groupId)
      )

      return { allGroupsPag, allTasksOfGroupPag }
    },

    loadTasksOfGroupClicked: async (groupId: string) => {
      const allTasksOfGroupPag = await groupService().getAllTasksOfGroup(groupId)
      taskStore().restart(
        allTasksOfGroupPag.data,
        allTasksOfGroupPag.data.filter(t=> String(t.groupId) === groupId)
      )
    }

  }
}
