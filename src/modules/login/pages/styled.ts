import { styled } from 'config/theme'
import useResponsive from 'common/hooks/useResponsive'

const isMobile = useResponsive()

export const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: isMobile ? '5%' : '',
  gap: isMobile ? '3rem' : '7rem',
})

export const FormContainer = styled('form', {
  display: 'flex',
  width: isMobile ? '80%' : '20vw',
  flexDirection: 'column',
  border: '1px solid #77DB9B',
  height: 'fit-content',
  padding: '1rem',
})


