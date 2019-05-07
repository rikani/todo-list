export const uniqueId = () => Math.random().toString(36).substr(2, 16)

export const objectDelete = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const updateStorage = (key, value) => {
  // In private mode session storage is not available - https://stackoverflow.com/a/14555361/2545874
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    if (DOMException && e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'SecurityError')) {
      return false
    } else {
      throw e
    }
  }
}

export const getFromStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    // Chrome returns security error when cookies are turned off in browser
    if (DOMException && e instanceof DOMException && e.name === 'SecurityError') {
      return false
    } else {
      throw e
    }
  }
}

