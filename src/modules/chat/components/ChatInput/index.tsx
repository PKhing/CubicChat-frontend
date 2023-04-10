import Button from 'common/components/Button'
import React from 'react'
import { BsSend, BsSticky } from 'react-icons/bs'

import useChatInput from './hooks/useChatInput'
import { ButtonContainer, ChatInputContainer, StyledTextArea } from './styled'

const ChatInput = () => {
  const { message, handleChange, handleSubmit, handleKeyDown } = useChatInput()

  return (
    <ChatInputContainer onSubmit={handleSubmit}>
      <StyledTextArea
        placeholder="Start typing..."
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ButtonContainer>
        <Button icon={BsSticky} css={{ backgroundColor: '$primary800' }} />
        <Button
          icon={BsSend}
          css={{ backgroundColor: '$primary800' }}
          type="submit"
        />
      </ButtonContainer>
    </ChatInputContainer>
  )
}

export default ChatInput
