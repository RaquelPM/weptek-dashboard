import storage from './storage'

export const setRegister = (data) =>
  storage.setItem('register', JSON.stringify(data))

export const getRegister = () => JSON.parse(storage.getItem('register'))

export const removeRegister = () => storage.removeItem('register')
