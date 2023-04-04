import { useChat } from 'common/context/ChatContext'
import React from 'react'

import ChatItem from '../ChatItem'
import { ChatBoxContainer } from './styled'

const ChatBox = () => {
  const { chatItems } = useChat()

  return (
    <ChatBoxContainer>
      {chatItems.map((chatItem) => (
        <ChatItem key={chatItem.message[0].timestamp} {...chatItem} />
      ))}
    </ChatBoxContainer>
  )
}

export default ChatBox
