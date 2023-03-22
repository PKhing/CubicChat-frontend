import React from 'react'

import ChatItem from '../ChatItem'
import { ChatBoxContainer } from './styled'

const ChatBox = () => {
  return (
    <ChatBoxContainer>
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </ChatBoxContainer>
  )
}

export default ChatBox
