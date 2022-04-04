import { admin } from '~/services/api'

export const createApp = (data, key) =>
  admin.post('/apps', data, {
    headers: {
      'X-Admin-Permission-Token': key,
    },
  })

export const verifyAppData = (data) => admin.post('/apps/verify-data', data)
