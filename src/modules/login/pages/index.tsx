import { zodResolver } from '@hookform/resolvers/zod'
import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import Typography from 'common/components/Typography'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import cube from 'assets/cube.png'
import useResponsive from 'common/hooks/useResponsive'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required.' })
    .email('This email is not a valid email.'),
  password: z.string().min(1, { message: 'This field is required.' }),
})

type Schema = z.infer<typeof schema>

const LoginPage = () => {
  const { handleSubmit, control } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

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
        onSubmit={handleSubmit((d) => console.log(d))}
      >
        <Controller
          render={({ field }) => (
            <TextField
              style={{ marginBottom: '1rem' }}
              label={'Email'}
              placeholder="Email"
              {...field}
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              type="password"
              label={'Password'}
              placeholder="Password"
              {...field}
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
        <Button label="login" fullWidth={true} />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Typography variant="body1" color="white">
            Need an account ?
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
