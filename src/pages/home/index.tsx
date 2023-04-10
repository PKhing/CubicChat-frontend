import RoomProvider, { useRoom } from 'common/context/RoomContext'
import SocketProvider from 'common/context/SocketContext'
import withGuard from 'common/hoc/withGuard'
import useResponsive from 'common/hooks/useResponsive'
import ChatNotFound from 'modules/chat/components/ChatNotFound'
import ChatListPage from 'modules/chat/pages/ChatListPage'
import ChatPage from 'modules/chat/pages/ChatPage'
import React from 'react'

const Home = () => {
  const { isRoomOpen } = useRoom()
  const { isMobile } = useResponsive()

  if (isMobile) {
    return isRoomOpen ? <ChatPage /> : <ChatListPage />
  }
  return (
    <div style={{ display: 'flex' }}>
      <ChatListPage />
      {isRoomOpen ? <ChatPage /> : <ChatNotFound />}
    </div>
  )
}

const WithProvider = () => (
  <SocketProvider>
    <RoomProvider>
      <Home />
    </RoomProvider>
  </SocketProvider>
)

export default withGuard(WithProvider)
