import { palette } from 'config/theme/palette'
import React from 'react'

import { StyledTypography } from './styled'

export interface TypographyProps
  extends React.ComponentProps<typeof StyledTypography> {
  color?: keyof typeof palette
}
