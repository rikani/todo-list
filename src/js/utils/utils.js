export const uniqueId = () => Math.random().toString(36).substr(2, 16)

export const objectDelete = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const updateStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

