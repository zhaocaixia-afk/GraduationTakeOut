// 文件别名
const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    // 浏览器配置
    devServer:{
        open:true,
        //跨域
        host: '192.168.43.94',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://192.168.43.94:4000', //要访问的接口域名
                // 开启代理:在本地会创建一个虚拟服务端
                // 然后发送请求数据,并同时接收数据
                // 这样客户端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true, 
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 文件别名
    chainWebpack:(config) => {
        config.resolve.alias
        .set('assets',resolve('./src/assets'))
        .set('common',resolve('./src/common'))
        .set('components',resolve('./src/components'))
        .set('network',resolve('./src/network'))
        .set('router',resolve('./src/router'))
        .set('store',resolve('./src/store'))
        .set('views',resolve('./src/views'))
    }
}