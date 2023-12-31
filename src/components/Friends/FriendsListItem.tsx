import { FC, MouseEvent, useState } from 'react'
import ContextMenu from '../ContextMenu'
import useContextMenu from '../../hooks/useContextMenu'
import { BiSolidMessageRounded, BiDotsVerticalRounded } from 'react-icons/bi'
import { cn } from '../../utils'
import { IMenuItem, personType } from '../../types'
import { servers } from '../../dummy'
import Avatar from '../Avatar'

interface FriendsListItemProps extends personType {
  handleRemoveFriend: () => void
}

const FriendsListItem: FC<FriendsListItemProps> = ({
  username,
  displayName,
  status,
  image,
  color,
  handleRemoveFriend
}) => {
  const { ref, open, close, isOpen: isContextMenuOpen } = useContextMenu()

  const optionsMenu: IMenuItem[] = [
    {
      label: 'start video call',
      action: () => console.log('video call started')
    },
    {
      label: 'start voice call',
      action: () => console.log('video voice started')
    },
    {
      label: 'remove friend',
      action: handleRemoveFriend,
      warning: {
        title: `remove '${displayName}'`,
        message: `Are you sure you want to permanently remove ${displayName} from your friends?`,
        commitLabel: 'remove friend'
      }
    }
  ]

  const Menu: IMenuItem[] = [
    {
      label: 'profile'
    },
    {
      label: 'message'
    },
    {
      label: 'call'
    },
    {
      label: 'add note'
    },
    {
      label: 'add friend nickname'
    },
    {
      label: 'invite to server',
      subMenu: servers.map(({ name }) => ({
        label: name,
        action: () => console.log(`Added to ${name}`)
      })),
      divider: true
    }
  ]

  const [currentMenu, setCurrentMenu] = useState(optionsMenu)

  const handleOpenContextMenu = (e: MouseEvent) => {
    setCurrentMenu(Menu)
    open(e)
  }

  const handleOpenMenu = (e: MouseEvent) => {
    setCurrentMenu(optionsMenu)
    open(e)
  }

  const buttons = [
    {
      label: 'more',
      icon: BiSolidMessageRounded,
      action: () => console.log('more')
    },
    {
      label: 'message',
      icon: BiDotsVerticalRounded,
      action: handleOpenMenu
    }
  ]

  return (
    <div onContextMenu={handleOpenContextMenu}>
      <div
        className={cn(
          'group -mx-3 -mt-px flex cursor-pointer items-center justify-between gap-2 p-2',
          {
            'rounded-md bg-discord-500/50': isContextMenuOpen,
            'hover:rounded-md hover:bg-discord-500/50': !isContextMenuOpen
          }
        )}
      >
        <div className='flex items-center gap-3'>
          <Avatar
            displayName={displayName}
            image={image}
            color={color}
            status={status}
          />
          <div className='flex flex-col'>
            <div className='flex items-end gap-2'>
              <span>{displayName}</span>
              <span
                className={cn('text-sm text-white/60', {
                  'hidden group-hover:block': !isContextMenuOpen
                })}
              >
                {username}
              </span>
            </div>
            <span className='text-sm capitalize text-white/70'>{status}</span>
          </div>
        </div>
        <div className='group flex gap-2'>
          {buttons.map(({ label, icon: Icon, action }) => (
            <button
              key={label}
              className={cn(
                'rounded-full p-1.5 text-white/80 hover:text-white',
                {
                  'bg-discord-900': isContextMenuOpen,
                  'bg-discord-900/60 group-hover:bg-discord-900':
                    !isContextMenuOpen
                }
              )}
              onClick={action}
            >
              <Icon size={22} />
            </button>
          ))}
        </div>
      </div>
      {isContextMenuOpen && (
        <ContextMenu ref={ref} items={currentMenu} onRequestClose={close} />
      )}
    </div>
  )
}

export default FriendsListItem
