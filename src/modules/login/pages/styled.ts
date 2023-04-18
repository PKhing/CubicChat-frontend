import { styled } from 'config/theme'

export const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  gap: '6rem',

  '@lg': {
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
  '@xl': {
    width: '22vw',
  },
  '@lg': {
    width: '80%',
  },
})

export const ImageContainer = styled('img', {
  width: '45%',
  '@lg': {
    width: '80%',
  },
})
