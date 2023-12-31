import { Dispatch, FC, SetStateAction } from 'react'
import { personType } from '../../types'
import FriendsListItem from './FriendsListItem'

interface FriendsListProps {
  items: personType[]
  setFriendsList: Dispatch<SetStateAction<personType[]>>
}

const FriendsList: FC<FriendsListProps> = ({ items, setFriendsList }) => {
  const handleRemoveFriend = (uid: string) => {
    setFriendsList((friends) => {
      return friends.filter((friend) => friend.uid !== uid)
    })
  }

  return (
    <div className='flex flex-col divide-y divide-discord-500/50 border-t border-discord-500/50'>
      {items.map(({ ...props }) => (
        <FriendsListItem
          key={props.uid}
          handleRemoveFriend={() => handleRemoveFriend(props.uid)}
          {...props}
        />
      ))}
    </div>
  )
}

export default FriendsList
