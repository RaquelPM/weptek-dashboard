import { getUserId } from '~/repositories/auth'
import { admin } from '~/services/api'

export const updateLicensedData = (data) =>
  admin.put(`/licenseds/${getUserId()}`, data)
