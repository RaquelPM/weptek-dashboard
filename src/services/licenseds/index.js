import { getAccountId } from '~/repositories/auth'
import { admin } from '~/services/api'

export const verifyLicensedRegister = (data) =>
  admin.post('/licenseds/verify-register', data)

export const getLicensedData = () => admin.get(`/licenseds/${getAccountId()}`)

export const updateLicensedData = (data) =>
  admin.put(`/licenseds/${getAccountId()}`, data)
