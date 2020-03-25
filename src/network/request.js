import axios from 'axios'
import { Loading } from 'element-ui'

const BASE_URL = '/api'
const TIMEOUT = 5000

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })
  let loadingInstance
  // 3.请求拦截
  instance.interceptors.request.use(
    config => {
      loadingInstance = Loading.service({
        text: 'Loading'
      })
      return config
    },
    err => {
      console.log(err)
    }
  )
  // 4.响应拦截
  instance.interceptors.response.use(
    res => {
      loadingInstance.close()
      return res.data
    },
    err => {
      console.log(err)
    }
  )
  // 2.发送真正的网络请求
  return instance(config)
}
