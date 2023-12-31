import { Dispatch, FC, SetStateAction } from 'react'
import { tabType } from '../../types'
import HeaderNavbarItem from './HeaderNavbarItem'

interface HeaderNavbarProps {
  activeTab: tabType
  setActiveTab: Dispatch<SetStateAction<tabType>>
}

const HeaderNavbar: FC<HeaderNavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: tabType[] = ['online', 'all', 'pending', 'blocked']

  return (
    <nav>
      <ul className='flex'>
        {tabs.map((tab) => (
          <HeaderNavbarItem
            key={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name={tab}
            label={tab}
          />
        ))}
        <HeaderNavbarItem
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          name='add'
          label='Add Friend'
          className='bg-green-700 text-white opacity-100 hover:bg-green-700 hover:text-white peer-checked:bg-transparent peer-checked:text-green-500'
        />
      </ul>
    </nav>
  )
}

export default HeaderNavbar
