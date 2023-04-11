import { styled } from 'config/theme'

export const ChatBoxContainer = styled('div', {
  padding: '15px',
  flexGrow: 1,
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100%',
  overflowY: 'auto',
  overflowAnchor: 'auto',
  scrollbarGutter: 'stable',
})

export const NewMessage = styled('div', {
  display: 'flex',
  backgroundColor: '$primary600',
  padding: '3px 10px',
  alignItems: 'center',
  position: 'absolute',
  cursor: 'pointer',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: 1,
  boxSizing: 'border-box',
})
