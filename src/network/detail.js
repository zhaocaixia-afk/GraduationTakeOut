import { request } from './request'

// 1.得到商家信息
export function getShopsInfo() {
  return request({
    url: '/info'
  })
}

// 2.得到商品列表
export function getShopsGoods() {
  return request({
    url: '/goods'
  })
}
