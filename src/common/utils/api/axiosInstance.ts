import axios from 'axios'

const BASE_URL =
  import.meta.env.VITE_ENABLE_PROXY === 'true'
    ? '/api'
    : import.meta.env.VITE_API_BASE_URL

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
})
