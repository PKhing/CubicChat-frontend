import { apiClient } from 'common/utils/api/axiosInstance'
import React from 'react'

const MockLogin = () => {
  const handleLogin1 = () => {
    apiClient.post('/auth/login', {
      email: 'mafumafu@gmail.com',
      password: 'password',
    })
  }

  const handleLogin2 = () => {
    apiClient.post('/auth/login', {
      email: 'soraru@gmail.com',
      password: 'password',
    })
  }

  const handleLogUser = async () => {
    const res = await apiClient.get('/profile')
    console.log(res.data)
  }

  return (
    <div>
      <button onClick={handleLogin1}>Account 1</button>
      <button onClick={handleLogin2}>Account 2</button>
      <button onClick={handleLogUser}>Log user</button>
    </div>
  )
}

export default MockLogin
