import axios from 'axios'

const CONFIG = {
  base: 'https://api.github.com/repos',
  user: 'shileiyuan',
  repo: 'shileiyuan.github.io'
}

const API = {
  queryIssues: '/issues'
}

Object.keys(API).forEach(key => {
  const value = API[key]
  API[key] = function () {
    const { base, user, repo } = CONFIG
    const url = `${base}/${user}/${repo}/issues`
    return axios.get(url)
  }
})

export default API
