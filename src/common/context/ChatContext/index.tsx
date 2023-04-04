import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { useSocket } from '../SocketContext'
import { IChatContext } from './type'

const ChatContext = createContext<IChatContext>({} as IChatContext)

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [chatId, setChatId] = useState<string | null>()
  const { socket } = useSocket()

  const closeChat = useCallback(() => {
    socket.emit('leave', chatId!)
    setChatId(null)
  }, [chatId, socket])

  const openChat = useCallback(() => {
    if (chatId) closeChat()
    setChatId('1')
    // setChatId(newChatId)
    socket.emit('join', '1')
    // socket.emit('join', newChatId)
  }, [chatId, closeChat, socket])

  const value = useMemo(
    () => ({ openChat, closeChat, isChatOpen: !!chatId }),
    [openChat, closeChat, chatId],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
