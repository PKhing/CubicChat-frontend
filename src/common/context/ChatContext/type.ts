import { IChatItem } from 'common/types/base'

export interface IChatContext {
  chatItems: IChatItem[]
  chatBoxRef: React.RefObject<HTMLDivElement>
  newMessageNoti: number
  scrollToBottom: () => void
}
