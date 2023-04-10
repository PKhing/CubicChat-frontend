import { MessageType } from '../base'
import { ChatMessageDto } from './chat.types'

export interface ServerToClientEvents {
  chatMessage: (data: ChatMessageDto) => void
  notify: (roomId: string) => void
  invite: (roomId: string) => void
}

export interface ClientToServerEvents {
  chatMessage: (
    roomId: string,
    type: MessageType,
    message: string,
  ) => Promise<void>
  join: (roomId: string) => void
  leave: (roomId: string) => void
  addRoom: (roomId: string, userId?: string) => Promise<void>
}
