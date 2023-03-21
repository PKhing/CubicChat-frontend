import { useChat } from 'common/context/ChatContext'
import useResponsive from 'common/hooks/useResponsive'
import ChatListPage from 'modules/chat/pages/ChatListPage'
import ChatPage from 'modules/chat/pages/ChatPage'
import React from 'react'

const Home = () => {
  const { isChatOpen } = useChat()

  const { isMobile } = useResponsive()

  if (isMobile) {
    return isChatOpen ? <ChatPage /> : <ChatListPage />
  }
  return (
    <div style={{ display: 'flex' }}>
      <ChatListPage />
      <ChatPage />
    </div>
  )
}

export default Home
