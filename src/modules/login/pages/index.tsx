import cube from 'assets/cube.png'
import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import useResponsive from 'common/hooks/useResponsive'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import useLoginForm from './hooks/useLoginForm'
import { FormContainer, PageContainer } from './styled'

const LoginPage = () => {
  const { handleClickSubmit, control } = useLoginForm()
  const { isMobile } = useResponsive()

  return (
    <PageContainer>
      <img src={cube} style={{ width: isMobile ? '80%' : '50%' }} />
      <FormContainer onSubmit={handleClickSubmit}>
        <Controller
          render={({ field, ...formProps }) => (
            <TextField
              label={'Email'}
              placeholder="Email"
              type="email"
              {...field}
              helperText={formProps.fieldState.error?.message}
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field, ...formProps }) => (
            <TextField
              type="password"
              label={'Password'}
              placeholder="Password"
              {...field}
              helperText={formProps.fieldState.error?.message}
            />
          )}
          name="password"
          control={control}
        />
        <Typography
          variant="body1"
          color="primary500"
          style={{ marginBottom: '1.75rem' }}
        >
          Forget your password ?
        </Typography>
        <Button
          label="login"
          fullWidth={true}
          style={{ marginBottom: '0.5rem' }}
        />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Typography variant="body1" color="white">
            Need an account?
          </Typography>
          <Link to="/signup">
            <Typography variant="body1" color="primary500">
              Register
            </Typography>
          </Link>
        </div>
      </FormContainer>
    </PageContainer>
  )
}

export default LoginPage
