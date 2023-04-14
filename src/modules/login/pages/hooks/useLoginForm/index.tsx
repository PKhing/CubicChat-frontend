import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from 'common/context/UserContext'
import { apiClient } from 'common/utils/api/axiosInstance'
import { FormEventHandler, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { SnackbarOptions, useSnackbar } from 'react-simple-snackbar'

import { ILoginSchemaType, LoginSchema } from './schema'

const useLoginForm = () => {
  const { refetch } = useUser()
  const { handleSubmit, control } = useForm<ILoginSchemaType>({
    criteriaMode: 'all',
    resolver: zodResolver(LoginSchema),
  })

  const options: SnackbarOptions = {
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

  const navigate = useNavigate()
  const [openSnackbar] = useSnackbar(options)

  const handleSuccess: SubmitHandler<ILoginSchemaType> = useCallback(
    async (data) => {
      try {
        await apiClient.post('auth/login', data)
        await refetch()
        navigate('/')
      } catch (err) {
        openSnackbar('Wrong email or password')
      }
    },
    [navigate, openSnackbar, refetch],
  )

  const handleClickSubmit: FormEventHandler<HTMLFormElement> =
    handleSubmit(handleSuccess)

  return {
    handleClickSubmit,
    control,
  }
}

export default useLoginForm
