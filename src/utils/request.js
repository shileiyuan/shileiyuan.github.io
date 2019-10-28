import axios from 'axios'

const request = axios.create({
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
})

request.interceptors.response.use(res => res.data)

export default request
