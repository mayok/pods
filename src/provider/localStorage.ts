export const _set = async (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const _get = async (key: string) => {
  return localStorage.getItem(key)
}
