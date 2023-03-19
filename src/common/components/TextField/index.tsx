import React from 'react'

import Typography from '../Typography'
import { StyledTextField, TextFieldContainer } from './styled'
import { TextFieldProps } from './types'

const TextField = ({ label, placeholder, helperText }: TextFieldProps) => {
  return (
    <TextFieldContainer>
      <Typography variant="h5" color="primary200">
        {label}
      </Typography>
      <StyledTextField type="text" placeholder={placeholder} />
      <Typography variant="subtitle2" color="red">
        {helperText}
      </Typography>
    </TextFieldContainer>
  )
}

export default TextField
