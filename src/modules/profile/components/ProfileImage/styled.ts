import { styled } from 'config/theme'

export const ProfileContainer = styled('div', {
  backgroundColor: '$primary700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '55px',
  width: '55px',
  '@md': {
    height: '45px',
    width: '45px',
  },
})

export const StyledProfileImage = styled('img', {
  height: '55px',
  '@md': {
    height: '45px',
  },
})
