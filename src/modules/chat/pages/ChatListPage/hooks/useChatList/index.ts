import { useRoom } from 'common/context/RoomContext'
import { useUser } from 'common/context/UserContext'
import { GetGroupsDto, GetRecentGroupsDto } from 'common/types/dtos/group.types'
import { GetUsersDto } from 'common/types/dtos/user.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import { IChatListItem } from 'modules/chat/components/ChatListItem/types'
import { useCallback, useEffect, useState } from 'react'

import { TabType } from '../../constants'

const useChatList = (query: string) => {
  const [currentTab, setTab] = useState<TabType>(TabType.USER)
  const [chatListItems, setChatListItems] = useState<IChatListItem[]>([])
  const { openRoom } = useRoom()
  const { user } = useUser()

  const handleTabChange = useCallback((tab: TabType) => {
    setChatListItems([])
    setTab(tab)
  }, [])

  const getChatListItems = useCallback(
    async (type: TabType): Promise<IChatListItem[]> => {
      if (type === TabType.USER) {
        const res = await apiClient.get<GetUsersDto>('/users')
        const users = res.data.users.map(
          ({ userId, username, profileImage }) => ({
            id: userId,
            name: username,
            imageUrl: profileImage,
          }),
        )
        return users.filter(({ id }) => id != user!.userId)
      } else if (type === TabType.GROUP) {
        const res = await apiClient.get<GetGroupsDto>('/groups')
        return res.data.groups.map(({ chatRoomId, name }) => ({
          id: chatRoomId,
          name,
        }))
      } else {
        const res = await apiClient.get<GetRecentGroupsDto>('/groups/recent')
        return res.data.groups.map(({ chatRoomId, name }) => ({
          id: chatRoomId,
          name,
        }))
      }
    },
    [user],
  )

  useEffect(() => {
    const fetchData = async () => {
      setChatListItems(await getChatListItems(currentTab))
    }
    fetchData()
  }, [currentTab, getChatListItems, query])

  const handleJoinGroup = useCallback(
    async (roomId: string) => {
      await apiClient.put(`/groups/${roomId}/join`)
      openRoom(roomId)
    },
    [openRoom],
  )

  const handleStartDm = useCallback(
    (userId: string) => {
      // TODO: Call API and get chat id from response
      alert(`Chat ${userId}`)

      const CHAT_ID = String(Math.floor(Math.random() * 100000))
      openRoom(CHAT_ID)
    },
    [openRoom],
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
