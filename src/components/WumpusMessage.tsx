import { FC } from 'react'
import { cn } from '../utils'

interface WumpusMessageProps {
  src: string
  message: string
  className?: string
}

const WumpusMessage: FC<WumpusMessageProps> = ({ src, message, className }) => {
  return (
    <div
      className={cn(
        'flex h-full flex-col items-center gap-10 text-center',
        className
      )}
    >
      <img src={src} />
      <span className='text-white/50'>{message}</span>
    </div>
  )
}

export default WumpusMessage
