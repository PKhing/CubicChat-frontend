import { styled } from 'config/theme'

export const StickerContainer = styled('div', {
  zIndex: 1,
  backgroundColor: '$primary850',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '15px',
  position: 'absolute',
  right: '10px',
  bottom: '55px',
})

export const Sticker = styled('img', {
  height: '55px',
  width: '55px',
  minWidth: '55px',
  cursor: 'pointer',
  '@md': {
    height: '45px',
    width: '45px',
    minWidth: '45px',
  },
})
