import { useChat } from 'common/context/ChatContext'
import { IChatListItem } from 'modules/chat/components/ChatListItem/types'
import { useCallback, useEffect, useState } from 'react'

import { TabType } from '../../constants'

// ignore this just mocking
const getRandomItem = (type?: TabType) => {
  const random = Math.floor(Math.random() * 100000)
  if (type === TabType.RECENT)
    type = Math.random() > 0.5 ? TabType.GROUP : TabType.USER

  const name = `${type} ${random}`
  const imageUrl =
    type == TabType.USER
      ? `https://picsum.photos/300/300?random=${random}`
      : undefined

  return {
    id: random.toString(),
    name,
    imageUrl,
  }
}

const useChatList = (query: string) => {
  const [currentTab, setTab] = useState<TabType>(TabType.USER)
  const [chatListItems, setChatListItems] = useState<IChatListItem[]>([])
  const { openChat } = useChat()

  useEffect(() => {
    // TODO: fetch chat rooms

    // ignore this just mocking
    const MOCK_CHAT_ITEMS: IChatListItem[] = Array.from({ length: 10 }).map(
      () => {
        return getRandomItem(currentTab)
      },
    )
    console.log(query)

    setChatListItems(MOCK_CHAT_ITEMS)
  }, [currentTab, query])

  const handleJoinGroup = useCallback(
    (chatId: string) => {
      // TODO: Call API
      alert(`Joined ${chatId} !`)

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
    setTab,
    chatListItems,
    handleClick: handlers[currentTab],
  }
}

export default useChatList
