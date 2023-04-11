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
  const { roomId } = useRoom()
  const { user } = useUser()
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([])

  // ===================== Get History =====================
  const [oldestMessageId, setOldestMessageId] = React.useState<string | null>(
    null,
  )
  const [isLastPage, setLastPage] = React.useState<boolean>(false)
  const [currentScrollHeight, setCurrentScrollHeight] = React.useState<number>()
  const [isFetching, setFetching] = React.useState<boolean>(false)

  const fetchChatHistory = useCallback(
    async (roomId: string, oldestMessageId: string | null) => {
      console.log('fetch')
      const res = await apiClient.get<GetChatHistoryDto>(
        `/chat/rooms/${roomId}/history`,
        {
          params: {
            lastMessage: oldestMessageId,
            take: 10,
          },
        },
      )

      const { messages, isLastPage } = res.data
      setLastPage(isLastPage)

      if (messages.length === 0) return

      setOldestMessageId(messages[messages.length - 1].messageId)
      setChatItems((chatItems) => {
        for (const message of messages) {
          chatItems = appendFront(chatItems, message)
        }
        return chatItems
      })
    },
    [],
  )

  const fetchMore = useCallback(async () => {
    if (isFetching || isLastPage) return
    setFetching(true)
    setCurrentScrollHeight(chatBoxRef.current?.scrollHeight)
    setIsAtBottom(isAtBottomOfDiv(chatBoxRef))
    await fetchChatHistory(roomId!, oldestMessageId)
    setFetching(false)
  }, [fetchChatHistory, isFetching, isLastPage, oldestMessageId, roomId])

  useEffect(() => {
    if (roomId) {
      setChatItems([])
      setOldestMessageId(null)
      fetchChatHistory(roomId, null)
      setIsAtBottom(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId])

  // ===================== Listen on new message =====================
  const [isAtBottom, setIsAtBottom] = React.useState<boolean>(true)
  const [newMessageNoti, triggerNewmessage] = React.useState<number>(0)
  const chatBoxRef = useRef<HTMLDivElement>(null)

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

  // ===================== Auto scroll to correct position =====================
  const scrollToBottom = useCallback(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
    }
  }, [])

  const scrollToCurrent = useCallback(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo(
        0,
        chatBoxRef.current.scrollHeight - currentScrollHeight!,
      )
    }
  }, [currentScrollHeight])

  useEffect(() => {
    if (isAtBottom && chatBoxRef.current) {
      scrollToBottom()
    } else if (
      chatBoxRef.current &&
      currentScrollHeight &&
      currentScrollHeight !== chatBoxRef.current.scrollHeight
    ) {
      scrollToCurrent()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatItems])

  useEffect(() => {
    if (!chatBoxRef.current) return

    if (
      chatBoxRef.current?.scrollHeight === chatBoxRef.current?.clientHeight &&
      !isLastPage &&
      chatItems.length > 0
    ) {
      fetchMore()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatItems, chatBoxRef])

  const value = useMemo(
    () => ({
      chatItems,
      chatBoxRef,
      newMessageNoti,
      scrollToBottom,
      fetchMore,
      isLastPage,
    }),
    [
      chatItems,
      chatBoxRef,
      newMessageNoti,
      scrollToBottom,
      fetchMore,
      isLastPage,
    ],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
