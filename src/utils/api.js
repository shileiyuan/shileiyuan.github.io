import { addUrlParams } from './common'
import request from './request'

const API_BASE = '/api'

const API = {
  get: {
    queryUsers: '/user/list'
  },
  post: {

  }
}

const methods = ['get', 'post']

const mix = (api, base = '') => {
  methods.forEach(method => {
    const obj = api[method]
    Object.entries(obj).forEach(([key, value]) => {
      obj[key] = (data, { urls = [], params = {} } = {}) => {
        const url = base + value + urls.join('/')
        switch (method) {
          case 'get':
            return request.get(url, { params: { ...data, ...params } })
          case 'post':
            return request.post(addUrlParams(url, params), data)
          default:
          // 不应该执行
        }
      }
    })
  })
}

mix(API, API_BASE)

export { API, API as default }
