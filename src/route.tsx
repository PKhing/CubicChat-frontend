import Home from 'pages/home'
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
]
