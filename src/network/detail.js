import { request } from './request'

// 1.最后一次修改
// 1.商家详情
export function getShopInfo(id) {
  return request({
    url: `/getShopInfo/${id}`
  })
}
// 2.商家商品数据
export function getShopGoodsList(id) {
  return request({
    url: `/getShopGoodsList/${id}`
  })
}
// 3.商家的评论
export function getShopRatingsList(id) {
  return request({
    url: `/getShopRatingsList/${id}`
  })
}
