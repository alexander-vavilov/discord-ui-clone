import { FC } from 'react'
import Channels from '../Channels'
import { FaUserFriends } from 'react-icons/fa'

const Sidebar: FC = () => {
  return (
    <aside className='flex h-full w-60 flex-col bg-discord-800'>
      <div className='h-12 p-[10px] shadow-discord'>
        <button className='w-full rounded-[4px] bg-discord-950 px-2 py-1 text-start text-sm text-discord-muted'>
          Find or start a conversation
        </button>
      </div>
      <div className='flex-auto p-2'>
        <Channels />
      </div>
      <div className='flex items-center justify-between bg-discord-900 p-2'>
        <div className='flex items-center gap-2'>
          <div className='h-8 w-8 rounded-full bg-slate-500' />
          <div className='flex flex-col justify-center leading-none'>
            <span className='text-sm text-white/80'>Hittau</span>
            <span className='text-xs text-white/60'>invisible</span>
          </div>
        </div>
        <div className='flex'>
          <button className='rounded-[4px] p-1.5 text-white/60 hover:bg-discord-500'>
            <FaUserFriends size={20} />
          </button>
          <button className='rounded-[4px] p-1.5 text-white/60 hover:bg-discord-500'>
            <FaUserFriends size={20} />
          </button>
          <button className='rounded-[4px] p-1.5 text-white/60 hover:bg-discord-500'>
            <FaUserFriends size={20} />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
