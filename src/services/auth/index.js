import { admin } from '~/services/api'

export const login = (data) => admin.post('/auth/login', data)
