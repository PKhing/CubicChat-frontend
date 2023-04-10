import { CSS, styled } from 'config/theme'

const profileStyle: CSS = {
  height: '55px',
  width: '55px',
  minWidth: '55px',
  backgroundColor: '$primary700',
  '@md': {
    height: '45px',
    width: '45px',
    minWidth: '45px',
  },
}

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...profileStyle,
})

export const StyledProfileImage = styled('img', profileStyle)
