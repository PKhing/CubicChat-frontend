import ChatProvider, { useChat } from 'common/context/ChatContext'
import SocketProvider from 'common/context/SocketContext'
import withGuard from 'common/hoc/withGuard'
import useResponsive from 'common/hooks/useResponsive'
import ChatNotFound from 'modules/chat/components/ChatNotFound'
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
      {isChatOpen ? <ChatPage /> : <ChatNotFound />}
    </div>
  )
}

const WithProvider = () => (
  <SocketProvider>
    <ChatProvider>
      <Home />
    </ChatProvider>
  </SocketProvider>
)

export default withGuard(WithProvider)
