import { TabType } from 'modules/chat/pages/ChatListPage/constants'

export interface ChatListItemProps {
  chatRoom: IChatListItem
  onClick: ((chatId: string) => void) | ((userId: string) => void)
  currentTab: TabType
}

export interface IChatListItem {
  id: string
  name: string
  imageUrl?: string
}
