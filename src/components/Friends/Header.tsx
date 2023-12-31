import { Dispatch, FC, SetStateAction } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { tabType } from '../../types'
import HeaderNavbar from './HeaderNavbar'
import { BsPatchQuestionFill, BsFillInboxFill } from 'react-icons/bs'
import { BiSolidMessageRounded } from 'react-icons/bi'

interface HeaderProps {
  activeTab: tabType
  setActiveTab: Dispatch<SetStateAction<tabType>>
}

const Header: FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className='flex h-12 items-center justify-between px-4 py-2 shadow-discord'>
      <div className='flex h-full items-center'>
        <div className='mx-2 flex items-center gap-2'>
          <FaUserFriends size={24} className='text-white/50' />
          <span className='font-semibold'>Friends</span>
        </div>
        <div className='mx-2 h-3/4 border-r border-discord-500/70' />
        <HeaderNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className='flex items-center gap-4'>
        <button className='text-white/60 hover:text-white/90'>
          <BiSolidMessageRounded size={22} />
        </button>
        <button className='text-white/60 hover:text-white/90'>
          <BsFillInboxFill size={22} />
        </button>
        <a
          href='https://i.pinimg.com/736x/82/18/93/8218934fb93db031f3a33c469af90667.jpg'
          className='text-white/60 hover:text-white/90'
          target='_blank'
        >
          <BsPatchQuestionFill size={22} />
        </a>
      </div>
    </header>
  )
}

export default Header
