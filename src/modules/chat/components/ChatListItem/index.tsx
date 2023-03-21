import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { ProfileImage } from 'modules/profile/components/Profile/styled'
import React from 'react'

import { ItemContainer } from './styled'

const ChatListItem = () => {
  return (
    <ItemContainer>
      <ProfileImage
        src="https://popcat.click/twitter-card.jpg"
        alt="profile image"
      />
      <Typography variant="h5" css={{ flexGrow: 1, textAlign: 'left' }}>
        Genshin Impact
      </Typography>
      <Button label="Join" />
    </ItemContainer>
  )
}

export default ChatListItem