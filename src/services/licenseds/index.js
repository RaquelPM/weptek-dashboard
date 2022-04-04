import { getAccountId } from '~/repositories/auth'
import { admin } from '~/services/api'

export const createLicensed = (data, key) =>
  admin.post('/licenseds', data, {
    headers: {
      'X-Admin-Permission-Token': key,
    },
  })

export const verifyLicensedRegister = (data) =>
  admin.post('/licenseds/verify-register', data)

export const getLicensedData = () => admin.get(`/licenseds/${getAccountId()}`)

export const updateLicensedData = (data) =>
  admin.put(`/licenseds/${getAccountId()}`, data)
