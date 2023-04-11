import { ChatMessageDto } from './chat.types'

export interface GetChatHistoryDto {
  isLastPage: boolean
  messages: ChatMessageDto[]
}
