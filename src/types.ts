import { IconType } from 'react-icons'

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type tabType = 'online' | 'all' | 'pending' | 'blocked' | 'add'
export type friendStatusType =
  | 'online'
  | 'offline'
  | 'mobile'
  | 'idle'
  | 'dnd'
  | 'invisible'
export type personStatusType = friendStatusType | 'blocked' | 'pending'

export type personType = {
  displayName: string
  username: string
  status: personStatusType
  image: string | null
  color: string
  uid: string
  currentActivity?: {
    name: string
    duration: number
    icon: string | null
  }
}

export type personWithActivityType = WithRequired<personType, 'currentActivity'>

export interface IMenuItem {
  label: string
  icon?: IconType
  action?: () => void
  warning?: {
    title: string
    message: string
    commitLabel: string
  }
  subMenu?: IMenuItem[]
  divider?: boolean
}
