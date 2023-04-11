import { useRoom } from 'common/context/RoomContext'
import { IRoom } from 'common/types/base'
import { apiClient } from 'common/utils/api/axiosInstance'
import { useEffect, useState } from 'react'

const useRoomName = () => {
  const [roomName, setRoomName] = useState<string>('')
  const { roomId } = useRoom()

  useEffect(() => {
    const getRoomName = async () => {
      const res = await apiClient.get<IRoom>(`/groups/${roomId}/info`)
      setRoomName(res.data.name)
    }

    setRoomName('⠀')
    getRoomName()
  }, [roomId])

  return { roomName }
}

export default useRoomName
