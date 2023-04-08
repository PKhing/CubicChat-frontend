import { zodResolver } from '@hookform/resolvers/zod'
import { apiClient } from 'common/utils/api/axiosInstance'
import { FormEventHandler, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ILoginSchemaType, LoginSchema } from './schema'

const useLoginForm = () => {
  const { handleSubmit, control } = useForm<ILoginSchemaType>({
    criteriaMode: 'all',
    resolver: zodResolver(LoginSchema),
  })

  const navigate = useNavigate()

  const handleSuccess: SubmitHandler<ILoginSchemaType> = useCallback(
    async (data) => {
      try {
        await apiClient.post('auth/login', data)
        navigate('/')
      } catch (err) {
        window.alert('Wrong email or password')
      }
    },
    [navigate],
  )

  const handleClickSubmit: FormEventHandler<HTMLFormElement> =
    handleSubmit(handleSuccess)

  return {
    handleClickSubmit,
    control,
  }
}

export default useLoginForm
