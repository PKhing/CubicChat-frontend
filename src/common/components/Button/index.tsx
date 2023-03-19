import React from 'react'

import { StyledButton } from './styled'
import { ButtonProps } from './types'

const Button = ({ label, icon: Icon, ...rest }: ButtonProps) => {
  return (
    <StyledButton {...rest} onlyIcon={!label}>
      {Icon && <Icon size={24} />}
      {label}
    </StyledButton>
  )
}

export default Button
