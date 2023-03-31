import { User } from 'common/types/base'
import React, { useCallback, useEffect } from 'react'

const useUserData = () => {
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setLoading] = React.useState(true)

  const refetch = useCallback(async () => {
    // TODO: Implement refetch
    setUser({
      userId: '1',
      username: 'Ayaka',
      profileImageUrl: 'https://popcat.click/twitter-card.jpg',
    })
    setLoading(false)
  }, [])

  const reset = useCallback(() => {
    setUser(null)
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { user, isLoading, refetch, reset }
}

export default useUserData
