import { useUser } from 'common/context/UserContext'
import { useCallback } from 'react'

const useLogout = () => {
  const { reset } = useUser()
  const handleLogout = useCallback(() => {
    // TODO: Implement logout
    alert('Logged out')

    reset()
  }, [reset])

  return { handleLogout }
}

export default useLogout
