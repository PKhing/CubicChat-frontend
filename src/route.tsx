import Home from 'pages/home'
import Login from 'pages/login'
import MockLogin from 'pages/mockLogin'
import React from 'react'

export const route = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/mock-login',
    element: <MockLogin />,
  },
  {
    path: '/login',
    element: <Login />  }
]
