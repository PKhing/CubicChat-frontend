import { IChatItem } from 'common/types/base'
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useSocket } from '../SocketContext'
import { IChatContext } from './type'
import { appendBack, isAtBottomOfDiv } from './utils'

const ChatContext = createContext<IChatContext>({} as IChatContext)

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [chatId, setChatId] = useState<string | null>(null)
  const { socket } = useSocket()
  const chatBoxRef = useRef<HTMLDivElement>(null)

  // ===================== Chat =====================
  const closeChat = useCallback(() => {
    socket.emit('leave', chatId!)
    setChatId(null)
  }, [chatId, socket])

  const openChat = useCallback(
    (newChatId: string) => {
      if (chatId) closeChat()
      setChatId(newChatId)
      socket.emit('join', newChatId)
    },
    [chatId, closeChat, socket],
  )

  // ===================== Message =====================
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([])
  const [isAtBottom, setIsAtBottom] = React.useState<boolean>(true)

  useEffect(() => {
    socket.on('chatMessage', (message) => {
      setChatItems((chatItems) => appendBack(chatItems, message))

      setIsAtBottom(isAtBottomOfDiv(chatBoxRef))
    })

    return () => {
      socket.off('chatMessage')
    }
  }, [socket])

  // scroll to bottom
  useEffect(() => {
    if (isAtBottom && chatBoxRef.current) {
      chatBoxRef.current!.scrollTo(0, chatBoxRef.current!.scrollHeight)
    }
  }, [isAtBottom, chatItems])

  const value = useMemo(
    () => ({
      openChat,
      closeChat,
      isChatOpen: !!chatId,
      chatId,
      chatItems,
      chatBoxRef,
    }),
    [openChat, closeChat, chatId, chatItems, chatBoxRef],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
