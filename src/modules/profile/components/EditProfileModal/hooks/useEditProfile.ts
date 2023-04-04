import { useUser } from 'common/context/UserContext'
import { ChangeEvent, useCallback, useState } from 'react'

const useEditProfile = (onClose: () => void) => {
  const [username, setUsername] = useState<string>('')
  const [profileImage, setProfileImageUrl] = useState<string>('')
  const { refetch } = useUser()

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

  const randomProfileImageUrl = useCallback(() => {
    // TODO: Implement random image
    const random = Math.floor(Math.random() * 1000)
    setProfileImageUrl(`https://picsum.photos/id/${random}/200/200`)
  }, [])

  const handleSubmit = () => {
    if (validate(username)) {
      // TODO: Implement submit
      alert('Submitted: ' + username)

      refetch()
      onClose()
    }
  }

  return {
    username,
    handleUsernameChange,
    profileImage,
    randomProfileImageUrl,
    handleSubmit,
    errorMessage,
  }
}

export default useEditProfile
