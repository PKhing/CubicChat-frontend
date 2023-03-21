export interface IChatContext {
  openChat: (id: string) => void
  closeChat: () => void
  isChatOpen: boolean
}
