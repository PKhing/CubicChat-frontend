import { z } from 'zod'

const SignupSchema = z
  .object({
    nickname: z
      .string({ required_error: 'This field is required.' })
      .min(1, { message: 'This field is required.' }),
    email: z
      .string({ required_error: 'This field is required.' })
      .min(1, { message: 'This field is required.' })
      .email('This email is not a valid email.'),
    password: z
      .string({ required_error: 'This field is required.' })
      .min(1, { message: 'This field is required.' }),
    confirmPassword: z
      .string({ required_error: 'This field is required.' })
      .min(1, { message: 'This field is required.' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      })
    }
  })

export type ISignupSchemaType = z.infer<typeof SignupSchema>
export { SignupSchema }
