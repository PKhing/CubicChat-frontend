import { useRoom } from 'common/context/RoomContext'
import { useSocket } from 'common/context/SocketContext'
import { MessageType } from 'common/types/base'
import { GetStickerDto, GetStickersDto } from 'common/types/dtos/chat.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import React, { useCallback, useEffect } from 'react'

const useSticker = (onClose: () => void) => {
  const { roomId } = useRoom()
  const { socket } = useSocket()
  const [sticker, setSticker] = React.useState<GetStickerDto[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiClient.get<GetStickersDto>('/chat/stickers')
      setSticker(res.data.stickers)
    }
    fetchData()
  }, [])

  const handleSubmit = useCallback(
    (url: string) => {
      socket.emit('chatMessage', roomId!, MessageType.STICKER, url)
      onClose()
    },
    [onClose, roomId, socket],
  )

  return { sticker, handleSubmit }
}

export default useSticker
