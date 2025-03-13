import { ReactNode } from 'react'



export type ThemeT = 'dark' | 'light' | 'system'


type ThemeStatePropsT = {
  children: ReactNode
  defaultTheme?: ThemeT
  storageKey?: string
}


export function ThemeState({
  children,
  /* defaultTheme = 'system',
  storageKey = 'ui-theme' */
}: ThemeStatePropsT) {

  const rootDOM = window.document.documentElement
  rootDOM.classList.remove('light', 'dark')
  rootDOM.classList.add('dark')

  return(
    <>
      {children}
    </>
  )

}
