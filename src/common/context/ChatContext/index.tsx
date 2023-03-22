import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { IChatContext } from './type'

const ChatContext = createContext<IChatContext>({} as IChatContext)

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [chatId, setChatId] = useState<string | null>()

  const openChat = useCallback((id: string) => {
    setChatId(id)
  }, [])

  const closeChat = useCallback(() => {
    setChatId(null)
  }, [])

  const value = useMemo(
    () => ({ openChat, closeChat, isChatOpen: !!chatId }),
    [openChat, closeChat, chatId],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
