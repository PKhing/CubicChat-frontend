export interface User {
  username: string
  profileImage: string
  userId: string
}

export enum MessageType {
  TEXT = 'TEXT',
  STICKER = 'STICKER',
}

export enum ChatRoomType {
  PRIVATE = 'PRIVATE',
  GROUP = 'GROUP',
}

export interface IChatItem {
  senderName: string
  profileImage: string
  senderId: string
  message: IMessage[]
}

export interface IMessage {
  messageType: MessageType
  content: string
  timestamp: string
  messageId: string
}

export interface IRoom {
  id: string
  name: string
  imageUrl?: string
}

export enum RoomListType {
  USER = 'USER',
  GROUP = 'GROUP',
  RECENT = 'RECENT',
}
