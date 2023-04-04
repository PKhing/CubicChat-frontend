export interface User {
  username: string
  profileImage: string
}

export enum MessageType {
  TEXT = 'TEXT',
  STICKER = 'STICKER',
}

export interface IChatItem {
  sender: string
  profileImage: string
  message: IMessage[]
}

export interface IMessage {
  messageType: MessageType
  content: string
  timestamp: string
}
