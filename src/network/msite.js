import { request } from './request'

// 1.地址信息
export function getURL(geohash){
    return request({
        url: `/position/${geohash}`
    })
}
// 2.食品分类列表
export function getFoodCategorys(){
    return request({
        url: '/index_category'
    })
}
