import './index.css'

import { Layout } from 'common/components/Layout'
import { UserProvider } from 'common/context/UserContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from 'route'

const router = createBrowserRouter(route)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </UserProvider>
  </React.StrictMode>,
)
