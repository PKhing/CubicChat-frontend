import { StyledTextField } from './styled'

export interface TextFieldProps
  extends React.ComponentProps<typeof StyledTextField> {
  label?: string
  helperText?: string | null
}
