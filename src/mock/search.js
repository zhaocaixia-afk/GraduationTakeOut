const shopsList = [
  {
    id: 1,
    image_path: '/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
    name: '享多味汉堡炸鸡(斑竹湾店)',
    rating: 4.5,
    rating_count: 468,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 4,
    order_lead_time: '30',
    distance: '1.5',
    activities: [],
    category: '汉堡薯条/炸鸡炸串',
    address: '乐山市市中区肖坝路163号',
    phone: '17380388387',
    promotion_info:
      '享多味:美食每刻味你而来活动开始了,本月推出新品香辣鸡柳9.9元,傲椒鸡尖7元。本月6,16,26号进店选购香鸡肉卷买一送一,伙翅买一送一,黑椒鸡块买一送一。还有天天特价欢迎大家进店选购哦! 支持电话订餐(1738038387)',
    opening_hours: ['10:00/21:50']
  },
  {
    id: 479,
    image_path: '/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',
    name: '老王家峨眉酥肉豆腐脑(乐山滟澜洲店)',
    rating: 4.6,
    rating_count: 64,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 4,
    order_lead_time: '30',
    distance: '1.5',
    activities: [],
    category: '川湘菜/煎饼',
    address: '乐山市市中区青江路南段1332号',
    phone: '13628187972',
    promotion_info: '欢迎光临,用餐高峰期请提前下单,谢谢',
    opening_hours: ['8:30/20:30']
  },
  {
    id: 485,
    image_path: '/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',
    name: '农二哥·卤味·盖饭·干锅',
    rating: 3.5,
    rating_count: 53,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: ''
    },
    float_minimum_order_amount: 78,
    float_delivery_fee: 5,
    order_lead_time: '61',
    distance: '4.6',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['50减1', '100减2', '150减4'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6830b41d632b05464db9d2'
      }
    ],
    category: '干锅/盖浇饭',
    address: '乐山市市中区嘉定南路368号附1-21号',
    phone: '18111083877',
    promotion_info:
      '师范学校的同学: 请注意了!!!学校大门都不让进。需至学校大门处取餐! 谢谢同学们的配合与理解。欢迎您使用【饿了么网上订餐】为了方便您能及时享用美食,希望大家可以提前1小时以上预订,避开高峰拥堵。',
    opening_hours: ['17:00/03:00']
  },
  {
    id: 486,
    image_path: '/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg',
    name: '华莱士·全鸡汉堡(肖坝店)',
    rating: 4.4,
    rating_count: 64,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 4,
    order_lead_time: '30',
    distance: '2.8',
    activities: [],
    category: '汉堡薯条/炸鸡炸串',
    address: '乐山市市中区肖坝路617号',
    phone: '08332138602',
    promotion_info: '过年放假!24号-27号,28号正常营业,华莱士! 祝您新年快乐! ',
    opening_hours: ['09:10/22:00']
  },
  {
    id: 487,
    image_path: '/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',
    name: '金韩悦·烤肉·拌饭·套饭',
    rating: 4.2,
    rating_count: 183,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 5.5,
    order_lead_time: '34',
    distance: '4.3',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['30减1', '50减2', '70减3'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a687a781d632b05464dbb36'
      }
    ],
    category: '韩式简餐/盖浇饭',
    address: '乐山市市中区上土桥街128号嘉瑞财富广场A栋2楼5号',
    phone: '17711275571',
    promotion_info: '广州第一家',
    opening_hours: ['10:30/20:40']
  },
  {
    id: 488,
    image_path: '/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg',
    name: '李大姐砂锅店',
    rating: 4.4,
    rating_count: 2259,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: ''
    },
    float_minimum_order_amount: 7,
    float_delivery_fee: 0.5,
    order_lead_time: '36',
    distance: '1.5',
    activities: [],
    category: '盖浇饭|香锅砂锅',
    address: '乐山市市中区肖坝路222号',
    phone: '18584165589',
    promotion_info: '4',
    opening_hours: ['09:00/20:00']
  },
  {
    id: 491,
    image_path: '/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg',
    name: '好吃嘴油炸小吃店',
    rating: 4.6,
    rating_count: 1049,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 20,
    float_delivery_fee: 2,
    order_lead_time: '44',
    distance: '4.0',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['35减4', '58减6', '88减10'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a696b071d632b05464dbd32'
      }
    ],
    category: '炸鸡炸串/其他小吃',
    address: '乐山市市中区人民南路181号 ',
    phone: '18383356391',
    promotion_info: '各位亲们,今日本店重装开业,欢迎新老顾客下单,谢谢',
    opening_hours: ['13:00/02:00']
  },
  {
    id: 496,
    image_path: '/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg',
    name: '学苑小吃·冒菜·油炸',
    rating: 4.3,
    rating_count: 219,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: '',
    order_lead_time: '37',
    distance: '2.8',
    activities: [],
    category: '冒菜/其他小吃',
    address: '乐山市市中区海棠路452号',
    phone: '18181527181',
    promotion_info: '本店冒菜由几十种天然中草药 香料秘制而成,绝不添加任何食品添加剂增香膏等等!',
    opening_hours: ['10:00/20:55']
  },
  {
    id: 499,
    image_path: '/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg',
    name: '美味四方',
    rating: 4.2,
    rating_count: 207,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 25,
    float_delivery_fee: '',
    order_lead_time: 31,
    distance: '2.2',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['38减1', '68减2', '95减3'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6acb3e1d632b05464dc4a1'
      }
    ],
    category: '盖浇饭/川湘菜',
    address: '乐山市市中区车子镇惠安路234号3栋9单元1楼1、2、3号',
    phone: '18984394473',
    promotion_info:
      '师院送到楼下,理工送上楼欢迎您使用【饿了么网上订餐】为了方便您能及时享用美食,希望大家可以提前1小时以上预订,避开高峰拥堵。人民医院的下单顾客们,创卫导致外卖只能配送至医院门口还望理解到医院楼下取餐',
    opening_hours: ['05:30/06:30']
  },
  {
    id: 501,
    image_path: '/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg',
    name: '叶婆婆钵钵鸡',
    rating: 4.5,
    rating_count: 171,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 20,
    float_delivery_fee: 6,
    order_lead_time: '40',
    distance: '4.7',
    activities: [],
    category: '钵钵鸡/炒饭',
    address: '乐山市市中区东大街37号',
    phone: '17738074873',
    promotion_info: '小主们点钵钵鸡请记得选口味哟。夏季钵钵鸡默认常温哟~',
    opening_hours: ['10:00/19:50']
  },
  {
    id: 502,
    image_path: '/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg',
    name: '味味先豆腐脑',
    rating: 4.6,
    rating_count: 78,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 20,
    float_delivery_fee: 4,
    order_lead_time: '30',
    distance: '1.5',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['30减1', '50减4', '100减7'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6adb5a1d632b05464dc62b'
      }
    ],
    category: '其他小吃/肉夹馍',
    address: '乐山市市中区绿心南路2390号',
    phone: '18781486058',
    promotion_info: '欢迎光临,用餐高峰期请提前下单,谢谢。',
    opening_hours: ['10:00/23:55']
  },
  {
    id: 503,
    image_path: '/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',
    name: '扎巴依的春天',
    rating: 4.0,
    rating_count: 7,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 2,
    order_lead_time: '51',
    distance: '4.8',
    activities: [],
    category: '新疆菜/牛排',
    address: '乐山市市中区里仁街86/88号',
    phone: '13209950306',
    promotion_info: '欢迎光临,用餐高峰期请提前下单,谢谢。',
    opening_hours: ['11:00/20:10']
  },
  {
    id: 506,
    image_path: '/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg',
    name: '小范先生·套饭·清粥',
    rating: 4.6,
    rating_count: 66,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: ''
    },
    float_minimum_order_amount: 30,
    float_delivery_fee: 5,
    order_lead_time: '60',
    distance: '5.0',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['20减5', '42减8', '68减15', '88减25'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6c3cee1d632b05464dcabc'
      }
    ],
    category: '盖浇饭/粥店',
    address: '乐山市市中区中沟巷44号1层',
    phone: '13088398003',
    promotion_info: '欢迎光临,用餐高峰期请提前下单,谢谢。',
    opening_hours: ['10:00/04:00']
  },
  {
    id: 508,
    image_path: '/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg',
    name: 'QQ芝士焗饭',
    rating: 4.3,
    rating_count: 182,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 0.5,
    order_lead_time: '30',
    distance: '3.0',
    activities: [
      {
        icon_name: '特',
        name: '优惠大酬宾',
        description: ['25减3', '42减6', '58减8'],
        icon_color: 'EDC123',
        id: 1,
        _id: '5a6d41041d632b05464dcbf8'
      }
    ],
    category: '焗饭/其他快餐',
    address: '乐山市市中区绿心南路2515号4栋4单元1楼4号',
    phone: '17760327565',
    promotion_info:
      '理工园区请注意:蜂鸟专送订单只能配送至宿舍园区门口,师范学校的同学:请注意:师院配送不能送至师院百果园、桂圆、行知楼、图书馆等区域。需至小不点铁门处取餐!!谢谢同学们的配合与理解。欢迎您使用[饿了么网上订餐]为了方便您能及时享用美食,希望大家可以提前1小时以上预订,避开高峰拥堵。',
    opening_hours: ['11:30/15:45']
  },
  {
    id: 510,
    image_path: '/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg',
    name: '暴走驴(新广场店)',
    rating: 4.5,
    rating_count: 84,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: ''
    },
    float_minimum_order_amount: 58,
    float_delivery_fee: 9,
    order_lead_time: '44',
    distance: '5.1',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['38减1', '68减2', '128减3', '3.8元特价'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6dbe431d632b05464dccab'
      }
    ],
    category: '小龙虾/川湘菜',
    address: '乐山市市中区旺福巷22号1栋2单元1楼',
    phone: '17760328711',
    promotion_info:
      '温馨提示:各位吃货们,感谢您光临本店,主营各类爆炒,小龙虾等等!在用餐高峰时,为了保证出餐质量可能会出现短时观点状态,给您带来敬请谅解,有什么特殊要求下单备注哟!联系电话:18782212272',
    opening_hours: ['16:20/02:30']
  },
  {
    id: 511,
    image_path: '/7/b6/235761e50d391445f021922b71789jpeg.jpeg',
    name: '快乐柠檬(乐山府街店)',
    rating: 4.7,
    rating_count: 183,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 6,
    order_lead_time: '31',
    distance: '4.4',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['35减7', '69减12', '85减25', '5折'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6dbe8b1d632b05464dccd4'
      }
    ],
    category: '奶茶果汁',
    address: '乐山市市中区府街30号',
    phone: '15583582818',
    promotion_info:
      '外卖热线:15583582818。快乐柠檬创立于2006年,品牌主打年轻族群喜爱的开心、有活力的现象。并以新鲜、健康、创新的外带茶饮为主，主打[手摇奶茶]、[健康柠檬]、[岩盐芝士]系列等脍炙人口的饮品。快乐柠檬于全国快速展店,让华人茶文化迈向世界。',
    opening_hours: ['8:30/20:30']
  },
  {
    id: 512,
    image_path: '/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
    name: '嘉州小厨',
    rating: 4.8,
    rating_count: 244,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: ''
    },
    float_minimum_order_amount: 99,
    float_delivery_fee: 7,
    order_lead_time: '63',
    distance: '6.3',
    activities: ['29减2', '59减5', '89减8', '首次光顾减3'],
    category: '川湘菜/小龙虾',
    address: '乐山市市中区嘉祥路1726号1层 ',
    phone: '18782054757',
    promotion_info: '用良心食材,做本色美食,中暑,家常菜,干锅,小龙虾,就选嘉州小厨',
    opening_hours: ['15:00/04:20']
  },
  {
    id: 514,
    image_path: '/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',
    name: 'Ganso元祖蛋糕(乐山土桥店)',
    rating: 5.0,
    rating_count: 54,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: ''
    },
    float_minimum_order_amount: 60,
    float_delivery_fee: 0,
    order_lead_time: '59',
    distance: '4.4',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['0元配送', '150减16', '260减30'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6e8ca81d632b05464dcea6'
      }
    ],
    category: '蛋糕/甜品',
    address: '乐山市中心城上土桥街1号',
    phone: '13118389207',
    promotion_info:
      '1.蛋糕为门店现场裱花,请提前2-3小时预订;2.发票由元祖上海电商总部开具,7个工作日内免费快递到您地址;3.免费配件:蛋糕刀、生日帽、空白卡片各1件,蜡烛1组、蛋糕盘叉1套(根据蛋糕尺寸标配);4.元祖服务热线:4001103737(服务时间08:00-21:00)',
    opening_hours: ['8:30/20:45']
  },
  {
    id: 516,
    image_path: '/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',
    name: '张记黄焖鸡米饭',
    rating: 5.0,
    rating_count: 2,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 15,
    float_delivery_fee: 2,
    order_lead_time: '43',
    distance: '4.1',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: ['20减10', '40减20', '80减40'],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6e8f561d632b05464dcede'
      }
    ],
    category: '黄焖鸡米饭',
    address: '乐山市市中区王浩儿街156号1层',
    phone: '18181239806',
    promotion_info: '欢迎光临，用餐高峰请提前下单，谢谢。',
    opening_hours: ['09:30/23:30']
  },
  {
    id: 518,
    image_path: '/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg',
    name: '果蔬坊',
    rating: 4.8,
    rating_count: 45,
    delivery_mode: {
      color: '57A9FF',
      id: 1,
      is_solid: true,
      text: '蜂鸟专送'
    },
    float_minimum_order_amount: 0,
    float_delivery_fee: 5,
    order_lead_time: '31',
    distance: '3.5',
    activities: [
      {
        icon_name: '减',
        name: '满减优惠',
        description: [],
        icon_color: 'f07373',
        id: 1,
        _id: '5a6e99741d632b05464dcf39'
      }
    ],
    category: '水果店',
    address: '白塔街32号',
    phone: '13036572131',
    promotion_info: '本店提供水果发票,如遇水果有坏包退并赠送水果一份',
    opening_hours: ['10:00/17:50']
  }
]

function getLast(url) {
  const length = url.split('/').length
  return url.split('/')[length - 1]
}

export default {
  // 1.根据关键字查找
  getSearchList: config => {
    const keyword = getLast(config.url)
    let data = []
    if (keyword === '') {
      data = []
    } else {
      // "值".indexOf("")的值为0
      data = shopsList.filter(item => item.name.indexOf(keyword) !== -1)
    }

    return {
      code: 0,
      data: data
    }
    // if (!data.length) {
    //   return {
    //     code: 1,
    //     data: '很抱歉！无搜索结果'
    //   }
    // } else {
    //   return {
    //     code: 0,
    //     data: data
    //   }
    // }
  }
}
