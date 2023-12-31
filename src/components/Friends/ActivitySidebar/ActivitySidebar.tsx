import { FC } from 'react'
import ActivitySidebarItem from './ActivitySidebarItem'
import { personType, personWithActivityType } from '../../../types'

interface ActivitySidebarProps {
  friendsList: personType[]
}

const ActivitySidebar: FC<ActivitySidebarProps> = ({ friendsList }) => {
  const activeFriends = friendsList.filter(({ currentActivity }) => {
    return !!currentActivity
  }) as personWithActivityType[]

  return (
    <aside className='min-w-[360px] max-w-[420px] basis-1/3 border-l border-discord-500/70 p-4'>
      <h2 className='mb-4 mt-2 text-xl font-bold tracking-wide'>Active Now</h2>
      {activeFriends ? (
        <ul className='flex flex-col gap-2'>
          {activeFriends.map(({ ...props }) => (
            <ActivitySidebarItem key={props.uid} {...props} />
          ))}
        </ul>
      ) : (
        <div className='p-4 text-center'>
          <h3 className='pb-1'>It's quiet for now...</h3>
          <p className='text-sm leading-tight text-white/50'>
            When a friend starts an activity—like playing a game or hanging out
            on voice—we'll show it here!
          </p>
        </div>
      )}
    </aside>
  )
}

export default ActivitySidebar
