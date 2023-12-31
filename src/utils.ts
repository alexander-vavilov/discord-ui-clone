import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'
import { colors } from './consts'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const getRandomFromArray = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)]
}

export const randomColor = () => {
  return getRandomFromArray(colors)
}

export const secondsToHHMMSS = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60)
  const seconds = totalSeconds - hours * 3600 - minutes * 60

  return { hours, minutes, seconds }
}
