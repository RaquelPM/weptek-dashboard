import axios from 'axios'

import { getAppId } from '~/repositories/app'
import {
  getAuth,
  getRefreshToken,
  removeAuth,
  setAuth,
} from '~/repositories/auth'

const { REACT_APP_API_URL: baseURL } = process.env

const accessTokenInterceptor = (config) => {
  const appId = getAppId()
  const { accessToken } = getAuth()

  config.headers.Authorization = `Bearer ${accessToken}`

  config.baseURL = `${config.baseURL}/${appId}`

  return config
}

const refreshTokenInterceptor = (api) => async (error) => {
  const refreshToken = getRefreshToken()

  const { response, config } = error

  if (response.status !== 403 || !refreshToken) {
    throw error
  }

  try {
    const { data } = await api.post('/auth/refresh', { refreshToken })

    setAuth({ ...data, isPassenger: data.accountType === 'passenger' })

    return await api.request({ ...config, baseURL: api.baseURL })
  } catch {
    removeAuth()

    window.location.reload()

    throw error
  }
}

const base = axios.create({ baseURL: process.env.REACT_APP_API_URL })

const admin = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/admin`,
  headers: {
    'X-Chevette-Key': 'c68686e2-d818-4abd-985a-29464426c69b',
  },
})

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/apps`,
  headers: {
    'X-Chevette-Key': 'c68686e2-d818-4abd-985a-29464426c69b',
  },
})

const apiForm = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/apps`,
  headers: {
    'X-Chevette-Key': 'c68686e2-d818-4abd-985a-29464426c69b',
    'Content-Type': 'multipart/form-data',
  },
})

api.interceptors.request.use(accessTokenInterceptor)

apiForm.interceptors.request.use(accessTokenInterceptor)

api.interceptors.response.use(
  (response) => response,
  refreshTokenInterceptor(api)
)

apiForm.interceptors.response.use(
  (response) => response,
  refreshTokenInterceptor(apiForm)
)

export { baseURL, base, admin, api, apiForm }
