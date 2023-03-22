import cube from 'assets/cube.png'
import Typography from 'common/components/Typography'
import React from 'react'

import { ChatNotFoundContainer } from './styled'

const ChatNotFound = () => {
  return (
    <ChatNotFoundContainer>
      <img src={cube} style={{ width: '70%', maxWidth: '500px' }} />
      <Typography css={{ textAlign: 'center' }}>
        You aren’t talking to anyone. Here, have a cube for a companion.
      </Typography>
    </ChatNotFoundContainer>
  )
}

export default ChatNotFound
