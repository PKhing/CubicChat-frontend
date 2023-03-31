import { TabType } from 'modules/chat/pages/ChatListPage/constants'
import { IconType } from 'react-icons'
import { BsChatSquareDots, BsPeople, BsPerson } from 'react-icons/bs'

export const TABS = [TabType.GROUP, TabType.USER, TabType.RECENT]

export const LABEL: { [key in TabType]: string } = {
  [TabType.USER]: 'User',
  [TabType.GROUP]: 'Group',
  [TabType.RECENT]: 'Recent',
}

export const ICON: { [key in TabType]: IconType } = {
  [TabType.USER]: BsPerson,
  [TabType.GROUP]: BsPeople,
  [TabType.RECENT]: BsChatSquareDots,
}
