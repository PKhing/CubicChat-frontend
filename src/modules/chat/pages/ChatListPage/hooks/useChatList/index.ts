import { useChat } from 'common/context/ChatContext'
import { GetGroupsDto } from 'common/types/dtos/group.types'
import { GetUsersDto } from 'common/types/dtos/user.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import { IChatListItem } from 'modules/chat/components/ChatListItem/types'
import { useCallback, useEffect, useState } from 'react'

import { TabType } from '../../constants'

const useChatList = (query: string) => {
  const [currentTab, setTab] = useState<TabType>(TabType.USER)
  const [chatListItems, setChatListItems] = useState<IChatListItem[]>([])
  const { openChat } = useChat()

  const handleTabChange = useCallback((tab: TabType) => {
    setChatListItems([])
    setTab(tab)
  }, [])

  const getChatListItems = useCallback(
    async (type: TabType): Promise<IChatListItem[]> => {
      if (type === TabType.USER) {
        const res = await apiClient.get<GetUsersDto>('/users')
        return res.data.users.map(({ userId, username, profileImage }) => ({
          id: userId,
          name: username,
          imageUrl: profileImage,
        }))
      } else if (type === TabType.GROUP) {
        const res = await apiClient.get<GetGroupsDto>('/groups')
        return res.data.groups.map(({ chatRoomId, name }) => ({
          id: chatRoomId,
          name,
        }))
      } else {
        return []
      }
    },
    [],
  )

  useEffect(() => {
    const fetchData = async () => {
      setChatListItems(await getChatListItems(currentTab))
    }
    fetchData()
  }, [currentTab, getChatListItems, query])

  const handleJoinGroup = useCallback(
    async (chatId: string) => {
      await apiClient.put(`/groups/${chatId}/join`)
      openChat(chatId)
    },
    [openChat],
  )

  const handleStartDm = useCallback(
    (userId: string) => {
      // TODO: Call API and get chat id from response
      alert(`Chat ${userId}`)

      const CHAT_ID = String(Math.floor(Math.random() * 100000))
      openChat(CHAT_ID)
    },
    [openChat],
  )

  const handlers = {
    [TabType.GROUP]: handleJoinGroup,
    [TabType.USER]: handleStartDm,
    [TabType.RECENT]: openChat,
  }

  return {
    currentTab,
    setTab: handleTabChange,
    chatListItems,
    handleClick: handlers[currentTab],
  }
}

export default useChatList
