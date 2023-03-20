import App from 'App'
import Home from 'modules/home'
import React from 'react'

export const route = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/vite',
    element: <App />,
  },
]
