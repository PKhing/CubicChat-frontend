import { styled } from 'config/theme'

export const ChatItemContainer = styled('div', {
  display: 'flex',
  gap: '15px',
})

export const MessagesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const MessageContainer = styled('div', {
  padding: '8px 10px',
  variants: {
    isOwner: {
      true: {
        backgroundColor: '$primary700',
      },
      false: {
        backgroundColor: '$primary800',
      },
    },
  },
  defaultVariants: {
    isOwner: false,
  },
})
