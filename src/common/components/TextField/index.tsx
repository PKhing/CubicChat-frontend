import React from 'react'

import Typography from '../Typography'
import { StyledTextField, TextFieldContainer } from './styled'
import { TextFieldProps } from './types'

const TextField = ({
  label,
  placeholder,
  helperText,
  ...rest
}: TextFieldProps) => {
  return (
    <TextFieldContainer>
      <Typography variant="h5" color="primary200" css={{ textAlign: 'left' }}>
        {label}
      </Typography>
      <StyledTextField type="text" placeholder={placeholder} {...rest} />
      <Typography variant="subtitle2" color="red" css={{ textAlign: 'left' }}>
        {helperText}
      </Typography>
    </TextFieldContainer>
  )
}

export default TextField
