import { styled } from 'config/theme'

export const TextFieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  alignItems: 'stretch',
  width: '100%',
  boxSizing: 'border-box',
})

export const StyledTextField = styled('input', {
  fontFamily: '$loopless',
  fontSize: '$16',
  backgroundColor: '$primary800',
  color: '$primary200',
  border: 'none',
  padding: '5px 10px',

  '@md': {
    fontSize: '$16',
  },

  '&:focus': {
    outline: 'none',
  },

  '&::-webkit-input-placeholder': {
    color: '$primary600',
  },

  '&:-ms-input-placeholder': {
    color: '$primary600',
  },
  '&:-webkit-autofill': {
    '-webkit-text-fill-color': '#D6F4E1',
    '-webkit-box-shadow': '0 0 0px 1000px #30583E inset',
  },
})
