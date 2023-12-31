import { FC } from 'react'
import { BiDotsVerticalRounded, BiSolidMessageRounded } from 'react-icons/bi'
import { cn } from '../../utils'
import useContextMenu from '../../hooks/useContextMenu'
import ContextMenu from '../ContextMenu'
import { IMenuItem } from '../../types'

interface FriendsListItemButtonsProps {
  handleRemoveFriend: () => void
  displayName: string
}

const FriendsListItemButtons: FC<FriendsListItemButtonsProps> = ({
  displayName,
  handleRemoveFriend
}) => {
  const { ref, open, close, isOpen: isContextMenuOpen } = useContextMenu()

  const Menu: IMenuItem[] = [
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
    },
    {
      label: 'sub menu test',
      subMenu: [
        {
          label: 'sub menu item 1',
          action: () => console.log('sub menu item 1')
        },
        {
          label: 'sub menu item 2',
          action: () => console.log('sub menu item 2')
        },
        {
          label: 'sub menu item 3',
          action: () => console.log('sub menu item 3')
        }
      ]
    }
  ]

  const buttons = [
    {
      label: 'more',
      icon: BiSolidMessageRounded,
      action: () => console.log('more')
    },
    {
      label: 'message',
      icon: BiDotsVerticalRounded,
      action: open
    }
  ]

  return (
    <div className='group flex gap-2'>
      {buttons.map(({ label, icon: Icon, action }) => (
        <button
          key={label}
          className={cn('rounded-full p-1.5 text-white/80 hover:text-white', {
            'bg-discord-900': isContextMenuOpen,
            'bg-discord-900/60 group-hover:bg-discord-900': !isContextMenuOpen
          })}
          onClick={action}
        >
          <Icon size={22} />
        </button>
      ))}
      {isContextMenuOpen && (
        <ContextMenu ref={ref} items={Menu} onRequestClose={close} />
      )}
    </div>
  )
}

export default FriendsListItemButtons
