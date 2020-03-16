import { request } from './request'

export function getSearchList(data) {
  return request({
    url: '/getSearch/' + data
  })
}
