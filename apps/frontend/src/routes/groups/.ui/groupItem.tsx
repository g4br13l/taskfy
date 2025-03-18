import { EnabledView } from '@/components/base/enabledView'
import { GroupT } from '@/routes/groups/.module/groupType'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'



type GroupItemPropsT = { group: GroupT } & HTMLAttributes<HTMLDivElement>


export function GroupItem({ group, className, ...props }: GroupItemPropsT) {

  console.log('(GroupItem) rendered')

  return(

    <div
      className={twMerge(
        "f-row p-2 rounded-sm cursor-pointer",
        className
      )}
      {...props}
    >

      <p className="w-full"> { group.title } </p>
      <EnabledView enabled={ group.enabled } />

    </div>

  )
}
