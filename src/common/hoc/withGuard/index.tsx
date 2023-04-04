import { useUser } from 'common/context/UserContext'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withGuard = (WrappedComponent: React.ComponentType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WithGuard = (props: any) => {
    const { user } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
      if (!user) {
        navigate('/mock-login', { replace: true })
      }
    }, [navigate, user])

    if (!user) {
      return null
    }
    return <WrappedComponent {...props} />
  }

  return WithGuard
}

export default withGuard
