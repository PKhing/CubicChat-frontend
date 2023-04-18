import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { RoomListType } from 'common/types/base'
import ProfileImage from 'modules/profile/components/ProfileImage'
import React from 'react'

import { ItemContainer } from './styled'
import { RoomProps } from './types'

const Room = ({ chatRoom, onClick, currentTab }: RoomProps) => {
  const { name, imageUrl, id } = chatRoom

  const isRecent = currentTab === RoomListType.RECENT

  return (
    <ItemContainer
      css={{ cursor: isRecent ? 'pointer' : undefined }}
      onClick={isRecent ? () => onClick(id) : undefined}
    >
      <ProfileImage name={name} src={imageUrl} />
      <Typography
        variant="h5"
        css={{
          flexGrow: 1,
          textAlign: 'left',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </Typography>
      {!isRecent && (
        <Button
          label={currentTab === RoomListType.GROUP ? 'Join' : 'Chat'}
          onClick={() => onClick(id)}
        />
      )}
    </ItemContainer>
  )
}

export default Room
