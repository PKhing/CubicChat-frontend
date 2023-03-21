import { IconType } from 'react-icons'

import { StyledButton } from './styled'

export interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
  label?: string
  icon?: IconType
  fullWidth?: boolean
  variant?: 'contained' | 'text'
}
