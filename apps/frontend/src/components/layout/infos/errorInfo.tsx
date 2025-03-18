import { Alert, AlertDescription, AlertTitle } from '@/components/base/alert'



type ErrorInfoProps = {
 text: string
}


export function ErrorInfo({ text }: ErrorInfoProps) {

 return(

   <Alert>

     <AlertTitle>
       Something was wrong
     </AlertTitle>
     <AlertDescription>
       {text}
     </AlertDescription>

   </Alert>

 )
}
