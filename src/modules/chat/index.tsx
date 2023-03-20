import Typography from 'common/components/Typography'
import React from 'react'

import ChatBox from './components/ChatBox'
import ChatInput from './components/ChatInput'
import { PageContainer, TitleContainer } from './styled'

const Chat = () => {
  return (
    <PageContainer>
      <TitleContainer>
        <Typography variant="h3">Genshin Impact</Typography>
      </TitleContainer>
      <ChatBox />
      <ChatInput />
    </PageContainer>
  )
}

export default Chat
