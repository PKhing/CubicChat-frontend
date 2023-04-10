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
}
