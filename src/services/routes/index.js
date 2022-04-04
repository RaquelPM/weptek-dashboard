import { api } from '../api'

export const getRoutes = (page) => api.get(`/routes?page=${page}`)

export const getRoutesNoLimit = (page) => api.get(`/routes?limit=null`)

export const getRouteById = (id) => api.get(`/routes/${id}`)

export const setRouteById = (id, data) => api.put(`/routes/${id}`, data)

export const createRoute = (data) => api.post('/routes', data)
