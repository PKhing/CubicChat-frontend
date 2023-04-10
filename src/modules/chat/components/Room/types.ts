import { IRoom, RoomListType } from 'common/types/base'

export interface RoomProps {
  chatRoom: IRoom
  onClick: ((chatId: string) => void) | ((userId: string) => void)
  currentTab: RoomListType
}
