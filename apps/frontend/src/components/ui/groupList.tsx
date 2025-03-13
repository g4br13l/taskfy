import { Button } from '@/components/base/button'
import { GroupItem } from '@/components/ui/groupItem'



export function GroupList() {


  return(

    <section>

      <div className="h-section">
        <h5> groups </h5>
        <Button> new group </Button>
      </div>

      <div className="f-col gap-2">
        <h6> Push notifications </h6>
        <GroupItem title="Group 1" enabled={true} />
        <GroupItem title="Group 2" enabled={false} />
        <GroupItem title="Group 3" enabled={false} />
      </div>

      <div className="f-col gap-2">
        <h6> Calendar </h6>
        <GroupItem title="Group 1" enabled={true} />
        <GroupItem title="Group 2" enabled={false} />
        <GroupItem title="Group 3" enabled={false} />
      </div>

    </section>

  )

}
