import { Skeleton } from '@/components/base/skeleton'



export function SkeletonLayout() {

 return(

   <section className="f-row h-96">

     <Skeleton className="box w-xl"></Skeleton>

     <Skeleton className="box"></Skeleton>

   </section>

 )
}
