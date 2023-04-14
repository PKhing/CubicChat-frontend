import {z} from 'zod'

const LoginSchema = z.object({
    email: z
      .string({ required_error: 'This field is required.' })
      .email('This email is not a valid email.'),
    password: z.string({ required_error: 'This field is required.' }),
  })

export type ILoginSchemaType = z.infer<typeof LoginSchema>
export {LoginSchema}