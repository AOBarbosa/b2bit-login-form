import axios from 'axios'

export const api = axios.create({
  headers: {
    // Authorization: 'Bearer {{access token you received at login}}',
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
})

// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
//   headers: {
//     Accept: 'application/json;version=v1_web',
//     'Content-Type': 'application/json',
//   },
// })

// // Add a request interceptor to add the token to all outgoing requests
// api.interceptors.request.use(
//   (config) => {
//     const token =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NDMyMTQ3LCJpYXQiOjE3MTUzNDU3NDcsImp0aSI6IjAyZTBmZTY2YmQ2MDRkMmY5MjJhNGRiMzIxNmFiYzU2IiwidXNlcl9pZCI6NH0.L4H2FEKlhM5RXeqX0o0xiszBYe5uH7SyEABAnhOSf1A'
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// export { api }
