import useResponsive from 'common/hooks/useResponsive'
import ChatListPage from 'modules/chat/pages/ChatListPage'
import ChatPage from 'modules/chat/pages/ChatPage'
import React from 'react'

const Home = () => {
  const [chatId, setChatId] = React.useState<string | null>('1')

  const { isMobile } = useResponsive()

  if (isMobile) {
    return chatId ? <ChatPage /> : <ChatListPage />
  }
  return (
    <div style={{ display: 'flex' }}>
      <ChatListPage />
      <ChatPage />
    </div>
  )
}

export default Home
