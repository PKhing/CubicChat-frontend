import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { TabType } from 'modules/chat/pages/ChatListPage/constants'
import ProfileImage from 'modules/profile/components/ProfileImage'
import React from 'react'

import { ItemContainer } from './styled'
import { ChatListItemProps } from './types'

const ChatListItem = ({ chatRoom, onClick, currentTab }: ChatListItemProps) => {
  const { name, imageUrl, id } = chatRoom

  const isRecent = currentTab === TabType.RECENT

  return (
    <ItemContainer
      css={{ cursor: isRecent ? 'pointer' : undefined }}
      onClick={isRecent ? () => onClick(id) : undefined}
    >
      <ProfileImage name={name} src={imageUrl} />
      <Typography variant="h5" css={{ flexGrow: 1, textAlign: 'left' }}>
        {name}
      </Typography>
      {!isRecent && <Button label="Join" onClick={() => onClick(id)} />}
    </ItemContainer>
  )
}

export default ChatListItem
