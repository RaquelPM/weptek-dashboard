import { api, apiForm } from '~/services/api'

export const getDrivers = (page) => api.get(`/drivers?page=${page}`)
export const getDriversNoLimit = () => api.get(`/drivers?limit=null`)
export const getDriversId = (id) => api.get(`/drivers/${id}`)

export const enableDriver = (id) => api.put(`/drivers/${id}/enable`)
export const disableDriver = (id) => api.put(`/drivers/${id}/disable`)

export const setDriverForceForm = (id, data) =>
  apiForm.put(`/drivers/${id}/force`, data)
