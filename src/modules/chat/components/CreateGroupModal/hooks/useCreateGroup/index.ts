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

  const handleCreateGroup = () => {
    if (validate(groupName)) {
      // TODO: Create group
      alert('Create group: ' + groupName)

      onClose()
    }
  }

  return { groupName, handleGroupNameChange, handleCreateGroup, errorMessage }
}

export default useCreateGroup
