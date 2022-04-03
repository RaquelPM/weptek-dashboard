import axios from 'axios'

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
})

export const getStates = () => api.get('/estados?orderBy=nome')

export const getCitiesByState = (state) =>
  api.get(`/estados/${state}/municipios?orderBy=nome`)
