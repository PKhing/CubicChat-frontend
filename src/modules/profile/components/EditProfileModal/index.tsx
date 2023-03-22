import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import React from 'react'
import { BsCheck2Square, BsDice5 } from 'react-icons/bs'
import { Portal } from 'react-portal'

import { ProfileImage } from '../Profile/styled'
import {
  ButtonContainer,
  FormContainer,
  ModalContainer,
  ModalContent,
} from './styled'

const EditProfileModal = () => {
  return (
    <Portal>
      <ModalContainer>
        <ModalContent>
          <Typography variant="h3" css={{ textAlign: 'center' }}>
            Edit Profile
          </Typography>
          <div>
            <FormContainer>
              <ProfileImage src="https://popcat.click/twitter-card.jpg" />
              <TextField label="Nickname" />
            </FormContainer>
            <ButtonContainer>
              <Button label="Random Profile" icon={BsDice5} />
              <Button
                label="Save"
                icon={BsCheck2Square}
                css={{ flexGrow: 1 }}
              />
            </ButtonContainer>
          </div>
        </ModalContent>
      </ModalContainer>
    </Portal>
  )
}

export default EditProfileModal
