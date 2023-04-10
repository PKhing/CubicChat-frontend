import { useUser } from 'common/context/UserContext'
import { apiClient } from 'common/utils/api/axiosInstance'
import { useCallback } from 'react'

const useLogout = () => {
  const { reset } = useUser()
  const handleLogout = useCallback(async () => {
    await apiClient.get('/logout')

    reset()
  }, [reset])

  return { handleLogout }
}

export default useLogout
