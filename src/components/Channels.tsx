import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../utils'
import { MdAdd } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'

interface ChannelsProps {}

const channels = [
  {
    name: 'friends',
    path: '@me',
    icon: FaUserFriends
  },
  {
    name: 'store',
    path: 'store',
    icon: FaUserFriends
  },
  {
    name: 'shop',
    path: 'shop',
    icon: FaUserFriends
  }
]

const Channels: FC<ChannelsProps> = ({}) => {
  return (
    <ul className='flex flex-col gap-0.5'>
      {channels.map(({ name, path, icon: Icon }) => (
        <li key={path}>
          <NavLink
            to={`channels/${path}`}
            className={({ isActive }) => {
              return cn(
                'flex items-center gap-3 rounded-[4px] px-3 py-2 hover:bg-discord-500/50',
                {
                  'bg-discord-500 text-white': isActive,
                  'text-white/50 hover:text-white/70': !isActive
                }
              )
            }}
          >
            <Icon size={20} />
            <span className='capitalize'>{name}</span>
          </NavLink>
        </li>
      ))}
      <h2 className='flex items-center justify-between gap-2 px-2.5 pt-4 text-xs uppercase text-white/50'>
        <span className='font-semibold'>Direct messages</span>
        <button>
          <MdAdd size={18} />
        </button>
      </h2>
    </ul>
  )
}

export default Channels
