import { api } from '../api'

export const getDistricts = (page) => api.get(`/districts?page=${page}`)

export const getDistrictsNoLimit = (page) => api.get(`/districts?limit=null`)

export const getDistrictById = (id) => api.get(`/districts/${id}`)

export const setDistrictById = (id, data) => api.put(`districts/${id}`, data)

export const createDistricts = (data) => api.post('/districts', data)
