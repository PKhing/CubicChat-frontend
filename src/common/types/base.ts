export interface User {
  userId: string
  username: string
  profileImageUrl: string
}

export enum ChatRoomType {
  GROUP = 'GROUP',
  DM = 'DM',
}

export interface ChatRoom {
  chatId: string
  type: ChatRoomType
  name: string
  imageUrl?: string
}
