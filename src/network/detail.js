import { request } from './request'

// 1.最后一次修改
// 1.商家详情
export function getShopInfo(params) {
  return request({
    url: '/getShopInfo',
    params
  })
}
// 2.商家商品数据
export function getShopGoodsList(params) {
  return request({
    url: '/getShopGoodsList',
    params
  })
}
// 3.商家的评论
export function getShopRatingsList(params) {
  return request({
    url: '/getShopRatingsList',
    params
  })
}
