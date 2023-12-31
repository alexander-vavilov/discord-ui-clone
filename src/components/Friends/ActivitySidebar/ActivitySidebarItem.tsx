import { FC, useState } from 'react'
import Avatar from '../../Avatar'
import { IMenuItem, personWithActivityType } from '../../../types'
import { secondsToHHMMSS } from '../../../utils'
import { FaGamepad } from 'react-icons/fa'
import Menu from '../../Menu/Menu'

type ActivitySidebarItemProps = Omit<personWithActivityType, 'uid' | 'username'>

const ActivitySidebarItem: FC<ActivitySidebarItemProps> = ({
  image,
  displayName,
  color,
  currentActivity,
  status
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { hours, minutes } = secondsToHHMMSS(currentActivity.duration)

  const menuItems: IMenuItem[] = [
    {
      label: 'message',
      action: () => console.log('navigate to chat with person')
    },
    {
      label: 'profile',
      action: () => console.log('open profile'),
      divider: true
    }
  ]

  return (
    <li
      onClick={() => setIsMenuOpen(true)}
      className='relative flex cursor-pointer items-center justify-between gap-4 rounded-[4px] border border-discord-500/70 bg-discord-800 p-4 hover:border-discord-950 hover:bg-discord-1000'
    >
      <div className='flex gap-2'>
        <Avatar
          image={image}
          displayName={displayName}
          status={status}
          color={color}
        />
        <div className='leading-none'>
          <h3 className='text-lg font-medium leading-none'>{displayName}</h3>
          <span className='text-sm font-light leading-none text-white/70'>
            {currentActivity.name} — {!!hours && `${hours}h`}{' '}
            {!!minutes && `${minutes}m`}
          </span>
        </div>
      </div>
      <div className='overflow-hidden rounded-[4px] bg-discord-500'>
        {currentActivity.icon ? (
          <img
            src={currentActivity.icon}
            className='h-6 w-6 select-none rounded-[4px]'
            alt={currentActivity.name}
            draggable={false}
          />
        ) : (
          <div className='p-1 text-white/70'>
            <FaGamepad />
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className='absolute right-full top-0 pr-3'>
          <Menu onRequestClose={() => setIsMenuOpen(false)} items={menuItems} />
        </div>
      )}
    </li>
  )
}

export default ActivitySidebarItem
