import { Avatar, AvatarFallback, AvatarImage } from '@/components/base/avatar'
import logoImg from '../../../public/assets/taskfy-logo.png'
import defaultAvatar from '../../../public/assets/default-avatar.png'
import { Link } from '@tanstack/react-router'



export function TopMenu() {

  console.log('(TopMenu) rendered')

  return(

    <div className="sticky top-0 z-50 f-col-center h-16 bg-sidebar">
      <div className="main-container f-row h-16 bg-sidebar">

        <Link to="/" className="content-center w-32">
          <img
            className="w-full h-full object-contain"
            src={logoImg}
            alt="taskfy logo"
          />
        </Link>

        <div className="f-row-center">
          <div className="f-row w-fit mx-8 gap-8 items-center *:place-content-center">
            <Link to="/" className="w-full h-full hover:cursor-pointer px-5">
              Dashboard
            </Link>
            <Link to="/groups" params='1' className="w-full h-full hover:cursor-pointer px-5">
              Tasks
            </Link>
          </div>
        </div>

        <div className="f-row items-center w-48 gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src={defaultAvatar} alt="user photo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="w-fit">
            Gabriel Lima
          </span>
        </div>

      </div>
    </div>

  )
}
