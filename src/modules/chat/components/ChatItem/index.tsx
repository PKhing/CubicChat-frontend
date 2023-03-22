import Typography from 'common/components/Typography'
import { ProfileImage } from 'modules/profile/components/Profile/styled'
import React from 'react'

import {
  ChatItemContainer,
  MessageContainer,
  MessagesContainer,
} from './styled'

const ChatItem = () => {
  return (
    <ChatItemContainer>
      <ProfileImage
        src="https://popcat.click/twitter-card.jpg"
        alt="profile image"
        css={{ paddingTop: '5px' }}
      />
      <MessagesContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography color="primary100">Ayaka</Typography>
          <Typography
            css={{ marginLeft: '10px', marginTop: '5px' }}
            variant="caption"
            color="gray300"
          >
            Today 11:27 AM
          </Typography>
        </div>
        <MessageContainer>
          <Typography>adsfdfadsfasdfaf</Typography>
        </MessageContainer>
        <MessageContainer>
          <Typography>adsfdfadsfasdfaf</Typography>
        </MessageContainer>
        <MessageContainer>
          <Typography>adsfdfadsfasdfaf</Typography>
        </MessageContainer>
      </MessagesContainer>
    </ChatItemContainer>
  )
}

export default ChatItem
