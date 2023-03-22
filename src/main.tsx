import './index.css'

import { Layout } from 'common/components/Layout'
import ChatProvider from 'common/context/ChatContext'
import { UserProvider } from 'common/context/UserContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from 'route'

const router = createBrowserRouter(route)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ChatProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ChatProvider>
    </UserProvider>
  </React.StrictMode>,
)
