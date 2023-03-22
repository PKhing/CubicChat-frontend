import { styled } from 'config/theme'

export const ModalContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ModalContent = styled('div', {
  backgroundColor: '$primary900',
  padding: '30px',
  paddingTop: '15px',
})

export const FormContainer = styled('div', {
  display: 'flex',
  gap: '10px',
  marginTop: '15px',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '10px',
  marginTop: '10px',
})
