import { apiClient } from 'common/utils/api/axiosInstance'
import { useCallback, useState } from 'react'

const useCreateGroup = (onClose: () => void) => {
  const [groupName, setGroupName] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

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
      await apiClient.post('/groups/create', { name: groupName })

      // will fix later
      window.location.reload()

      onClose()
    }
  }

  return { groupName, handleGroupNameChange, handleCreateGroup, errorMessage }
}

export default useCreateGroup
