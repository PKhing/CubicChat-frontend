import { IChatItem } from 'common/types/base'
import { apiClient } from 'common/utils/api/axiosInstance'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import { useRoom } from '../RoomContext'
import { useSocket } from '../SocketContext'
import { IChatContext } from './type'
import { appendBack, isAtBottomOfDiv } from './utils'

const ChatContext = createContext<IChatContext>({} as IChatContext)

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { socket } = useSocket()
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([])
  const [isAtBottom, setIsAtBottom] = React.useState<boolean>(true)
  const { roomId } = useRoom()

  // ===================== Get History =====================
  useEffect(() => {
    const getChatHistory = async () => {
      const res = await apiClient.get(`/chat/rooms/${roomId}/history`)
      console.log(res)
    }
    getChatHistory()
    setChatItems([])
  }, [roomId])

  // ===================== Listen on new message =====================
  useEffect(() => {
    socket.on('chatMessage', (message) => {
      setChatItems((chatItems) => appendBack(chatItems, message))

      setIsAtBottom(isAtBottomOfDiv(chatBoxRef))
    })

    return () => {
      socket.off('chatMessage')
    }
  }, [socket])

  // ===================== Auto scroll to bottom =====================
  useEffect(() => {
    if (isAtBottom && chatBoxRef.current) {
      chatBoxRef.current!.scrollTo(0, chatBoxRef.current!.scrollHeight)
    }
  }, [isAtBottom, chatItems])

  const value = useMemo(
    () => ({
      chatItems,
      chatBoxRef,
    }),
    [chatItems, chatBoxRef],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
