import { RoomListType } from 'common/types/base'
import { IconType } from 'react-icons'
import { BsChatSquareDots, BsPeople, BsPerson } from 'react-icons/bs'

export const TABS = [RoomListType.GROUP, RoomListType.USER, RoomListType.RECENT]

export const LABEL: { [key in RoomListType]: string } = {
  [RoomListType.USER]: 'User',
  [RoomListType.GROUP]: 'Group',
  [RoomListType.RECENT]: 'Recent',
}

export const ICON: { [key in RoomListType]: IconType } = {
  [RoomListType.USER]: BsPerson,
  [RoomListType.GROUP]: BsPeople,
  [RoomListType.RECENT]: BsChatSquareDots,
}
