import withNotLoginGuard from 'common/hoc/withNotLoginGuard'
import LoginPage from 'modules/login/pages'
import React from 'react'
import SnackbarProvider from 'react-simple-snackbar'

const Login = () => {
  return (
    <SnackbarProvider>
      <LoginPage />
    </SnackbarProvider>
  )
}

export default withNotLoginGuard(Login)
