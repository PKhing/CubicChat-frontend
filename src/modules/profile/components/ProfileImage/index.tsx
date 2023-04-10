import Typography from 'common/components/Typography'
import React from 'react'

import { ProfileContainer, StyledProfileImage } from './styled'
import { ProfileImageProps } from './types'

const ProfileImage = ({ src, name, css }: ProfileImageProps) => {
  let char = ''
  if (name) char = name.length > 0 ? name[0].toUpperCase() : ''
  if (!src)
    return (
      <ProfileContainer css={css}>
        <Typography variant="h3">{char}</Typography>
      </ProfileContainer>
    )
  return <StyledProfileImage src={src} css={css} />
}

export default ProfileImage
