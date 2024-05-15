import axios from 'axios'

export const api = axios.create({
  headers: {
    // Authorization: 'Bearer {{access token you received at login}}',
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
})
