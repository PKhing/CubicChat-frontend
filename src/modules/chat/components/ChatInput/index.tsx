import Button from 'common/components/Button'
import { useChat } from 'common/context/ChatContext'
import { useSocket } from 'common/context/SocketContext'
import { MessageType } from 'common/types/base'
import React from 'react'
import { BsSend, BsSticky } from 'react-icons/bs'

import { ButtonContainer, ChatInputContainer, StyledTextArea } from './styled'

const ChatInput = () => {
  const { chatId } = useChat()
  const { socket } = useSocket()

  const handleSend = () => {
    socket.emit('chatMessage', chatId!, MessageType.TEXT, 'Hello')
  }

  return (
    <ChatInputContainer>
      <StyledTextArea placeholder="Start typing..." />
      <ButtonContainer>
        <Button icon={BsSticky} css={{ backgroundColor: '$primary800' }} />
        <Button
          icon={BsSend}
          css={{ backgroundColor: '$primary800' }}
          onClick={handleSend}
        />
      </ButtonContainer>
    </ChatInputContainer>
  )
}

export default ChatInput
