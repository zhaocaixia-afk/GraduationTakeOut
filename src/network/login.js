import { request } from './request'

// 1.手机号码获取验证码
export function reqSendCode(phone) {
  return request({
    url: `/sendcode?phone=${phone}`
  })
}

// 2.用户名和密码登录
export function passwordLogin(data) {
  return request({
    url: '/login_pwd',
    method: 'post',
    data: data
  })
}

// 3.手机号码和验证码登录
export function phoneLogin(data) {
  return request({
    url: '/login_sms',
    method: 'post',
    data: data
  })
}
