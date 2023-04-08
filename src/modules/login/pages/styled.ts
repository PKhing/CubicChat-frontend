import { styled } from 'config/theme'

export const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  gap: '7rem',

  '@md': {
    flexDirection: 'column',
    top: '5%',
    gap: '3rem',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  width: '20vw',
  flexDirection: 'column',
  border: '1px solid #77DB9B',
  height: 'fit-content',
  padding: '1rem',

  '@md': {
    width: '80%',
  },
})
