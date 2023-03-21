import { TabType } from "modules/chat/pages/ChatListPage/constants"


export interface ChatListTabProps {
  currentTab: TabType
  setTab: (tab: TabType) => void
}
