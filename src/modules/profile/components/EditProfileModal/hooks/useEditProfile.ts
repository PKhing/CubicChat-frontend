import { useUser } from 'common/context/UserContext'
import { ChangeEvent, useCallback, useState } from 'react'

const useEditProfile = (onClose: () => void) => {
  const [username, setUsername] = useState<string>('')
  const [profileImageUrl, setProfileImageUrl] = useState<string>('')
  const { refetch } = useUser()

  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value)
    },
    [],
  )

  const randomProfileImageUrl = useCallback(() => {
    // TODO: Implement random image
    const random = Math.floor(Math.random() * 1000)
    setProfileImageUrl(`https://picsum.photos/id/${random}/200/200`)
  }, [])

  const handleSubmit = useCallback(() => {
    // TODO: Implement submit
    alert('Submitted')

    refetch()
    onClose()
  }, [onClose, refetch])

  return {
    username,
    handleUsernameChange,
    profileImageUrl,
    randomProfileImageUrl,
    handleSubmit,
  }
}

export default useEditProfile
