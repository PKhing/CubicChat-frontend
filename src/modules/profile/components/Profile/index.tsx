import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useUser } from 'common/context/UserContext'
import React from 'react'
import { BsBoxArrowRight, BsPencilSquare } from 'react-icons/bs'

import EditProfileModal from '../EditProfileModal'
import ProfileImage from '../ProfileImage'
import useLogout from './hooks/useLogout'
import { ProfileContainer } from './styled'

const Profile = () => {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const { user } = useUser()
  const { username, profileImage } = user!
  const { handleLogout } = useLogout()

  return (
    <ProfileContainer>
      <ProfileImage src={profileImage} name={username} />
      <Typography
        variant="h4"
        css={{ padding: '0 14px', flexGrow: 1, textAlign: 'left' }}
      >
        {username}
      </Typography>
      <Button
        variant="text"
        icon={BsPencilSquare}
        onClick={() => setModalOpen(true)}
      />
      <Button variant="text" icon={BsBoxArrowRight} onClick={handleLogout} />
      {isModalOpen && <EditProfileModal onClose={() => setModalOpen(false)} />}
    </ProfileContainer>
  )
}

export default Profile
