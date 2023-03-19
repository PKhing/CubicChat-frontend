import { styled } from 'config/theme'

export const TextFieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  alignItems: 'flex-start',
  width: '100%',
})

export const StyledTextField = styled('input', {
  fontFamily: '$loopless',
  fontSize: '$16',
  backgroundColor: '$primary800',
  color: '$primary200',
  border: 'none',
  padding: '5px 10px',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&::-webkit-input-placeholder': {
    color: '$primary600',
  },

  '&:-ms-input-placeholder': {
    color: '$primary600',
  },
})
