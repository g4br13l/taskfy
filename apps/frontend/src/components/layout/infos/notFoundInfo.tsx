import { ChevronLeft, EyeOff } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/base/button'



type NotFoundInfoProps = {
 props?: string
}


export function NotFoundInfo({ props }: NotFoundInfoProps) {

  const navigate = useNavigate()


 return(

  <section className="items-center mb-20">
    <EyeOff size="65" />
    <h3> Page not found {props} </h3>
    <Button onClick={()=> navigate({ to: '/' })}>
      <ChevronLeft />
      Back to Home Page
    </Button>
  </section>

 )
}
