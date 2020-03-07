import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/api/info', { code: 0, data: apiData.info })
Mock.mock('/api/goods', { code: 0, data: apiData.goods })
