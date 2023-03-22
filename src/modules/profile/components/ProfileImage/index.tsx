import Typography from 'common/components/Typography'
import React from 'react'

import { ProfileContainer, StyledProfileImage } from './styled'
import { ProfileImageProps } from './types'

const ProfileImage = ({ src, name, css }: ProfileImageProps) => {
  if (!src)
    return (
      <ProfileContainer css={css}>
        <Typography variant="h3">{name[0]}</Typography>
      </ProfileContainer>
    )
  return <StyledProfileImage src={src} css={css} />
}

export default ProfileImage
