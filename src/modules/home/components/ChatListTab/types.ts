import { TabType } from 'modules/home/constants'

export interface ChatListTabProps {
  currentTab: TabType
  setTab: (tab: TabType) => void
}
