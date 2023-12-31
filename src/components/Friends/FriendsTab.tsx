import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import Input from '../Input'
import { CgSearch } from 'react-icons/cg'
import { personStatusType, personType, tabType } from '../../types'
import WumpusMessage from '../WumpusMessage'
import FriendsList from './FriendsList'
import { wumpus } from '../../consts'

interface FriendsTabProps {
  friendsList: personType[]
  setFriendsList: Dispatch<SetStateAction<personType[]>>
  activeTab: tabType
}

const tabMapping: Record<tabType, personStatusType[]> = {
  all: ['online', 'mobile', 'dnd', 'offline', 'invisible', 'idle'],
  online: ['online', 'mobile'],
  blocked: ['blocked'],
  pending: ['pending'],
  add: []
}

const FriendsTab: FC<FriendsTabProps> = ({
  activeTab,
  friendsList,
  setFriendsList
}) => {
  const friendsItems = useMemo(() => {
    return friendsList.filter(({ status }) => {
      return tabMapping[activeTab].includes(status)
    })
  }, [activeTab, friendsList])

  return (
    <>
      <Input
        rightElement={
          <button className='text-white/60 hover:text-white/80'>
            <CgSearch size={22} />
          </button>
        }
        classNames={{ inputElement: 'py-1.5' }}
        placeholder='Search'
      />
      {friendsItems.length > 0 && (
        <h3 className='py-4 text-sm uppercase text-white/50'>
          {activeTab} — {friendsItems.length}
        </h3>
      )}
      <div className='flex h-full flex-col divide-y divide-discord-500/50 border-t border-discord-500/50'>
        {friendsItems.length > 0 ? (
          <FriendsList items={friendsItems} setFriendsList={setFriendsList} />
        ) : (
          <div className='h-full'>
            <WumpusMessage
              src={wumpus[activeTab].image}
              message={wumpus[activeTab].message}
              className='justify-center'
            />
          </div>
        )}
      </div>
    </>
  )
}

export default FriendsTab
