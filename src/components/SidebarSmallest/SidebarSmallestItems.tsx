import { FC } from 'react'
import DiscordSymbol from '../../assets/discord-symbol.svg'
import SidebarSmallestDivider from './SidebarSmallestDivider'
import SidebarSmallestItem from './SidebarSmallestItem'
import { MdAdd, MdExplore } from 'react-icons/md'
import { NavLink, useParams } from 'react-router-dom'
import { servers } from '../../dummy'

const SidebarSmallestItems: FC = ({}) => {
  return (
    <ul className='flex h-full flex-col items-center gap-2 overflow-y-auto py-3'>
      <SidebarSmallestItem name='Direct Messages'>
        <NavLink to='channels/@me'>
          <img
            src={DiscordSymbol}
            width={28}
            className='w-7'
            draggable={false}
            alt='discord'
          />
        </NavLink>
      </SidebarSmallestItem>
      <SidebarSmallestDivider />
      {servers.map(({ name, image, id }) => {
        const { serverId } = useParams()
        const isActive = id === serverId

        return (
          <SidebarSmallestItem key={id} name={name} isActive={isActive}>
            <NavLink to={`/channels/${id}/hello`}>
              <img src={image} />
            </NavLink>
          </SidebarSmallestItem>
        )
      })}
      <SidebarSmallestItem
        name='Add a Server'
        className='group hover:bg-green-600'
        onClick={() => console.log('add server')}
      >
        <MdAdd
          size={28}
          className='text-green-600 transition-colors duration-200 group-hover:text-white'
        />
      </SidebarSmallestItem>
      <SidebarSmallestItem
        name='Explore Servers'
        className='group hover:bg-green-600'
      >
        <NavLink to='explore'>
          <MdExplore
            size={28}
            className='text-green-600 transition-colors duration-200 group-hover:text-white'
          />
        </NavLink>
      </SidebarSmallestItem>
    </ul>
  )
}

export default SidebarSmallestItems
