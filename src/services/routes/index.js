import { api } from '../api'

export const getRoutes = (page) => api.get(`/routes?page=${page}`)

export const getRouteById = (id) => api.get(`/routes/${id}`)

export const setRouteById = (id, data) => api.get(`/routes/${id}`, data)

export const createRoute = (data) => api.post('/routes', data)
