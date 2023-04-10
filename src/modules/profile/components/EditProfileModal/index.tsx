import Button from 'common/components/Button'
import InputModal from 'common/components/InputModal'
import React from 'react'
import { BsCheck2Square, BsDice5 } from 'react-icons/bs'

import useEditProfile from './hooks/useEditProfile'
import { EditProfileModalProps } from './types'

const EditProfileModal = ({ onClose }: EditProfileModalProps) => {
  const {
    username,
    handleUsernameChange,
    profileImage,
    randomProfileImageUrl,
    handleSubmit,
    errorMessage,
  } = useEditProfile(onClose)

  return (
    <InputModal
      title="Edit Profile"
      onClose={onClose}
      onChange={handleUsernameChange}
      value={username}
      profileImage={profileImage}
      textfieldLabel="Nickname"
      helperText={errorMessage}
      actions={
        <>
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
        </>
      }
    />
  )
}

export default EditProfileModal
