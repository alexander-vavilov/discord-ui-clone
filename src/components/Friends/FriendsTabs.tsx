import { Dispatch, FC, SetStateAction } from 'react'
import FriendsAddTab from './FriendsAddTab'
import FriendsTab from './FriendsTab'
import { personType, tabType } from '../../types'

interface FriendsTabsProps {
  friendsList: personType[]
  setFriendsList: Dispatch<SetStateAction<personType[]>>
  activeTab: tabType
}

const FriendsTabs: FC<FriendsTabsProps> = ({
  activeTab,
  friendsList,
  setFriendsList
}) => {
  return (
    <div className='flex flex-auto flex-col px-7 py-4'>
      {activeTab === 'add' ? (
        <FriendsAddTab />
      ) : (
        <FriendsTab
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          activeTab={activeTab}
        />
      )}
    </div>
  )
}

export default FriendsTabs
