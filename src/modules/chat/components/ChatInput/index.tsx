import Button from 'common/components/Button'
import { useRoom } from 'common/context/RoomContext'
import { useSocket } from 'common/context/SocketContext'
import { MessageType } from 'common/types/base'
import React from 'react'
import { BsSend, BsSticky } from 'react-icons/bs'

import { ButtonContainer, ChatInputContainer, StyledTextArea } from './styled'

const ChatInput = () => {
  const { roomId } = useRoom()
  const { socket } = useSocket()

  const handleSend = () => {
    socket.emit('chatMessage', roomId!, MessageType.TEXT, 'Hello')
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
