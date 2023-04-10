import { IRoom, RoomListType } from 'common/types/base'

export interface IRoomListContext {
  type: RoomListType
  handleTypeChange: (type: RoomListType) => void
  rooms: IRoom[]
  handleClick: (id: string) => void
  setQuery: (query: string) => void
  refetch: () => void
}
