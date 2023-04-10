import { IChatItem } from 'common/types/base'
import { GetChatHistoryDto } from 'common/types/dtos/room.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import { useRoom } from '../RoomContext'
import { useSocket } from '../SocketContext'
import { useUser } from '../UserContext'
import { IChatContext } from './type'
import { appendBack, appendFront, isAtBottomOfDiv } from './utils'

const ChatContext = createContext<IChatContext>({} as IChatContext)

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { socket } = useSocket()
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([])
  const [isAtBottom, setIsAtBottom] = React.useState<boolean>(true)
  const [newMessageNoti, triggerNewmessage] = React.useState<number>(0)
  const { roomId } = useRoom()
  const { user } = useUser()

  // ===================== Get History =====================

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fetchChatHistory = useCallback(async (roomId: string, page = 1) => {
    const res = await apiClient.get<GetChatHistoryDto>(
      `/chat/rooms/${roomId}/history`,
    )

    setChatItems((chatItems) => {
      for (const message of res.data.messages.reverse()) {
        chatItems = appendFront(chatItems, message)
      }
      return chatItems
    })
  }, [])

  useEffect(() => {
    if (roomId) {
      setChatItems([])
      fetchChatHistory(roomId)
    }
  }, [roomId, fetchChatHistory])

  // ===================== Listen on new message =====================
  useEffect(() => {
    socket.on('chatMessage', (message) => {
      setChatItems((chatItems) => appendBack(chatItems, message))

      const isAtBottom = isAtBottomOfDiv(chatBoxRef)
      setIsAtBottom(isAtBottom)
      if (!isAtBottom && message.senderId !== user!.userId)
        triggerNewmessage((prev) => prev + 1)
    })

    return () => {
      socket.off('chatMessage')
    }
  }, [socket, user])

  // ===================== Auto scroll to bottom =====================
  const scrollToBottom = useCallback(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    if (isAtBottom && chatBoxRef.current) {
      scrollToBottom()
    }
  }, [isAtBottom, chatItems, scrollToBottom])

  const value = useMemo(
    () => ({
      chatItems,
      chatBoxRef,
      newMessageNoti,
      scrollToBottom,
    }),
    [chatItems, chatBoxRef, newMessageNoti, scrollToBottom],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
