// import Mock from 'mockjs'

function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

// 商家详情数组
const shopInfoList = [
  {
    id: 1,
    info: {
      name: '享多味汉堡炸鸡(斑竹湾店)',
      avatar: 'https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg',
      bgImg: 'https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png',
      score: 4.6,
      sellCount: 468,
      description: '蜂鸟专送',
      minPrice: 15,
      deliveryPrice: 1,
      oldDeliveryPrice: 4,
      deliveryTime: 30,
      distance: '1.5km',
      supports: [
        {
          type: 0,
          name: '满减',
          content: '满26元减11元，满40元减20元，满60元减25元'
        },
        {
          type: 0,
          name: '配送',
          content: '配送费立减3元'
        },
        {
          type: 0,
          name: '特价',
          content: '特价商品0.2元起'
        },
        {
          type: 0,
          name: '首单',
          content: '饿了么新用户首单立减20元'
        }
      ],
      bulletin:
        '享多味:美食每刻味你而来活动开始了,本月推出新品香辣鸡柳9.9元,傲椒鸡尖7元。本月6.16.26号进店选购香鸡肉卷买一送一,伴翅买一送一,黑椒鸡块买一送一。还有天天特价欢迎大家进店选购哦!支持电话订餐(17380388387)',
      pics: [
        'https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg',
        'https://fuss10.elemecdn.com/6/82/2cd3d681f5e93292b3eb49d6b412ajpeg.jpeg',
        'https://fuss10.elemecdn.com/8/93/4cf527b6462eea634f69755374f88jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/f2/2a8796ba025a5773fd685a95ac369jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/c4/5a78f477fd616a51ce33586a76ddbjpeg.jpeg'
      ],
      foodScore: 4.6,
      serviceScore: 4.7,
      deliveryScore: 4.7,
      category: '汉堡薯条/炸鸡炸串',
      address: '乐山市市中区肖坝路163号',
      phone: '17380388387',
      workTime: '09:00-00:00'
    }
  },
  {
    id: 479,
    info: {
      name: '老王家峨眉酥肉豆腐脑(乐山滟澜洲店)',
      avatar: 'https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg',
      bgImg: 'https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png',
      score: 4.6,
      sellCount: 64,
      description: '蜂鸟专送',
      minPrice: 15,
      deliveryPrice: 1,
      oldDeliveryPrice: 4,
      deliveryTime: 30,
      distance: '1.5km',
      supports: [
        {
          type: 0,
          name: '满减',
          content: '满26元减11元，满40元减20元，满60元减25元'
        },
        {
          type: 1,
          name: '会员',
          content: '超级会员领6元无门槛红包'
        },
        {
          type: 0,
          name: '配送',
          content: '配送费立减3元'
        },
        {
          type: 0,
          name: '首单',
          content: '饿了么新用户首单立减12元'
        }
      ],
      bulletin: '欢迎光临,用餐高峰期请提前下单,谢谢',
      pics: [
        'https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg',
        'https://fuss10.elemecdn.com/6/82/2cd3d681f5e93292b3eb49d6b412ajpeg.jpeg',
        'https://fuss10.elemecdn.com/8/93/4cf527b6462eea634f69755374f88jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/f2/2a8796ba025a5773fd685a95ac369jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/c4/5a78f477fd616a51ce33586a76ddbjpeg.jpeg'
      ],
      foodScore: 4.5,
      serviceScore: 4.8,
      deliveryScore: 5.0,
      category: '川湘菜/煎饼',
      address: '乐山市市中区青江路南段1332号',
      phone: '13628187972',
      workTime: '8:30/20:30'
    }
  }
]
// 商家商品数组
const shopGoodsList = [
  {
    id: 1,
    goods: [
      {
        name: '热销',
        icon: 'https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png',
        foods: [
          {
            name: '一统鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '全翅+胸排+腿排+琵琶腿',
            info: '鸡肉',
            sellCount: 114,
            price: 30,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '一统鸡 味道不错,分量也足,包装也很不错',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '香酥鸡腿',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '外焦里嫩,美味多汁',
            info: '鸡腿',
            sellCount: 52,
            price: 10,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              },
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '椰蓉大福2个',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '超好吃,就是奇特的缘分',
            info: '糯米',
            sellCount: 24,
            price: 6,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【特价】香辣鸡腿堡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '精选上等无骨鸡腿肉,用秘方腌制,手工裹上优质面粉,喷炸至黄金喷香,酥脆鲜嫩,配以金典沙拉,给你更美味的享受',
            info: '鸡肉',
            sellCount: 38,
            price: 1,
            oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              },
              {
                rateType: 0
              },
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '优惠',
        icon: 'https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png',
        foods: [
          {
            name: '【特价】香辣鸡腿堡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '精选上等无骨鸡腿肉,用秘方腌制,手工裹上优质面粉,喷炸至黄金喷香,酥脆鲜嫩,配以金典沙拉,给你更美味的享受',
            info: '鸡肉',
            sellCount: 38,
            price: 1,
            oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              },
              {
                rateType: 0
              },
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【超值】黄金板烧堡套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '黄金板烧堡+伴翅+2串脆骨+百分小吃+中可',
            info: '鸡肉',
            sellCount: 34,
            price: 25,
            oldPrice: 47,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '鲜香牛肉煲',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '精选澳洲进口牛肉,搭配多情黑胡椒,加上特制酱汁,咬一口,唇齿留香,牛气冲天',
            info: '牛肉',
            sellCount: 2,
            price: 7.7,
            oldPrice: 14,
            rating: 100,
            ratings: [
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【热销】墨西哥鸡肉卷套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '墨西哥鸡肉卷+伴翅+1脆骨+中可',
            info: '鸡肉',
            sellCount: 9,
            price: 19.8,
            oldPrice: 35,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【热销】Q弹鲜虾堡套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: 'Q弹鲜虾堡+伴翅+上校+中可',
            info: '虾',
            sellCount: 9,
            price: 23,
            oldPrice: 38,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '香芋甜心',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '我是小甜心哦',
            info: '香芋',
            sellCount: 2,
            price: 5.5,
            oldPrice: 9,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【全家福】全家福套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '蜜汁全鸡+鸡肉卷+2腿堡+鸡米花+薯条+伴翅(1对)+上校鸡块+百分小吃+3中可',
            info: '鸡肉',
            sellCount: 5,
            price: 79.9,
            oldPrice: 125,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【招牌】香辣鸡腿堡套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '鸡肉',
            sellCount: 6,
            price: 23,
            oldPrice: 35,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '番茄酱',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '亲,点我味道更好哟!',
            info: '番茄',
            sellCount: 4,
            price: 0.2,
            oldPrice: 0.3,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '店长力推',
        foods: [
          {
            name: '墨西哥鸡肉卷+小可套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '墨西哥鸡肉卷+小可',
            info: '鸡肉',
            sellCount: 23,
            price: 16,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '主食类',
        foods: [
          {
            name: '脆皮全鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            info: '鸡肉',
            sellCount: 77,
            price: 26,
            oldPrice: 28,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '美味鳕鱼堡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '甄选亚洲渔港进口鳕鱼,搭配香酥营养的面包,加上浓郁的沙拉酱,饱满多汁的鱼肉存留在齿尖丝丝鲜美,体味海鲜的绝妙好味',
            info: '鳕鱼',
            sellCount: 9,
            price: 8.4,
            oldPrice: 14,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '美味鳕鱼卷',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '甄选亚洲渔港进口鳕鱼,饱满多汁的鱼肉存留在齿尖丝丝鲜美,体味海鲜的绝妙好味',
            info: '鳕鱼',
            sellCount: 2,
            price: 14,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '一统鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '全翅+胸排+腿排+琵琶腿',
            info: '鸡肉',
            sellCount: 114,
            price: 30,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '一统鸡 味道不错,分量也足,包装也很不错',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '爽口凉菜',
        foods: [
          {
            name: '八宝酱菜',
            price: 4,
            oldPrice: '',
            description: '',
            sellCount: 84,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '拍黄瓜',
            price: 9,
            oldPrice: '',
            description: '',
            sellCount: 28,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '精选套餐',
        foods: [
          {
            name: '红豆薏米粥套餐',
            price: 37,
            oldPrice: '',
            description: '红豆薏米粥,三鲜干蒸烧卖,拍黄瓜',
            sellCount: 3,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '皮蛋瘦肉粥套餐',
            price: 31,
            oldPrice: '',
            description: '',
            sellCount: 12,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '果拼果汁',
        foods: [
          {
            name: '蜜瓜圣女萝莉杯',
            price: 6,
            oldPrice: '',
            description: '',
            sellCount: 1,
            rating: '',
            info: '',
            ratings: [],
            icon: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '加多宝',
            price: 6,
            oldPrice: '',
            description: '',
            sellCount: 7,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: 'VC无限橙果汁',
            price: 8,
            oldPrice: 10,
            description: '',
            sellCount: 15,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '还可以',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '小吃主食',
        foods: [
          {
            name: '扁豆焖面',
            price: 14,
            oldPrice: '',
            description: '',
            sellCount: 188,
            rating: 96,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '葱花饼',
            price: 10,
            oldPrice: '',
            description: '',
            sellCount: 124,
            rating: 85,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 1,
                text: '没啥味道',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 1,
                text: '很一般啊',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '牛肉馅饼',
            price: 14,
            oldPrice: '',
            description: '',
            sellCount: 114,
            rating: 91,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 1,
                text: '难吃不推荐',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '招牌猪肉白菜锅贴/10个',
            price: 17,
            oldPrice: '',
            description: '',
            sellCount: 101,
            rating: 78,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 1,
                text: '不脆,不好吃',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '糊塌子',
            price: 10,
            oldPrice: '',
            description: '',
            sellCount: 80,
            rating: 93,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '特色粥品',
        foods: [
          {
            name: '皮蛋瘦肉粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 9,
            oldPrice: '',
            description: '甜粥',
            sellCount: 91,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '红豆薏米美肤粥',
            price: 12,
            oldPrice: '',
            description: '甜粥',
            sellCount: 86,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '红枣山药糙米粥',
            price: 10,
            oldPrice: '',
            description: '',
            sellCount: 81,
            rating: 91,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '鲜蔬菌菇粥',
            price: 11,
            oldPrice: '',
            description: '咸粥',
            sellCount: 56,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: ''
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '田园蔬菜粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 33,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      }
    ]
  },
  {
    id: 479,
    goods: [
      {
        name: '热销',
        icon: 'https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png',
        foods: [
          {
            name: '一统鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '全翅+胸排+腿排+琵琶腿',
            info: '鸡肉',
            sellCount: 114,
            price: 30,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '一统鸡 味道不错,分量也足,包装也很不错',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '香酥鸡腿',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '外焦里嫩,美味多汁',
            info: '鸡腿',
            sellCount: 52,
            price: 10,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              },
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '椰蓉大福2个',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '超好吃,就是奇特的缘分',
            info: '糯米',
            sellCount: 24,
            price: 6,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【特价】香辣鸡腿堡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '精选上等无骨鸡腿肉,用秘方腌制,手工裹上优质面粉,喷炸至黄金喷香,酥脆鲜嫩,配以金典沙拉,给你更美味的享受',
            info: '鸡肉',
            sellCount: 38,
            price: 1,
            oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              },
              {
                rateType: 0
              },
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '优惠',
        icon: 'https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png',
        foods: [
          {
            name: '【特价】香辣鸡腿堡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '精选上等无骨鸡腿肉,用秘方腌制,手工裹上优质面粉,喷炸至黄金喷香,酥脆鲜嫩,配以金典沙拉,给你更美味的享受',
            info: '鸡肉',
            sellCount: 38,
            price: 1,
            oldPrice: 12,
            rating: 100,
            ratings: [
              {
                rateType: 0
              },
              {
                rateType: 0
              },
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【超值】黄金板烧堡套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '黄金板烧堡+伴翅+2串脆骨+百分小吃+中可',
            info: '鸡肉',
            sellCount: 34,
            price: 25,
            oldPrice: 47,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '鲜香牛肉煲',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '精选澳洲进口牛肉,搭配多情黑胡椒,加上特制酱汁,咬一口,唇齿留香,牛气冲天',
            info: '牛肉',
            sellCount: 2,
            price: 7.7,
            oldPrice: 14,
            rating: 100,
            ratings: [
              {
                rateType: 0
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【热销】墨西哥鸡肉卷套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '墨西哥鸡肉卷+伴翅+1脆骨+中可',
            info: '鸡肉',
            sellCount: 9,
            price: 19.8,
            oldPrice: 35,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【热销】Q弹鲜虾堡套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: 'Q弹鲜虾堡+伴翅+上校+中可',
            info: '虾',
            sellCount: 9,
            price: 23,
            oldPrice: 38,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '香芋甜心',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '我是小甜心哦',
            info: '香芋',
            sellCount: 2,
            price: 5.5,
            oldPrice: 9,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【全家福】全家福套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '蜜汁全鸡+鸡肉卷+2腿堡+鸡米花+薯条+伴翅(1对)+上校鸡块+百分小吃+3中可',
            info: '鸡肉',
            sellCount: 5,
            price: 79.9,
            oldPrice: 125,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '【招牌】香辣鸡腿堡套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '鸡肉',
            sellCount: 6,
            price: 23,
            oldPrice: 35,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '番茄酱',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '亲,点我味道更好哟!',
            info: '番茄',
            sellCount: 4,
            price: 0.2,
            oldPrice: 0.3,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '店长力推',
        foods: [
          {
            name: '墨西哥鸡肉卷+小可套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '墨西哥鸡肉卷+小可',
            info: '鸡肉',
            sellCount: 23,
            price: 16,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '主食类',
        foods: [
          {
            name: '脆皮全鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            info: '鸡肉',
            sellCount: 77,
            price: 26,
            oldPrice: 28,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '美味鳕鱼堡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '甄选亚洲渔港进口鳕鱼,搭配香酥营养的面包,加上浓郁的沙拉酱,饱满多汁的鱼肉存留在齿尖丝丝鲜美,体味海鲜的绝妙好味',
            info: '鳕鱼',
            sellCount: 9,
            price: 8.4,
            oldPrice: 14,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '美味鳕鱼卷',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '甄选亚洲渔港进口鳕鱼,饱满多汁的鱼肉存留在齿尖丝丝鲜美,体味海鲜的绝妙好味',
            info: '鳕鱼',
            sellCount: 2,
            price: 14,
            ratings: [],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '一统鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '全翅+胸排+腿排+琵琶腿',
            info: '鸡肉',
            sellCount: 114,
            price: 30,
            // oldPrice: 12,
            rating: 100,
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '一统鸡 味道不错,分量也足,包装也很不错',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '爽口凉菜',
        foods: [
          {
            name: '八宝酱菜',
            price: 4,
            oldPrice: '',
            description: '',
            sellCount: 84,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '拍黄瓜',
            price: 9,
            oldPrice: '',
            description: '',
            sellCount: 28,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '精选套餐',
        foods: [
          {
            name: '红豆薏米粥套餐',
            price: 37,
            oldPrice: '',
            description: '红豆薏米粥,三鲜干蒸烧卖,拍黄瓜',
            sellCount: 3,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '皮蛋瘦肉粥套餐',
            price: 31,
            oldPrice: '',
            description: '',
            sellCount: 12,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '果拼果汁',
        foods: [
          {
            name: '蜜瓜圣女萝莉杯',
            price: 6,
            oldPrice: '',
            description: '',
            sellCount: 1,
            rating: '',
            info: '',
            ratings: [],
            icon: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '加多宝',
            price: 6,
            oldPrice: '',
            description: '',
            sellCount: 7,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: 'VC无限橙果汁',
            price: 8,
            oldPrice: 10,
            description: '',
            sellCount: 15,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '还可以',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '小吃主食',
        foods: [
          {
            name: '扁豆焖面',
            price: 14,
            oldPrice: '',
            description: '',
            sellCount: 188,
            rating: 96,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '葱花饼',
            price: 10,
            oldPrice: '',
            description: '',
            sellCount: 124,
            rating: 85,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 1,
                text: '没啥味道',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 1,
                text: '很一般啊',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '牛肉馅饼',
            price: 14,
            oldPrice: '',
            description: '',
            sellCount: 114,
            rating: 91,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 1,
                text: '难吃不推荐',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '招牌猪肉白菜锅贴/10个',
            price: 17,
            oldPrice: '',
            description: '',
            sellCount: 101,
            rating: 78,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 1,
                text: '不脆,不好吃',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '糊塌子',
            price: 10,
            oldPrice: '',
            description: '',
            sellCount: 80,
            rating: 93,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '特色粥品',
        foods: [
          {
            name: '皮蛋瘦肉粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 1,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 9,
            oldPrice: '',
            description: '甜粥',
            sellCount: 91,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '红豆薏米美肤粥',
            price: 12,
            oldPrice: '',
            description: '甜粥',
            sellCount: 86,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '红枣山药糙米粥',
            price: 10,
            oldPrice: '',
            description: '',
            sellCount: 81,
            rating: 91,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '鲜蔬菌菇粥',
            price: 11,
            oldPrice: '',
            description: '咸粥',
            sellCount: 56,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: ''
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '田园蔬菜粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 33,
            rating: 100,
            info: '',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '2******3',
                rateTime: 1469271264000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              },
              {
                username: '3******b',
                rateTime: 1469261964000,
                rateType: 0,
                text: '',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      }
    ]
  }
]
// 商家评论数据
const shopRatingsList = [
  {
    id: 1,
    comments: [
      {
        userName: 'SevenYaoX',
        comment:
          '真的超级喜欢，非常支持，质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物 各方面都特别不错吧',
        userUrl: 'https://img.meituan.net/avatar/effc05b8498e8ff19f37acc7453546107015.jpg',
        picUrls: [
          { id: -236645177, url: 'http://p0.meituan.net/shaitu/56543355ceb2eb6b00e79c8a27685bdf4271599.jpg' },
          { id: -236561646, url: 'http://p0.meituan.net/shaitu/927395d7c5e2be3ea111e6259d7c7ea1906579.jpg' },
          { id: -236561645, url: 'http://p0.meituan.net/shaitu/6f92476651f5236d8dfc0a9787597dec1103954.jpg' }
        ],
        commentTime: '1582736110617',
        recommend: ['南瓜粥', '皮蛋瘦肉粥', '扁豆焖面', '娃娃菜炖豆腐', '牛肉馅饼'],
        score: 5,
        rateType: 0
      },
      {
        userName: '彭丽802',
        comment:
          '去店里吃的麻辣味的，很快就弄上来了，四季豆很好吃，还有花菜，就是那个腐竹有点咸了，是甜辣的，不怎么辣，感觉乐山好会用甜，味道不错，又买了50串打包的藤椒的，但是我吃太饱了，明天再吃，希望不要太咸就行，推荐',
        userUrl: 'https://img.meituan.net/avatar/d66e5e784852aa266443467d4971f36e17992.jpg',
        picUrls: [
          { id: -431837187, url: 'http://p0.meituan.net/shaitu/a7c398b3b7dbe8d35e5c3ecf86addea23757290.jpg' },
          { id: -431765705, url: 'http://p0.meituan.net/shaitu/76789f5f2d99bdf9d79d44c8de03f97f3242266.jpg' },
          { id: -431765704, url: 'http://p0.meituan.net/shaitu/de2ce3b424c132b4c8ba558942d91af43061809.jpg' },
          { id: -431837186, url: 'http://p1.meituan.net/shaitu/006cd3f6c574efc81f9878c5e297be023095670.jpg' }
        ],
        commentTime: '1574079425323',
        score: 4,
        recommend: ['扁豆焖面'],
        rateType: 0
      },
      {
        userName: 'wu打你',
        comment: '味道还不错。上菜也很快。是乐山特有的甜辣味。而且打包也不收打包费。味道也很好吃。有机会下次还会来。',
        userUrl: '',
        picUrls: [{ id: -432216714, url: 'http://p1.meituan.net/shaitu/8cce9e0e358d47b654c7ad915e2b626e5153211.jpg' }],
        commentTime: '1574071919880',
        score: 3,
        rateType: 1,
        recommend: []
      },
      {
        userName: '匿名用户',
        comment: '不错不错，吃了好多次了，可以去试一试。。。。。',
        userUrl: 'https://www.dpfile.com/ugc/user/anonymous.png',
        picUrls: [],
        commentTime: '1583649699161',
        score: 5,
        rateType: 0,
        recommend: []
      },
      {
        userName: '匿名用户',
        userUrl: 'https://www.dpfile.com/ugc/user/anonymous.png',
        comment:
          '【口味】钵钵鸡的味道和鸡汤饭的味道都很赞，和叶婆婆比起来一点都不差，叶婆婆可能就是要排队，哈哈哈哈，\n【环境】环境很干净，菜都是整整齐齐摆在柜子里，素的三角，荤的七角，吃多少拿多少，红油颜色也好看，味道也很好，而且去的时候碰到他们在吃饭，他们都是直接起来为顾客服务，没有推拉',
        picUrls: [],
        commentTime: '1571640148731',
        score: 4,
        rateType: 0,
        recommend: []
      },
      {
        userName: 'Mfi940999665',
        userUrl: '',
        comment: '鸡汤饭100分！',
        picUrls: [],
        commentTime: '1579258047191',
        score: 1,
        rateType: 1,
        recommend: []
      }
    ],
    total: 1657
  },
  {
    id: 479,
    comments: [
      {
        userName: 'NsW213136757',
        userUrl: 'https://img.meituan.net/avatar/d31306d7d0456dfc4231e08b160a61b5107999.jpg',
        comment: '环境一般，服务热情，套餐划算，分量很足，牛肉炒饭一大碗，牛肉牛杂很好吃，豆腐雪魔芋煮起也很好吃！',
        picUrls: [
          { id: -601441322, url: 'http://p0.meituan.net/shaitu/0bf586ef1cf39cf86afd8f91ca96cbd92300198.jpg' },
          { id: -601580910, url: 'http://p0.meituan.net/shaitu/25ba3251fc69fb2bf632514acac896531940863.jpg' },
          { id: -601441321, url: 'http://p0.meituan.net/shaitu/b228f964bdaffb7c3bedbe3ce52469923016339.jpg' },
          { id: -601580907, url: 'http://p0.meituan.net/shaitu/4539670137cd9acd6bc8bff5d7a02abf1604692.jpg' }
        ],
        commentTime: '1568609294879',
        score: 5,
        rateType: 0,
        recommend: []
      },
      {
        userName: '匿名用户',
        userUrl: 'https://www.dpfile.com/ugc/user/anonymous.png',
        comment: '最喜欢喝牛肉汤，特别鲜，喝了好几碗。牛肉也非常好吃，买了双人套餐，三个人吃的，份量很足。服务态度也非常好。超👍',
        picUrls: [
          { id: -577087542, url: 'http://p0.meituan.net/shaitu/c40814ccdadcd847e17353229c634d31754516.jpg' },
          { id: -577087541, url: 'http://p1.meituan.net/shaitu/115250e137157aa6a2669f38c4cd6638320799.jpg' }
        ],
        commentTime: '1569462550835',
        score: 4,
        rateType: 0,
        recommend: []
      },
      {
        userName: '悦美方向',
        userUrl: 'https://img.meituan.net/avatar/b277cd09da0c879142f8978cb0ab432092571.jpg',
        comment: '来峨眉旅游，第一次吃传说中的跷脚牛肉，个人感觉味道不错。点了牛杂和九秒牛肉，原汤味道很好。',
        picUrls: [{ id: -564122583, url: 'http://p0.meituan.net/shaitu/50db78e3f4118908ae45534d60c882d71777374.jpg' }],
        commentTime: '1569835086526',
        score: 3,
        rateType: 1,
        recommend: []
      },
      {
        userName: 'otj878391995',
        userUrl: '',
        comment: '很好吃，人气旺，菜品棒',
        picUrls: [],
        commentTime: '1584176178066',
        score: 4,
        rateType: 0,
        recommend: ['南瓜粥']
      },
      {
        userName: 'lucaspanda',
        userUrl: 'https://img.meituan.net/avatar/67272ea25e0dfdb6daac5ce663f4e44910371.jpg',
        comment: '还行吧   李逵李鬼分不清哈',
        picUrls: [],
        commentTime: '1583648042792',
        score: 4,
        rateType: 0,
        recommend: []
      },
      {
        userName: '小帅羊！',
        userUrl: 'https://img.meituan.net/avatar/4b5402f35bcb291f62ead2e38b13523516465.jpg',
        comment: '好',
        picUrls: [],
        commentTime: '1579621743114',
        score: 3,
        rateType: 1,
        recommend: []
      }
    ],
    total: 1068
  }
]

export default {
  // shopsInfo的数据,返回值
  getShopInfo: config => {
    const { id } = param2Obj(config.url)
    const data = shopInfoList.find(item => item.id === parseInt(id))
    return {
      code: 0,
      data: data
    }
  },
  // shopGoodsList的数据,返回值
  getShopGoodsList: config => {
    const { id } = param2Obj(config.url)
    const data = shopGoodsList.find(item => item.id === parseInt(id))
    return {
      code: 0,
      data: data
    }
  },
  // shopRatingsList的数据,返回值
  getShopRatingsList: config => {
    const { id } = param2Obj(config.url)
    const data = shopRatingsList.find(item => item.id === parseInt(id))
    return {
      code: 0,
      data: data
    }
  }
}
