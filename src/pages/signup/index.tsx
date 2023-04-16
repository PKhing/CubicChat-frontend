import withNotLoginGuard from 'common/hoc/withNotLoginGuard'
import SignupPage from 'modules/signup/pages'
import React from 'react'
import SnackbarProvider from 'react-simple-snackbar'

const Signup = () => {
  return (
    <SnackbarProvider>
      <SignupPage />
    </SnackbarProvider>
  )
}

export default withNotLoginGuard(Signup)
