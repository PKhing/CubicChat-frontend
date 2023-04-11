import Typography from 'common/components/Typography'
import { useUser } from 'common/context/UserContext'
import { IChatItem, IMessage, MessageType } from 'common/types/base'
import ProfileImage from 'modules/profile/components/ProfileImage'
import React from 'react'

import {
  ChatItemContainer,
  MessageContainer,
  MessagesContainer,
  Sticker,
} from './styled'

const ChatItem = (props: IChatItem) => {
  const { user } = useUser()
  const { senderName, profileImage, message, senderId } = props

  const timestamp = message[0].timestamp
  const isOwner = user?.userId === senderId

  return (
    <ChatItemContainer>
      <ProfileImage
        src={profileImage}
        name={senderName}
        css={{ marginTop: '5px' }}
      />
      <MessagesContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography color="primary100">{senderName}</Typography>
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
        {message.map(({ content, messageId, messageType }: IMessage) => {
          if (messageType === MessageType.STICKER)
            return <Sticker key={messageId} src={content} />
          return (
            <MessageContainer key={messageId} isOwner={isOwner}>
              <Typography css={{ whiteSpace: 'pre-line' }}>
                {content}
              </Typography>
            </MessageContainer>
          )
        })}
      </MessagesContainer>
    </ChatItemContainer>
  )
}

export default ChatItem
