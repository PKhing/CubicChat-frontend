import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import useSticker from './hooks/useSticker'
import { Sticker, StickerContainer } from './styled'
import { StickerInputProps } from './types'

const StickerInput = ({ onClose }: StickerInputProps) => {
  const { sticker, handleSubmit } = useSticker(onClose)
  if (sticker.length === 0) return <></>

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <StickerContainer>
        {sticker.map(({ stickerUrl }) => (
          <Sticker
            src={stickerUrl}
            key={stickerUrl}
            onClick={() => handleSubmit(stickerUrl)}
          />
        ))}
      </StickerContainer>
    </OutsideClickHandler>
  )
}

export default StickerInput
