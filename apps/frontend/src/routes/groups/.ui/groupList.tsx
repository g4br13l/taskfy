import { Button } from '@/components/base/button'
import { GroupItem } from '@/routes/groups/.ui/groupItem'
import { groupSig, groupStore } from '@/routes/groups/.module/groupStore'
import { GroupT } from '@/routes/groups/.module/groupType'
import { groupService } from '@/routes/groups/.module/groupService'



export function GroupList() {

  // useSignals()
  const catFilteredGroupsSig = groupSig.value.filtered.categorized
  console.log('(GroupList) rendered - groupSig.value:', groupSig.value)


  async function handleGroupClick(group: GroupT) {

    const selectedGroupId = groupSig.value.selected?.id

    const oldDivGroupItem = document.getElementById(`group-item-${selectedGroupId}`)
    oldDivGroupItem?.classList.remove('bg-sidebar-accent')

    const divGroupItem = document.getElementById(`group-item-${group.id}`)
    divGroupItem?.classList.add('bg-sidebar-accent')

    groupStore().setSelected(group)
    await groupService().loadTasksOfGroupClicked(String(group.id))
  }



  return(

    <section>

      <div className="h-section">
        <h5> Groups </h5>
        <Button> new group </Button>
      </div>

      <div className="f-col gap-2">
        <h6> Push notifications </h6>
        <div className="f-col gap-2">
          {catFilteredGroupsSig.notification.map((group) => (
            <GroupItem
              id={`group-item-${group.id}`}
              key={group.id}
              group={group}
              onClick={()=> handleGroupClick(group)}
            />
          ))}
        </div>
      </div>

      <div className="f-col gap-2">
        <h6> Calendar notifications </h6>
        <div className="f-col gap-2">
          {catFilteredGroupsSig.calendar.map((group) => (
            <GroupItem
              id={`group-item-${group.id}`}
              key={group.id}
              group={group}
              onClick={()=> handleGroupClick(group)}
            />
          ))}
        </div>
      </div>

      <div className="f-col gap-2">
        <h6> Cron jobs </h6>
        <div className="f-col gap-2">
          {catFilteredGroupsSig.cronJob.map((group) => (
            <GroupItem
              key={group.id}
              id={`group-item-${group.id}`}
              group={group}
              onClick={()=> handleGroupClick(group)}
            />
          ))}
        </div>
      </div>

    </section>

  )

}
