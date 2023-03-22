import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useChat } from 'common/context/ChatContext'
import { ProfileImage } from 'modules/profile/components/Profile/styled'
import React from 'react'

import { ItemContainer } from './styled'

const ChatListItem = () => {
  const { openChat } = useChat()

  return (
    <ItemContainer>
      <ProfileImage
        src="https://popcat.click/twitter-card.jpg"
        alt="profile image"
      />
      <Typography variant="h5" css={{ flexGrow: 1, textAlign: 'left' }}>
        Genshin Impact
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
