const getKey = (key) => `dashboard@${key}`

const storage = {
  ...localStorage,
  setItem: (key, value) => localStorage.setItem(getKey(key), value),
  getItem: (key) => localStorage.getItem(getKey(key)),
  removeItem: (key) => localStorage.removeItem(getKey(key)),
}

export default storage
