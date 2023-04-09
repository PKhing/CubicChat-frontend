import { styled } from 'config/theme'

export const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '15px',
  gap: '20px',
  maxHeight: '100vh',
  height: '100vh',
  boxSizing: 'border-box',
  borderRight: '1px solid $primary600',
  maxWidth: '380px',
  '@md': {
    borderRight: 'none',
    maxWidth: '100%',
  },
})

export const TextFieldContainer = styled('div', {
  color: '$primary200',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$primary800',
  paddingLeft: '10px',
})

export const ChatListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  overflowY: 'auto',
  maxHeight: '100%',
  flexGrow: 1,
  marginTop: '-5px',
})
