import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/tasks/')({
  component: TaskListPage,
})



function TaskListPage() {


  return (

    <section>
      <h4> TaskListPage </h4>
    </section>

  )

}
