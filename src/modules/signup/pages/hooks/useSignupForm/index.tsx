import { zodResolver } from '@hookform/resolvers/zod'
import { apiClient } from 'common/utils/api/axiosInstance'
import { FormEventHandler, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SnackbarOptions, useSnackbar } from 'react-simple-snackbar'

import { ISignupSchemaType, SignupSchema } from './schema'

const useSignupForm = () => {
  const { handleSubmit, control } = useForm<ISignupSchemaType>({
    criteriaMode: 'all',
    resolver: zodResolver(SignupSchema),
  })

  const errorOptions: SnackbarOptions = {
    position: 'top-center',
    style: {
      backgroundColor: 'snow',
      border: '5px solid red',
      color: 'black',
      fontFamily: 'Poppins, Prompt, sans-serif',
      fontSize: '20px',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'lightcoral',
      fontSize: '16px',
    },
  }

  const successOptions: SnackbarOptions = {
    position: 'top-center',
    style: {
      backgroundColor: 'snow',
      border: '5px solid green',
      color: 'black',
      fontFamily: 'Poppins, Prompt, sans-serif',
      fontSize: '20px',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'black',
      fontSize: '16px',
    },
  }

  const [openSuccessSnackbar] = useSnackbar(successOptions)
  const [openErrorSnackbar] = useSnackbar(errorOptions)

  const handleSuccess: SubmitHandler<ISignupSchemaType> = useCallback(
    async (data) => {
      try {
        await apiClient.post('auth/signup', {
          email: data.email,
          password: data.password,
          username: data.nickname,
        })
        openSuccessSnackbar('Register success!')
      } catch (err) {
        openErrorSnackbar('This email has already been used')
      }
    },
    [openErrorSnackbar, openSuccessSnackbar],
  )

  const handleClickSubmit: FormEventHandler<HTMLFormElement> =
    handleSubmit(handleSuccess)

  return {
    handleClickSubmit,
    control,
  }
}

export default useSignupForm
