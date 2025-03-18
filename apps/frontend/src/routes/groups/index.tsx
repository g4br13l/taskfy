import { createFileRoute, redirect } from '@tanstack/react-router'



export const Route = createFileRoute('/groups/')({
  component: () => GroupsIndexPage,
  loader: () => {
    throw redirect({
      to: '/groups/$groupId',
      params: { groupId: '1' }
    })
  }
})


function GroupsIndexPage() {
  console.log('(GroupsIndexPage) rendered')
}
