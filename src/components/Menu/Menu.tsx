import { FC } from 'react'
import { IMenuItem } from '../../types'
import MenuItems from './MenuItems'
import { useKeyDown } from '../../hooks/useKeyDown'
import { useClickAway } from '../../hooks/useClickAway'

interface MenuProps {
  items: IMenuItem[]
  onRequestClose: () => void
}

const Menu: FC<MenuProps> = ({ items, onRequestClose }) => {
  useKeyDown((e) => {
    if (e.key === 'Escape') onRequestClose()
  })

  const ref = useClickAway(() => {
    onRequestClose()
  })

  return (
    <div ref={ref}>
      <MenuItems items={items} onRequestClose={onRequestClose} />
    </div>
  )
}

export default Menu
