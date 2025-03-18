import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/')({
  component: RouteComponent,
})



function RouteComponent() {

  console.log('(\'/\') rendered')

  return(
    <section>

      <h4> Index Page </h4>

    </section>
  )

}
