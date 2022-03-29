import { api } from '~/services/api'

export const getDrivers = () => api.get('/drivers')
export const getDriversId = (id) => api.get(`/drivers/${id}`)
