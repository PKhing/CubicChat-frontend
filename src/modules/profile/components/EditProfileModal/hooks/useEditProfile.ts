import { useUser } from 'common/context/UserContext'
import { apiClient } from 'common/utils/api/axiosInstance'
import { ChangeEvent, useCallback, useState } from 'react'

const useEditProfile = (onClose: () => void) => {
  const { user, setUser } = useUser()
  const [username, setUsername] = useState<string>(user!.username)

  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const validate = useCallback((username: string) => {
    if (username === '') {
      setErrorMessage('Nickname is required')
      return false
    }
    setErrorMessage(null)
    return true
  }, [])

  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value)
      validate(e.target.value)
    },
    [validate],
  )

  const randomProfileImageUrl = useCallback(async () => {
    const res = await apiClient.put('/profile/image-random')
    const { profileImage } = res.data

    setUser({ ...user!, profileImage })
  }, [setUser, user])

  const handleSubmit = async () => {
    if (validate(username)) {
      await apiClient.put('/profile/username', { username })

      setUser({ ...user!, username })
      onClose()
    }
  }

  return {
    username,
    handleUsernameChange,
    profileImage: user!.profileImage,
    randomProfileImageUrl,
    handleSubmit,
    errorMessage,
  }
}

export default useEditProfile
