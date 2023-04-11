import Button from 'common/components/Button'
import React, { useState } from 'react'
import { BsSend, BsSticky } from 'react-icons/bs'

import StickerInput from '../StickerInput'
import useChatInput from './hooks/useChatInput'
import { ButtonContainer, ChatInputContainer, StyledTextArea } from './styled'

const ChatInput = () => {
  const [isOpen, setOpen] = useState(false)
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
        <Button
          icon={BsSticky}
          css={{ backgroundColor: '$primary800' }}
          onClick={() => {
            setOpen(true)
          }}
        />
        <Button
          icon={BsSend}
          css={{ backgroundColor: '$primary800' }}
          type="submit"
        />
      </ButtonContainer>
      {isOpen && <StickerInput onClose={() => setOpen(false)} />}
    </ChatInputContainer>
  )
}

export default ChatInput
