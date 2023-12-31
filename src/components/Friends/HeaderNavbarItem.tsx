import { Dispatch, FC, SetStateAction } from 'react'
import { tabType } from '../../types'
import { cn } from '../../utils'

interface HeaderNavbarItemProps {
  activeTab: tabType
  setActiveTab: Dispatch<SetStateAction<tabType>>
  name: string
  label: string
  className?: string
}

const HeaderNavbarItem: FC<HeaderNavbarItemProps> = ({
  name,
  activeTab,
  setActiveTab,
  className,
  label
}) => {
  return (
    <li>
      <input
        type='radio'
        id={name}
        value={name}
        name='tab'
        checked={name === activeTab}
        onChange={(e) => setActiveTab(() => e.target.value as tabType)}
        className='peer hidden w-0 opacity-0'
      />
      <label
        htmlFor={name}
        className={cn(
          'mx-2 block cursor-pointer select-none rounded-[4px] px-2 py-1 capitalize leading-none text-white/70 hover:bg-discord-500/50 hover:text-white/90 peer-checked:cursor-auto peer-checked:bg-discord-500 peer-checked:text-white',
          className
        )}
      >
        {label}
      </label>
    </li>
  )
}

export default HeaderNavbarItem
