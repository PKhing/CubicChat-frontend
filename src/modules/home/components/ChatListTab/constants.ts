import { TabType } from 'modules/home/constants'
import { IconType } from 'react-icons'
import { BsChatSquareDots, BsPeople, BsPerson } from 'react-icons/bs'

export const LABEL: { [key in TabType]: string } = {
  [TabType.USER]: 'User',
  [TabType.GROUP]: 'Group',
  [TabType.RECENT]: 'Recent',
}

export const ICON: { [key in TabType]: IconType } = {
  [TabType.USER]: BsPeople,
  [TabType.GROUP]: BsPerson,
  [TabType.RECENT]: BsChatSquareDots,
}
