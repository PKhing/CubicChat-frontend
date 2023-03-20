import React from 'react'

import { StyledTypography } from './styled'
import { TypographyProps } from './types'

const Typography = ({ color, css, ...props }: TypographyProps) => {
  return (
    <StyledTypography
      css={{ color: `$${color || 'primary200'}`, ...css }}
      {...props}
    />
  )
}

export default Typography
