import { FC } from 'react'
import SidebarSmallestItems from './SidebarSmallestItems'

const SidebarSmallest: FC = ({}) => {
  return (
    <aside className='h-full bg-discord-950'>
      <SidebarSmallestItems />
    </aside>
  )
}

export default SidebarSmallest
