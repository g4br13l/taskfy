import { createLazyFileRoute } from '@tanstack/react-router'
import { GroupList } from '@/components/ui/groupList'
import { TaskForm } from '@/components/ui/task/taskForm'
import { TaskItem } from '@/components/ui/task/taskItem'



export const Route = createLazyFileRoute('/tasks')({
  component: RouteComponent,
})

function RouteComponent() {

  return(

    <div className="f-row w-full h-full items-center gap-4 max-w-5xl">

      <div className="box w-xl">
        <GroupList />
      </div>

      <div className="box">
        <div className="f-col centered">
          <h5>
            Tasks App
          </h5>
        </div>
        <TaskForm />
        <TaskItem />
      </div>

    </div>
  )
}
