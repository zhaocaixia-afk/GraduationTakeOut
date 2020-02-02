// 文件别名
const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    // 浏览器配置
    devServer:{
        open:true
    },
    // 文件别名
    chainWebpack:(config) => {
        config.resolve.alias
        .set('assets',resolve('./src/assets'))
        .set('components',resolve('./src/components'))
        .set('router',resolve('./src/router'))
        .set('store',resolve('./src/store'))
        .set('views',resolve('./src/views'))
    }
}