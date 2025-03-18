import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import { NotFoundInfo } from '@/components/layout/infos/notFoundInfo'



const router = createRouter({
  routeTree,
  /* defaultStaleTime: 1_000, */
  defaultNotFoundComponent: ()=> <NotFoundInfo />
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById('root')!).render(
  /* <StrictMode> */
    <RouterProvider router={router} />
  /* </StrictMode> */
)
