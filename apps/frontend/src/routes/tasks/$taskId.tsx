import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/tasks/$taskId')({
  component: TaskDetailPage,
})



function TaskDetailPage() {

  return(

    <section>
      <h4> TaskDetailPage </h4>
    </section>

  )
}
