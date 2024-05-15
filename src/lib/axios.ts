import axios from 'axios'

export const api = axios.create({
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
  // withCredentials: true,
})
