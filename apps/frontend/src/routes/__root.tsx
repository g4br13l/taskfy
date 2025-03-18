import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeState } from '@/store/themeState'
import { TopMenu } from '@/components/layout/topMenu'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import signalsDevtool from 'signals-devtool-provider'
import { taskSig } from '@/routes/tasks/.module/taskStore'
import { effect } from '@preact/signals-react'
import { groupSig } from '@/routes/groups/.module/groupStore'



export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  const signals = {
    taskSig,
    groupSig
  }

  signalsDevtool.init({ signals, effect })

  return(

    <ThemeState>

      <main className="f-col min-h-svh items-center gap-8 pb-8">

        <TopMenu />

        <div className="main-container">
          <Outlet />
        </div>

        <TanStackRouterDevtools />

      </main>

    </ThemeState>

  )
}
