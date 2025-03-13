import { EnabledView } from '@/components/base/enabledView'



type GroupItemPropsT = {
  title: string
  enabled: boolean
}


export function GroupItem({ title, enabled }: GroupItemPropsT) {

  return(

    <div className="f-row p-2 rounded-sm bg-neutral-800">
      <p className="w-full">{ title }</p>
      <EnabledView enabled={ enabled } />
    </div>

  )
}
