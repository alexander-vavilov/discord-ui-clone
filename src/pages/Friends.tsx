import { FC, useState } from 'react'
import Header from '../components/Friends/Header'
import { tabType } from '../types'
import ActivitySidebar from '../components/Friends/ActivitySidebar/ActivitySidebar'
import FriendsTabs from '../components/Friends/FriendsTabs'
import { friends } from '../dummy'

const Friends: FC = () => {
  const [friendsList, setFriendsList] = useState(friends)
  const [activeTab, setActiveTab] = useState<tabType>('online')

  return (
    <div className='flex h-full flex-col'>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='flex h-full flex-auto'>
        <FriendsTabs
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          activeTab={activeTab}
        />
        <ActivitySidebar friendsList={friendsList} />
      </div>
    </div>
  )
}

export default Friends
