import { zodResolver } from '@hookform/resolvers/zod'
import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import React, { useCallback } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import cube from 'assets/cube.png'
import useResponsive from 'common/hooks/useResponsive'
import { useNavigate } from 'react-router-dom'
import { apiClient } from 'common/utils/api/axiosInstance'

const LoginSchema = z.object({
  email: z
    .string({ required_error: 'This field is required.' })
    .email('This email is not a valid email.'),
  password: z.string({ required_error: 'This field is required.' }),
})

type Schema = z.infer<typeof LoginSchema>

const LoginPage = () => {
  const { handleSubmit, control } = useForm<Schema>({
    criteriaMode: 'all',
    resolver: zodResolver(LoginSchema),
  })

  const navigate = useNavigate()

  const handleSuccess: SubmitHandler<Schema> = useCallback(async (data) => {
    try {
      await apiClient.post('auth/login', {
        email: data.email,
        password: data.password,
      })

      navigate('/')
    } catch (err) {
      window.alert('Wrong email or password')
    }
  }, [])
  const { isMobile } = useResponsive()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: isMobile ? '5%' : '',
        gap: isMobile ? '3rem' : '7rem',
      }}
    >
      <img src={cube} style={{ width: isMobile ? '80%' : '50%' }} />
      <form
        style={{
          display: 'flex',
          width: isMobile ? '80%' : '20vw',
          flexDirection: 'column',
          border: '1px solid #77DB9B',
          height: 'fit-content',
          padding: '1rem',
        }}
        onSubmit={handleSubmit(handleSuccess)}
      >
        <Controller
          render={({ field, ...formProps }) => (
            <TextField
              style={{}}
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
      </form>
    </div>
  )
}

export default LoginPage
