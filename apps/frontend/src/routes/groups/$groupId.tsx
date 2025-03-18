import { createFileRoute } from '@tanstack/react-router'
import { ErrorInfo } from '@/components/layout/infos/errorInfo'
import { SkeletonLayout } from '@/components/layout/infos/skeletonLayout'
import { TaskList } from '@/routes/tasks/.ui/taskList'
import { GroupList } from '@/routes/groups/.ui/groupList'
import { groupService } from '@/routes/groups/.module/groupService'



export const Route = createFileRoute('/groups/$groupId')({
  component: GroupDetailPage,
  loader: async ({ params }) =>
    await groupService().loadGroupDetailPageData(params.groupId),
  pendingComponent: () => <SkeletonLayout />,
  errorComponent: () => <ErrorInfo text="We can't load the page's data" />
})


function GroupDetailPage() {

  return(

    <section className="f-row">

      <div className="side-box">
        <GroupList />
      </div>

      <div className="main-box">
        <TaskList />
      </div>


    </section>

  )
}
