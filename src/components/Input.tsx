import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftElement?: ReactNode
  rightElement?: ReactNode
  classNames?: {
    inputWrapper?: string
    inputElement?: string
  }
}

const Input: FC<InputProps> = ({
  leftElement,
  rightElement,
  classNames,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between overflow-hidden rounded-[4px] bg-discord-950',
        classNames?.inputWrapper
      )}
    >
      {leftElement && (
        <div className='flex items-center justify-center pl-2'>
          {leftElement}
        </div>
      )}
      <input
        className={cn(
          'w-full bg-transparent px-2 py-1',
          classNames?.inputElement
        )}
        {...props}
      />
      {rightElement && (
        <div className='flex items-center justify-center pr-2'>
          {rightElement}
        </div>
      )}
    </div>
  )
}

export default Input
