import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useChat } from 'common/context/ChatContext'
import ProfileImage from 'modules/profile/components/ProfileImage'
import React from 'react'

import { ItemContainer } from './styled'
import { ChatListItemProps } from './types'

const ChatListItem = ({ chatRoom }: ChatListItemProps) => {
  const { name, imageUrl } = chatRoom

  const { openChat } = useChat()

  return (
    <ItemContainer>
      <ProfileImage name={name} src={imageUrl} />
      <Typography variant="h5" css={{ flexGrow: 1, textAlign: 'left' }}>
        {name}
      </Typography>
      <Button
        label="Join"
        onClick={() => {
          openChat('1')
        }}
      />
    </ItemContainer>
  )
}

export default ChatListItem
