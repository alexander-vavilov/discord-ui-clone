import { FC } from 'react'
import Input from '../Input'
import WumpusMessage from '../WumpusMessage'
import { wumpus } from '../../consts'

const FriendsAddTab: FC = () => {
  return (
    <div>
      <h3 className='uppercase'>add friend</h3>
      <span className='text-sm text-white/50'>
        You can add friends with their Discord username.
      </span>
      <div className='-mx-7 border-b border-discord-500/70 px-7 py-4'>
        <Input
          classNames={{
            inputWrapper: 'rounded-lg border border-black/40',
            inputElement: 'py-3'
          }}
          placeholder='You can add friends with their Discord username.'
          rightElement={
            <button
              disabled
              className='whitespace-nowrap rounded-[4px] bg-blurple-400 px-4 py-1 capitalize disabled:cursor-not-allowed disabled:opacity-50'
            >
              send friend request
            </button>
          }
          autoFocus
        />
      </div>
      <WumpusMessage
        src={wumpus['add'].image}
        message={wumpus['add'].message}
      />
    </div>
  )
}

export default FriendsAddTab
