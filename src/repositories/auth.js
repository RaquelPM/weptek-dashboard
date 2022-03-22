import storage from './storage'

export const setAuth = ({ userId, accountId, accessToken, refreshToken }) => {
  storage.setItem('userId', userId)
  storage.setItem('accountId', accountId)
  storage.setItem('accessToken', accessToken)
  storage.setItem('refreshToken', refreshToken)
}

export const getUserId = () => storage.getItem('userId')

export const getAccountId = () => storage.getItem('accountId')

export const getAccessToken = () => storage.getItem('accessToken')

export const getRefreshToken = () => storage.getItem('refreshToken')

export const getAuth = () => {
  const userId = getUserId()
  const accountId = getAccountId()
  const accessToken = getAccessToken()
  const refreshToken = getRefreshToken()

  return { userId, accountId, accessToken, refreshToken }
}

export const removeAuth = () => {
  storage.removeItem('userId')
  storage.removeItem('accountId')
  storage.removeItem('accessToken')
  storage.removeItem('refreshToken')
  storage.removeItem('isPassenger')
}
