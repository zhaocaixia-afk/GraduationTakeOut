import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/info', { code: 0, data: apiData.info })
