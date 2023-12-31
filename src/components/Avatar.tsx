import { FC, useState } from 'react'
import { personStatusType } from '../types'

interface AvatarProps {
  image: string | null
  displayName: string
  color: string
  status?: personStatusType
}

const Avatar: FC<AvatarProps> = ({
  image = null,
  displayName,
  status,
  color
}) => {
  const [isImageError, setIsImageError] = useState(false)

  return (
    <div
      className='relative flex h-8 w-8 select-none items-center justify-center rounded-full'
      style={{ background: color }}
    >
      {image && !isImageError ? (
        <img
          src={image}
          onError={() => setIsImageError(true)}
          className='h-full w-full rounded-full'
          draggable={false}
          alt={displayName}
        />
      ) : (
        <span>{displayName.charAt(0)}</span>
      )}
      {status && (
        <div className='absolute -bottom-[10%] -right-[10%] h-4 w-4 rounded-full border-[3px] border-discord-700 bg-green-500'></div>
      )}
    </div>
  )
}

export default Avatar
