import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import React from 'react'
import { BsCheck2Square, BsDice5 } from 'react-icons/bs'
import { Portal } from 'react-portal'

import ProfileImage from '../ProfileImage'
import useEditProfile from './hooks/useEditProfile'
import {
  ButtonContainer,
  FormContainer,
  ModalContainer,
  ModalContent,
} from './styled'
import { EditProfileModalProps } from './types'

const EditProfileModal = ({ onClose }: EditProfileModalProps) => {
  const {
    username,
    handleUsernameChange,
    profileImageUrl,
    randomProfileImageUrl,
    handleSubmit,
  } = useEditProfile(onClose)

  return (
    <Portal>
      <ModalContainer onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Typography variant="h3" css={{ textAlign: 'center' }}>
            Edit Profile
          </Typography>
          <div>
            <FormContainer>
              <ProfileImage src={profileImageUrl} name="Ayaka" />
              <TextField
                label="Nickname"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormContainer>
            <ButtonContainer>
              <Button
                label="Random Profile"
                icon={BsDice5}
                onClick={randomProfileImageUrl}
              />
              <Button
                label="Save"
                icon={BsCheck2Square}
                css={{ flexGrow: 1 }}
                onClick={handleSubmit}
              />
            </ButtonContainer>
          </div>
        </ModalContent>
      </ModalContainer>
    </Portal>
  )
}

export default EditProfileModal
