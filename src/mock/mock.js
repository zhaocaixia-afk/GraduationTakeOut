import Mock from 'mockjs'
// import apiData from './data.json'

import apiShops from './shopsList'
import apiSearch from './search'

// const apiGetSearch = '/api/getSearch'
Mock.mock(RegExp('/api/getSearch' + '.*'), apiSearch.getSearchList)

Mock.mock(/\/api\/getShopInfo\/\d+/, apiShops.getShopInfo)

Mock.mock(/\/api\/getShopGoodsList\/\d+/, apiShops.getShopGoodsList)

Mock.mock(/\/api\/getShopRatingsList\/\d+/, apiShops.getShopRatingsList)
