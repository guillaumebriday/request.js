export function getCookie (name) {
  const cookies = document.cookie ? document.cookie.split('; ') : []
  const prefix = `${encodeURIComponent(name)}=`
  const cookie = cookies.find(cookie => cookie.startsWith(prefix))

  if (cookie) {
    const value = cookie.split('=').slice(1).join('=')

    if (value) {
      return decodeURIComponent(value)
    }
  }
}

export function compact (object) {
  const result = {}

  for (const key in object) {
    const value = object[key]
    if (value !== undefined) {
      result[key] = value
    }
  }

  return result
}

export function metaContent (name) {
  const element = document.head.querySelector(`meta[name="${name}"]`)
  return element && element.content
}
