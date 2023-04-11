import RoomProvider, { useRoom } from 'common/context/RoomContext'
import SocketProvider from 'common/context/SocketContext'
import withGuard from 'common/hoc/withGuard'
import useResponsive from 'common/hooks/useResponsive'
import ChatNotFound from 'modules/chat/components/ChatNotFound'
import ChatPage from 'modules/chat/pages/ChatPage'
import RoomListPage from 'modules/chat/pages/RoomListPage'
import React from 'react'

const Home = () => {
  const { isRoomOpen } = useRoom()
  const { isMobile } = useResponsive()

  return (
    <div style={{ display: 'flex' }}>
      {!isMobile && <RoomListPage />}
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
