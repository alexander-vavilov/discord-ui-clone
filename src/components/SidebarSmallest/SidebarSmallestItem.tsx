import { FC, ReactNode } from 'react'
import { cn } from '../../utils'

interface SidebarSmallestItemProps {
  name: string
  children: ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

const SidebarSmallestItem: FC<SidebarSmallestItemProps> = ({
  name,
  children,
  className,
  onClick,
  isActive = false
}) => {
  return (
    <li
      onClick={onClick}
      className='relative flex select-none items-center gap-2 px-3'
    >
      <div
        className={cn(
          'peer flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-[100%] transition-all duration-200',
          {
            'rounded-2xl bg-blurple-400': isActive,
            'bg-discord-600 hover:rounded-2xl hover:bg-blurple-400': !isActive
          },
          className
        )}
      >
        {children}
      </div>
    </li>
  )
}

export default SidebarSmallestItem
