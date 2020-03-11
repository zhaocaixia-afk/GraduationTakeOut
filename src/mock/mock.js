import Mock from 'mockjs'
// import apiData from './data.json'

import apiShops from './shopsList'

Mock.mock('/api/getShopInfo?id=1', apiShops.getShopInfo)
Mock.mock('/api/getShopInfo?id=479', apiShops.getShopInfo)

Mock.mock('/api/getShopGoodsList?id=1', apiShops.getShopGoodsList)
Mock.mock('/api/getShopGoodsList?id=479', apiShops.getShopGoodsList)

// Mock.mock('/api/info', { code: 0, data: apiData.info })
// Mock.mock('/api/goods', { code: 0, data: apiData.goods })
