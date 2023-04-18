import './index.css'

import { Layout } from 'common/components/Layout'
import { UserProvider } from 'common/context/UserContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SnackbarProvider from 'react-simple-snackbar'
import { route } from 'route'

const router = createBrowserRouter(route)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
      <UserProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </UserProvider>
    </SnackbarProvider>
  </React.StrictMode>,
)
