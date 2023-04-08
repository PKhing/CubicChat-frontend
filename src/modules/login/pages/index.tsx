import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import { Controller } from 'react-hook-form'
import cube from 'assets/cube.png'
import useResponsive from 'common/hooks/useResponsive'
import useLoginForm from './hooks/useLoginForm'
import { PageContainer, FormContainer } from './styled'

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
          <Typography variant="body1" color="primary500">
            Register
          </Typography>
        </div>
      </FormContainer>
    </PageContainer>
  )
}

export default LoginPage
