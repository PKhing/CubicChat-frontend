import { IChatItem } from 'common/types/base'

export interface IChatContext {
  openChat: (id: string) => void
  closeChat: () => void
  isChatOpen: boolean
  chatId: string | null
  chatItems: IChatItem[]
}
