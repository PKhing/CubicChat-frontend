import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import React from 'react'
import { BsBoxArrowRight, BsPencilSquare } from 'react-icons/bs'

import EditProfileModal from '../EditProfileModal'
import ProfileImage from '../ProfileImage'
import { ProfileContainer } from './styled'

const Profile = () => {
  const [isModalOpen, setModalOpen] = React.useState(false)

  return (
    <ProfileContainer>
      <ProfileImage src="https://popcat.click/twitter-card.jpg" name="Ayaka" />
      <Typography
        variant="h4"
        css={{ padding: '0 14px', flexGrow: 1, textAlign: 'left' }}
      >
        Ayaka
      </Typography>
      <Button
        variant="text"
        icon={BsPencilSquare}
        onClick={() => setModalOpen(true)}
      />
      <Button variant="text" icon={BsBoxArrowRight} />
      {isModalOpen && <EditProfileModal onClose={() => setModalOpen(false)} />}
    </ProfileContainer>
  )
}

export default Profile
