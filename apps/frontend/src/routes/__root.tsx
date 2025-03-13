import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeState } from '@/state/themeState'
import { TopMenu } from '@/components/layout/topMenu'



export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  return(

    <ThemeState>

      <main className="f-col w-full centered gap-8 pb-8">
        <TopMenu />
        <h3> Root Layout </h3>
        <Outlet />
      </main>

    </ThemeState>

  )
}
