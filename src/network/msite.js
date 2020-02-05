import { request } from './request'

export function getURL(geohash){
    return request({
        url: `/position/${geohash}`
    })
}
