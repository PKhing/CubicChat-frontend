import cube from 'assets/cube.png'
import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import useSignupForm from './hooks/useSignupForm'
import { FormContainer, ImageContainer, PageContainer } from './styled'

const SignupPage = () => {
  const { handleClickSubmit, control } = useSignupForm()

  return (
    <PageContainer>
      <ImageContainer src={cube}/>
      <FormContainer onSubmit={handleClickSubmit}>
        <Controller
          render={({ field, ...formProps }) => (
            <TextField
              label={'Nickname'}
              placeholder="Nickname"
              {...field}
              helperText={formProps.fieldState.error?.message}
            />
          )}
          name="nickname"
          control={control}
        />
        <Controller
          render={({ field, ...formProps }) => (
            <TextField
              label={'Email'}
              placeholder="Email"
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
        <Controller
          render={({ field, ...formProps }) => (
            <TextField
              type="password"
              label={'Confirm Password'}
              placeholder="Confirm Password"
              {...field}
              helperText={formProps.fieldState.error?.message}
            />
          )}
          name="confirmPassword"
          control={control}
        />
        <Button
          label="Register"
          fullWidth={true}
          style={{ marginBottom: '0.5rem', marginTop: '1.75rem' }}
        />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Typography variant="body1" color="white">
            Already have an account?
          </Typography>
          <Link to="/login">
            <Typography variant="body1" color="primary500">
              Login
            </Typography>
          </Link>
        </div>
      </FormContainer>
    </PageContainer>
  )
}

export default SignupPage
