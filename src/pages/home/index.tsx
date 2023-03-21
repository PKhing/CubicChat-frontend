import ChatListPage from 'modules/chat/pages/ChatListPage'
import ChatPage from 'modules/chat/pages/ChatPage'
import React from 'react'

const Home = () => {
  // const [chatId,setChatId] = React.useState<string|null>('1')

  return (
    <div style={{ display: 'flex' }}>
      <ChatListPage />
      <ChatPage />
    </div>
  )
}

export default Home
