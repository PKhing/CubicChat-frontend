import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import TextField from 'common/components/TextField'
import Button from 'common/components/Button'
import Typography from 'common/components/Typography'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required.' })
    .email('This email is not a valid email.'),
  password: z.string().min(1, { message: 'This field is required.' }),
})

type Schema = z.infer<typeof schema>

const Login = () => {
  const { handleSubmit, control } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  return (
    <form
      style={{
        display: 'flex',
        width: '16vw',
        flexGrow: '1',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        //paddingTop: '20rem',
      }}
      onSubmit={handleSubmit((d) => console.log(d))}
    >
      <Controller
        render={({ field }) => (
          <TextField label={'Email'} placeholder="Email" {...field} />
        )}
        name="email"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <TextField label={'Password'} placeholder="Password" {...field} />
        )}
        name="password"
        control={control}
      />
      <Typography variant='body1' color = 'primary500'>Forget your password?</Typography>
      <Button label="login" fullWidth={true} />
    </form>
  )
}

export default Login
