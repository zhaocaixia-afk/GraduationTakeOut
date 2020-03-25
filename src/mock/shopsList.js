// function param2Obj(url) {
//   const search = url.split('?')[1]
//   if (!search) {
//     return {}
//   }
//   return JSON.parse(
//     '{"' +
//       decodeURIComponent(search)
//         .replace(/"/g, '\\"')
//         .replace(/&/g, '","')
//         .replace(/=/g, '":"') +
//       '"}'
//   )
// }

// 商家详情数组
const shopInfoList = [
  {
    id: 1,
    name: '享多味汉堡炸鸡(斑竹湾店)',
    avatar: 'https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg',
    bgImg: 'https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png',
    score: 4.6,
    sellCount: 468,
    description: '蜂鸟专送',
    minPrice: 15,
    deliveryPrice: 1,
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
        type: 1,
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
  },
  {
    id: 479,
    name: '老王家峨眉酥肉豆腐脑(乐山滟澜洲店)',
    avatar: 'https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg',
    bgImg: 'https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png',
    score: 4.6,
    sellCount: 64,
    description: '蜂鸟专送',
    minPrice: 15,
    deliveryPrice: 1,
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
            rating: 100,
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
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '主食类',
        foods: [
          {
            name: '墨西哥鸡肉卷+小可套餐',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '墨西哥鸡肉卷+小可',
            info: '鸡肉',
            sellCount: 23,
            price: 16,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '小吃类',
        foods: [
          {
            name: '脆皮全鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            info: '鸡肉',
            sellCount: 77,
            price: 26,
            oldPrice: 28,
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
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '营养套饭',
        foods: [
          {
            name: '咖喱鸡肉饭套餐',
            price: 19.8,
            oldPrice: 28,
            description: '咖喱鸡肉饭+小可',
            sellCount: 8,
            rating: 100,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '酱香排骨饭套餐',
            price: 19.8,
            oldPrice: 28,
            description: '酱香排骨饭+小可',
            sellCount: 7,
            rating: 100,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '单人套餐',
        foods: [
          {
            name: '【招牌】香辣鸡腿堡套餐',
            price: 23,
            oldPrice: 31,
            description: '香辣鸡腿堡+鸡腿+2上校+中可',
            sellCount: 6,
            rating: 100,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '【热销】墨西哥鸡肉卷套餐',
            price: 35,
            // oldPrice: '',
            description: '墨西哥鸡肉卷+伴翅+1脆骨+中可',
            sellCount: 22,
            rating: 100,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '多人套餐',
        foods: [
          {
            name: '【全家福】全家福套餐',
            price: 79.9,
            oldPrice: 119,
            description: '蜜汁全鸡+鸡肉卷+2腿堡+鸡米花+小薯+2伴翅+4上校+百分小吃+3中可',
            sellCount: 5,
            rating: '',
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '【情侣】情侣套餐',
            price: 39.9,
            oldPrice: 56,
            description: '香辣鸡腿堡+鸡肉卷+小薯+鸡腿+1伴翅+2中可',
            sellCount: 0,
            // rating: 100,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '夜宵',
        foods: [
          {
            name: '蜜汁全鸡+中可',
            price: 28.6,
            oldPrice: 34,
            description: '蜜汁全鸡+中可',
            sellCount: 6,
            rating: 96,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '【今晚吃鸡】一统鸡+中可',
            price: 29.8,
            oldPrice: 42,
            description: '一统鸡+中可',
            sellCount: 1,
            rating: 85,
            info: '鸡肉',
            icon: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '饮品类',
        foods: [
          {
            name: '美年达',
            price: 7,
            // oldPrice: '',
            description: '口渴与清凉之间的最近距离',
            sellCount: 3,
            rating: 100,
            info: '汽水',
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '浓情牛奶',
            price: 5,
            // oldPrice: '',
            description: '奶香浓郁,香甜可口',
            sellCount: 5,
            rating: 100,
            info: '牛奶',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '可乐',
            price: 30,
            // oldPrice: '',
            description: '口渴与清凉之间的最近距离',
            sellCount: 30,
            rating: 100,
            info: '可乐',
            icon: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '浓情咖啡',
            price: 9,
            // oldPrice: '',
            description: '苦苦的追求,甜甜的享受',
            sellCount: 1,
            rating: 91,
            info: '咖啡',
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '香醇奶茶',
            price: 9,
            // oldPrice: '',
            description: '浓郁的奶香,茶味醇厚,滋味更佳',
            sellCount: 11,
            rating: 100,
            info: '阿萨姆红茶',
            icon: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750'
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
            name: '牛肉豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '其色泽美观、营养丰富又利于消化，食后回味悠长',
            info: '牛肉',
            sellCount: 18,
            price: 12,
            // oldPrice: 12,
            rating: 100,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '豆腐脑',
        icon: 'https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png',
        foods: [
          {
            name: '蛋冲牛肉豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '',
            sellCount: 4,
            price: 13,
            // oldPrice: 12,
            rating: 100,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '肥肠豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '肥肠鲜香厚重,质感香醇,豆花滑嫩,辣而不燥,开胃爽口,适合有便秘和气血虚的人群',
            info: '猪大肠',
            sellCount: 4,
            price: 12,
            // oldPrice: 12,
            rating: 100,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '牛肉豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '其色泽美观、营养丰富又利于消化，食后回味悠长',
            info: '牛肉',
            sellCount: 18,
            price: 12,
            // oldPrice: 47,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '糖醋豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 4,
            price: 12,
            // oldPrice: 14,
            rating: 100,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '素豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '细嫩以及柔软、口感润滑',
            info: '豆腐',
            sellCount: 3,
            price: 8,
            // oldPrice: 35,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '酥肉豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '香酥、嫩滑、爽口、肥而不腻',
            info: '猪肉',
            sellCount: 5,
            price: 12,
            // oldPrice: 38,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '新客专享素豆腐脑',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '',
            sellCount: 0,
            price: 15,
            // oldPrice: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '小吃',
        foods: [
          {
            name: '醪糟汤圆蛋',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '两个蛋',
            info: '其他',
            sellCount: 0,
            price: 12,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '怪味小土豆',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '糖醋麻辣味',
            info: '其他',
            sellCount: 3,
            price: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '锅巴土豆(麻辣味)',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '不要葱请备注一下',
            info: '其他',
            sellCount: 2,
            price: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '牛肉粉',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 1,
            price: 12,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '蒸饺',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 3,
            price: 14,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '抄手',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 3,
            price: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '牛肉面',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 3,
            price: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '臊子面',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 3,
            price: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '芋圆西米露',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '两蛋',
            info: '小麦粉',
            sellCount: 0,
            price: 20,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '酸辣粉',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 2,
            price: 11,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '鸡汤饭',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 3,
            price: 14,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '芒果西米露',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '其他',
            sellCount: 1,
            price: 35,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '钵钵鸡',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '酱菜',
            sellCount: 4,
            price: 20,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '椰奶西米露',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '水果和西米融合，味道极好',
            info: '椰果',
            sellCount: 1,
            price: 15,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '狼牙土豆(麻辣味)',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '不要葱请备注一下',
            info: '其他',
            sellCount: 9,
            price: 9,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '夹饼',
        foods: [
          {
            name: '牛肉夹饼',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '麻辣、咸鲜、爽口',
            info: '牛肉',
            sellCount: 5,
            price: 8.8,
            // oldPrice: 28,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '白饼',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '',
            info: '',
            sellCount: 1,
            price: 3,
            // oldPrice: 14,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          },
          {
            name: '肥肠夹饼',
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114',
            description: '夹饼咸鲜香辣、重油重酱',
            info: '猪大肠',
            sellCount: 5,
            price: 8.8,
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',
            images: ['http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750']
          }
        ]
      },
      {
        name: '蒸肉',
        foods: [
          {
            name: '蒸牛肉10笼',
            price: 28,
            // oldPrice: '',
            description: '麻、辣、香、白味咸鲜中仍带点微辣',
            sellCount: 1,
            rating: 100,
            info: '牛肉',
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '小笼蒸肉',
            price: 3,
            // oldPrice: '',
            description: '',
            sellCount: 8,
            rating: 100,
            info: '',
            icon: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '蒸肥肠10笼',
            price: 28,
            // oldPrice: '',
            description: '营养丰富,味道鲜美,而且有着健脾开胃的作用',
            sellCount: 1,
            rating: 100,
            info: '猪大肠',
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'
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
        userUrl: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
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
        userUrl: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
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

function getLast(url) {
  const length = url.split('/').length
  return url.split('/')[length - 1]
}

export default {
  // shopsInfo的数据,返回值
  getShopInfo: config => {
    const id = getLast(config.url)
    const data = shopInfoList.find(item => item.id === parseInt(id))
    return {
      code: 0,
      data: data
    }
  },
  // shopGoodsList的数据,返回值
  getShopGoodsList: config => {
    const id = getLast(config.url)
    const data = shopGoodsList.find(item => item.id === parseInt(id))
    return {
      code: 0,
      data: data
    }
  },
  // shopRatingsList的数据,返回值
  getShopRatingsList: config => {
    const id = getLast(config.url)
    const data = shopRatingsList.find(item => item.id === parseInt(id))
    return {
      code: 0,
      data: data
    }
  }
}
