import { request } from './request'

// 1.手机号码获取验证码
export function getShopsInfo() {
  return request({
    url: '/info'
  })
}
