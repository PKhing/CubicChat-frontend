import { ChatRoom, ChatRoomType } from 'common/types/base'
import { GetChatListDto } from 'common/types/dtos/chat'
import { useEffect, useState } from 'react'

import { TabType } from '../../constants'

const getRandomRoom = (type?: ChatRoomType) => {
  const random = Math.floor(Math.random() * 100000)
  if (!type) {
    type = random % 2 === 0 ? ChatRoomType.DM : ChatRoomType.GROUP
  }

  const name = `${type} ${random}`
  const imageUrl =
    type == ChatRoomType.DM
      ? `https://picsum.photos/300/300?random=${random}`
      : undefined

  return {
    chatId: random.toString(),
    type,
    name,
    imageUrl,
  }
}

const useChatList = () => {
  const [currentTab, setTab] = useState<TabType>(TabType.USER)
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

  useEffect(() => {
    // TODO: fetch chat rooms
    const res: GetChatListDto = {
      chatRooms: Array.from({ length: 10 }).map(() => {
        return getRandomRoom(
          currentTab === TabType.USER
            ? ChatRoomType.DM
            : currentTab === TabType.GROUP
            ? ChatRoomType.GROUP
            : undefined,
        )
      }),
    }

    setChatRooms(res.chatRooms)
  }, [currentTab])

  return { currentTab, setTab, chatRooms }
}

export default useChatList
