
const API = {
  get: {
    queryUsers: '/table',
    queryTable: '/table'
  },
  post: {

  }
}

const mix = (api, base = '') => {
  const methods = Object.keys(api)
  methods.forEach(method => {
    const obj = api[method]
    Object.entries(obj).forEach(([key, value]) => {
      obj[key] = base + value
    })
  })
}

mix(API)

export { API, API as default }
