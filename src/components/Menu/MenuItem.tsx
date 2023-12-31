import { FC, useRef, useState } from 'react'
import { IMenuItem } from '../../types'
import { cn } from '../../utils'
import { IoIosArrowForward } from 'react-icons/io'
import Menu from './Menu'

interface MenuItemProps extends IMenuItem {
  onRequestClose: () => void
}

interface ISubMenuPosition {
  x: 'left' | 'right'
  y: 'top' | 'bottom'
}

const MenuItem: FC<MenuItemProps> = ({
  label,
  icon: Icon,
  warning,
  action,
  subMenu,
  onRequestClose,
  divider
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const menuItemRef = useRef<HTMLLIElement>(null)
  const [subMenuPosition, setSubMenuPosition] = useState<ISubMenuPosition>({
    x: 'right',
    y: 'top'
  })

  const getSubMenuPosition = (): ISubMenuPosition => {
    const menuItem = menuItemRef.current
    if (!menuItem || !subMenu) return { x: 'right', y: 'top' }

    const menuItemRect = menuItem.getBoundingClientRect()
    const horizontalPosition =
      menuItemRect.width + 12 > window.innerWidth - menuItemRect.right
        ? 'left'
        : 'right'
    const verticalPosition =
      menuItemRect.height * subMenu?.length >
      window.innerHeight - menuItemRect.bottom
        ? 'top'
        : 'bottom'

    return { x: horizontalPosition, y: verticalPosition }
  }

  const openSubMenu = () => {
    setIsSubMenuOpen(true)
    setSubMenuPosition(getSubMenuPosition())
  }

  const handleClick = () => {
    if (!!subMenu) return

    action && action()
    onRequestClose()
  }

  return (
    <li
      ref={menuItemRef}
      onMouseEnter={openSubMenu}
      onMouseLeave={() => setIsSubMenuOpen(false)}
    >
      {divider && <hr className='my-0.5 border-discord-500/80' />}
      <div className='relative'>
        {!!subMenu && isSubMenuOpen && (
          <div
            className={cn('peer absolute', {
              'top-0': subMenuPosition.y === 'bottom',
              'right-full pr-3': subMenuPosition.x === 'left',
              'bottom-0': subMenuPosition.y === 'top',
              'left-full pl-3': subMenuPosition.x === 'right'
            })}
          >
            <Menu items={subMenu} onRequestClose={onRequestClose} />
          </div>
        )}
        <button
          onClick={handleClick}
          className={cn(
            'my-0.5 flex w-full select-none items-center justify-between rounded-[4px] px-2 py-[6px] text-sm hover:text-white active:text-white peer-hover:text-white',
            {
              'text-red-500 hover:bg-red-500 active:bg-red-500/70 peer-hover:bg-red-500':
                !!warning,
              'text-white/70 hover:bg-blurple-400 active:bg-blurple-400/70 peer-hover:bg-blurple-400':
                !warning
            }
          )}
        >
          <div className='flex cursor-pointer items-center gap-1'>
            {Icon && <Icon />}
            <span className='capitalize'>{label}</span>
          </div>
          {!!subMenu && <IoIosArrowForward size={18} />}
        </button>
      </div>
    </li>
  )
}

export default MenuItem
