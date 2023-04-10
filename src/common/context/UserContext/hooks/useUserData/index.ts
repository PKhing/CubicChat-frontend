import { User } from 'common/types/base'
import { apiClient } from 'common/utils/api/axiosInstance'
import React, { useCallback, useEffect } from 'react'

const useUserData = () => {
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setLoading] = React.useState(true)

  const refetch = useCallback(async () => {
    try {
      const res = await apiClient.get<User>('/profile')
      setUser(res.data)
    } catch (e) {
      setUser(null)
    } finally {
      setLoading(false)
    }
    setLoading(false)
  }, [])

  const reset = useCallback(() => {
    setUser(null)
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { user, isLoading, refetch, reset, setUser }
}

export default useUserData
