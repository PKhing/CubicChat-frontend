import { ChatMessageDto } from './chat.types'

export interface GetChatHistoryDto {
  maxPage: number
  messages: ChatMessageDto[]
}
