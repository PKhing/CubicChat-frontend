import { useRoomList } from 'common/context/RoomListContext'
import { useSocket } from 'common/context/SocketContext'
import { ChatRoomIdDto } from 'common/types/dtos/group.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import { useCallback, useState } from 'react'

const useCreateGroup = (onClose: () => void) => {
  const [groupName, setGroupName] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const { refetch } = useRoomList()
  const { socket } = useSocket()

  const validate = useCallback((groupName: string) => {
    if (groupName === '') {
      setErrorMessage('Group name is required')
      return false
    }
    setErrorMessage(null)
    return true
  }, [])

  const handleGroupNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setGroupName(e.target.value)

      validate(e.target.value)
    },
    [validate],
  )

  const handleCreateGroup = async () => {
    if (validate(groupName)) {
      const res = await apiClient.post<ChatRoomIdDto>('/groups', {
        name: groupName,
      })

      socket.emit('addRoom', res.data.chatRoomId)

      refetch()
      onClose()
    }
  }

  return { groupName, handleGroupNameChange, handleCreateGroup, errorMessage }
}

export default useCreateGroup
