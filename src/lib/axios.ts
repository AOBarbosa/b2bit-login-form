import axios from 'axios'

const api = axios.create({
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
  // withCredentials: true,
})

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refreshToken')
      if (refreshToken) {
        const response = await axios.post(
          'https://api.homologation.cliqdrive.com.br/auth/login/',
          { refreshToken },
        )
        const newAccessToken = response.data.accessToken
        localStorage.setItem('accessToken', newAccessToken)

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return api(originalRequest)
      }
    }
    return Promise.reject(error)
  },
)

export { api }
