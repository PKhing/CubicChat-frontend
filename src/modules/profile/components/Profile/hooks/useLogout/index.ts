import { useUser } from 'common/context/UserContext'
import { useCallback } from 'react'

const useLogout = () => {
  const { reset } = useUser()
  const handleLogout = useCallback(async () => {
    // await apiClient.get('/auth/logout')
    localStorage.removeItem('authToken')

    reset()
  }, [reset])

  return { handleLogout }
}

export default useLogout
