import { ChangeEventHandler } from 'react'

export interface InputModalProps {
  onClose: () => void
  profileImage?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  actions: JSX.Element
  title: string
  textfieldLabel: string
  helperText?: string | null
}
