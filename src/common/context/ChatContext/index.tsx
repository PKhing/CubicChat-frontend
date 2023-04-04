import { IChatItem } from 'common/types/base'
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useSocket } from '../SocketContext'
import { IChatContext } from './type'
import { appendMessage } from './utils'

const ChatContext = createContext<IChatContext>({} as IChatContext)

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [chatId, setChatId] = useState<string | null>(null)
  const { socket } = useSocket()

  // ===================== Chat ====================
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

  // ===================== Message ====================
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([])

  useEffect(() => {
    socket.on('chatMessage', (message) => {
      console.log(message)
      setChatItems((chatItems) => appendMessage(chatItems, message))
    })

    return () => {
      socket.off('chatMessage')
    }
  }, [socket])

  const value = useMemo(
    () => ({ openChat, closeChat, isChatOpen: !!chatId, chatId, chatItems }),
    [openChat, closeChat, chatId, chatItems],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
