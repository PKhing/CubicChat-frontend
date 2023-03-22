import { styled } from 'config/theme'

export const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  flexGrow: 1,
})

export const TitleContainer = styled('div', {
  display: 'flex',
  padding: '10px 15px',
  gap: '5px',
  borderBottom: '$primary700 solid 1px',
  '@md': {
    padding: '10px',
  },
})
