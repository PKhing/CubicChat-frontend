import React, { createContext, useMemo } from 'react'

import useUserData from './hooks/useUserData'
import { IUserContext } from './types'

const UserContext = createContext<IUserContext>({} as IUserContext)

export const useUser = () => React.useContext(UserContext)

export const UserProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const { user, isLoading, refetch, reset, setUser } = useUserData()

  const value = useMemo(
    () => ({
      user,
      refetch,
      reset,
      setUser,
    }),
    [refetch, reset, user, setUser],
  )

  if (isLoading) return null

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
