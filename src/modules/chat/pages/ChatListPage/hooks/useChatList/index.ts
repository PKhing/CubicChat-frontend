import { useRoom } from 'common/context/RoomContext'
import { useSocket } from 'common/context/SocketContext'
import { useUser } from 'common/context/UserContext'
import { ChatRoomIdDto } from 'common/types/dtos/group.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import { IChatListItem } from 'modules/chat/components/ChatListItem/types'
import { useCallback, useEffect, useState } from 'react'

import { TabType } from '../../constants'
import { getChatListItems } from './utils'

const useChatList = (query: string) => {
  const [currentTab, setTab] = useState<TabType>(TabType.USER)
  const [chatListItems, setChatListItems] = useState<IChatListItem[]>([])
  const { openRoom } = useRoom()
  const { user } = useUser()
  const { socket } = useSocket()

  // ============ Change tab ============

  const handleTabChange = useCallback((tab: TabType) => {
    setChatListItems([])
    setTab(tab)
  }, [])

  // ============ Fetch when tab and query change ============

  useEffect(() => {
    const fetchData = async () => {
      setChatListItems(await getChatListItems(currentTab, user!.userId))
    }
    fetchData()
  }, [currentTab, query, user])

  // ============ Listen on invite ============

  useEffect(() => {
    socket.on('invite', (roomId: string) => {
      socket.emit('addRoom', roomId)
    })

    return () => {
      socket.off('invite')
    }
  }, [socket])

  // ============ Listen on notify ============
  useEffect(() => {
    if (currentTab !== TabType.RECENT) return

    socket.on('notify', (roomId: string) => {
      const idx = chatListItems.findIndex((item) => item.id === roomId)

      if (idx === -1) {
        // TODO: get new chat list item
        return
      }

      const newChatListItems = [...chatListItems]
      newChatListItems.splice(idx, 1)
      setChatListItems([chatListItems[idx], ...newChatListItems])
    })

    return () => {
      socket.off('notify')
    }
  }, [chatListItems, socket, currentTab])

  // ============ Handlers ============

  const handleJoinGroup = useCallback(
    async (roomId: string) => {
      await apiClient.put(`/groups/${roomId}/join`)
      socket.emit('addRoom', roomId)

      openRoom(roomId)
    },
    [openRoom, socket],
  )

  const handleStartDm = useCallback(
    async (userId: string) => {
      const res = await apiClient.get<ChatRoomIdDto>(`/users/${userId}/chat`)
      const roomId = res.data.chatRoomId
      openRoom(roomId)

      socket.emit('addRoom', roomId, userId)
    },
    [openRoom, socket],
  )

  const handlers = {
    [TabType.GROUP]: handleJoinGroup,
    [TabType.USER]: handleStartDm,
    [TabType.RECENT]: openRoom,
  }

  return {
    currentTab,
    setTab: handleTabChange,
    chatListItems,
    handleClick: handlers[currentTab],
  }
}

export default useChatList
