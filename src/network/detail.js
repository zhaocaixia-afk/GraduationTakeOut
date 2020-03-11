import { request } from './request'

// 1.最后一次修改
export function getShopInfo(params) {
  return request({
    url: '/getShopInfo',
    params
  })
}
export function getShopGoodsList(params) {
  return request({
    url: '/getShopGoodsList',
    params
  })
}
