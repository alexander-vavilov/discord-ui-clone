import { forwardRef } from 'react'
import { IMenuItem } from '../types'
import Menu from './Menu/Menu'
import { useKeyDown } from '../hooks/useKeyDown'

interface ContextMenuProps {
  items: IMenuItem[]
  onRequestClose: () => void
}

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ items, onRequestClose }, ref) => {
    useKeyDown(() => {
      onRequestClose()
    })

    return (
      <div ref={ref} className='absolute z-10'>
        <Menu items={items} onRequestClose={onRequestClose} />
      </div>
    )
  }
)

export default ContextMenu
