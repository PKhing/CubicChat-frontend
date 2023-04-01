import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import ProfileImage from 'modules/profile/components/ProfileImage'
import React from 'react'
import { Portal } from 'react-portal'

import {
  ButtonContainer,
  FormContainer,
  ModalContainer,
  ModalContent,
} from './styled'
import { InputModalProps } from './types'

const InputModal = ({
  onClose,
  profileImageUrl,
  value,
  onChange,
  actions,
  title,
  textfieldLabel,
  helperText,
}: InputModalProps) => {
  return (
    <Portal>
      <ModalContainer onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Typography variant="h3" css={{ textAlign: 'center' }}>
            {title}
          </Typography>
          <div>
            <FormContainer>
              <ProfileImage src={profileImageUrl} name={value} />
              <TextField
                label={textfieldLabel}
                value={value}
                onChange={onChange}
                helperText={helperText}
              />
            </FormContainer>
            <ButtonContainer>{actions}</ButtonContainer>
          </div>
        </ModalContent>
      </ModalContainer>
    </Portal>
  )
}

export default InputModal
