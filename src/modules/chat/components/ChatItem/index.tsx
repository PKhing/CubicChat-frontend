import Typography from 'common/components/Typography'
import { IChatItem, IMessage } from 'common/types/base'
import ProfileImage from 'modules/profile/components/ProfileImage'
import React from 'react'

import {
  ChatItemContainer,
  MessageContainer,
  MessagesContainer,
} from './styled'

const ChatItem = (props: IChatItem) => {
  const { sender, profileImage, message } = props
  const timestamp = message[0].timestamp

  return (
    <ChatItemContainer>
      <ProfileImage
        src={profileImage}
        name={sender}
        css={{ paddingTop: '5px' }}
      />
      <MessagesContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography color="primary100">{sender}</Typography>
          <Typography
            css={{ marginLeft: '10px', marginTop: '5px' }}
            variant="caption"
            color="gray300"
          >
            {new Date(timestamp).toLocaleDateString() +
              ' ' +
              new Date(timestamp).toLocaleTimeString()}
          </Typography>
        </div>
        {message.map(({ content, timestamp }: IMessage) => (
          <MessageContainer key={timestamp}>
            <Typography>{content}</Typography>
          </MessageContainer>
        ))}
      </MessagesContainer>
    </ChatItemContainer>
  )
}

export default ChatItem
