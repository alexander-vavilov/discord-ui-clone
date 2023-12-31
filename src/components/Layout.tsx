import { FC, MouseEvent } from 'react'
import { Outlet } from 'react-router-dom'
import SidebarSmallest from './SidebarSmallest/SidebarSmallest'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = () => {
  const preventDefaultContextMenu = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      onContextMenu={preventDefaultContextMenu}
      className='flex h-d-screen font-whitney font-medium'
    >
      <SidebarSmallest />
      <Sidebar />
      <main className='flex-auto bg-discord-700'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
