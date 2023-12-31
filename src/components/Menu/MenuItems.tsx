import { FC } from 'react'
import { IMenuItem } from '../../types'
import MenuItem from './MenuItem'

interface MenuItemsProps {
  items: IMenuItem[]
  onRequestClose: () => void
}

const MenuItems: FC<MenuItemsProps> = ({ items, onRequestClose }) => {
  return (
    <ul className='flex w-[188px] flex-col rounded-[4px] bg-discord-1000 px-2 py-[6px] shadow-lg'>
      {items.map(({ ...props }) => (
        <MenuItem
          key={props.label}
          onRequestClose={onRequestClose}
          {...props}
        />
      ))}
    </ul>
  )
}

export default MenuItems
