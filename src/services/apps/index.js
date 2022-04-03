import { admin } from '~/services/api'

export const verifyAppData = (data) => admin.post('/apps/verify-data', data)
