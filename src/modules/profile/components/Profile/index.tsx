import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import React from 'react'
import { BsBoxArrowRight, BsPencilSquare } from 'react-icons/bs'

import EditProfileModal from '../EditProfileModal'
import { ProfileContainer, ProfileImage } from './styled'

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage
        src="https://popcat.click/twitter-card.jpg"
        alt="profile image"
      />
      <Typography
        variant="h4"
        css={{ padding: '0 14px', flexGrow: 1, textAlign: 'left' }}
      >
        Ayaka
      </Typography>
      <Button variant="text" icon={BsPencilSquare} />
      <Button variant="text" icon={BsBoxArrowRight} />
      <EditProfileModal />
    </ProfileContainer>
  )
}

export default Profile
