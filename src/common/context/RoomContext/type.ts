export interface IRoomContext {
  openRoom: (id: string) => void
  closeRoom: () => void
  isRoomOpen: boolean
  roomId: string | null
}
