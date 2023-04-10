import { MessageType } from '../base'

export interface GetChatMessageDto {
  createdAt: Date
  messageType: MessageType
  sender: {
    username: string
    profileImage: string
  }
  content: string
}

export interface GetChatHistoryDto {
  maxPage: number
  messages: GetChatMessageDto[]
}
