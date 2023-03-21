import Button from 'common/components/Button'
import React from 'react'
import { BsSend, BsSticky } from 'react-icons/bs'

import { ButtonContainer, ChatInputContainer, StyledTextArea } from './styled'

const ChatInput = () => {
  return (
    <ChatInputContainer>
      <StyledTextArea placeholder="Start typing..." />
      <ButtonContainer>
        <Button icon={BsSticky} css={{ backgroundColor: '$primary800' }} />
        <Button icon={BsSend} css={{ backgroundColor: '$primary800' }} />
      </ButtonContainer>
    </ChatInputContainer>
  )
}

export default ChatInput
