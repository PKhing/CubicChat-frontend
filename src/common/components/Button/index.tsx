import useResponsive from 'common/hooks/useResponsive'
import React from 'react'

import { StyledButton } from './styled'
import { ButtonProps } from './types'

const Button = ({ label, icon: Icon, ...rest }: ButtonProps) => {
  const { isMobile } = useResponsive()
  return (
    <StyledButton {...rest} onlyIcon={!label}>
      {Icon && <Icon size={isMobile ? 20 : 24} />}
      {label}
    </StyledButton>
  )
}

export default Button
