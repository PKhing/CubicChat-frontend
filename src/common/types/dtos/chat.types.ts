import { MessageType } from '../base'

export interface GetStickerDto {
  stickerName: string
  stickerUrl: string
}

export interface GetStickersDto {
  stickers: GetStickerDto[]
}

export interface ChatMessageDto {
  senderName: string
  senderId: string
  profileImage: string
  messageType: MessageType
  content: string
  timestamp: string
  messageId: string
}
