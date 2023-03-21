import { styled } from 'config/theme'

export const StyledButton = styled('button', {
  fontFamily: '$loopless',
  fontSize: '$18',
  lineHeight: '$24',

  '@md': {
    fontSize: '$14',
    lineHeight: '$20',
  },

  fontWeight: 500,
  padding: '5px 10px',
  outline: 'none',
  borderRadius: '0',
  border: 'none',

  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
    border: 'none',
  },

  variants: {
    variant: {
      contained: {
        color: '$primary200',
        backgroundColor: '$primary700',
      },
      text: {
        color: '$primary200',
        backgroundColor: 'transparent',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    onlyIcon: {
      true: {
        padding: '5px',
      },
    },
  },
  defaultVariants: {
    variant: 'contained',
    fullWidth: false,
    onlyIcon: false,
  },
})
