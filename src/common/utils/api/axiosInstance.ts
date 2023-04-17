import axios from 'axios'

export const API_BASE_URL =
  import.meta.env.VITE_ENABLE_PROXY === 'true'
    ? '/api'
    : import.meta.env.VITE_API_BASE_URL

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
})

apiClient.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
