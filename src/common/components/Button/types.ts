import { IconType } from 'react-icons'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon: IconType
  fullWidth?: boolean
  variant?: 'contained' | 'text'
}
