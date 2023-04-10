import { RoomListType } from 'common/types/base'

export interface RoomListTabProps {
  type: RoomListType
  setType: (tab: RoomListType) => void
}
