import cube from 'assets/cube.png'
import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import withNotLoginGuard from 'common/hoc/withNotLoginGuard'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar'

import useLoginForm from './hooks/useLoginForm'
import { FormContainer, ImageContainer, PageContainer } from './styled'

const LoginPage = () => {
  const { handleClickSubmit, control, options } = useLoginForm()
  const [openForgetPasswordSnackbar] = useSnackbar(options)

  return (
    <PageContainer>
      <ImageContainer src={cube} />
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
              label={'Password'}
              placeholder="Password"
              {...field}
              helperText={formProps.fieldState.error?.message}
              css={{
                '-webkit-text-security': 'square',
                'text-security': 'square',
              }}
            />
          )}
          name="password"
          control={control}
        />
        <Typography
          onClick={() => {
            openForgetPasswordSnackbar('Sorry, but we do as well.')
          }}
          variant="body1"
          color="primary500"
          style={{ marginBottom: '1.75rem', cursor: 'pointer' }}
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

export default withNotLoginGuard(LoginPage)
