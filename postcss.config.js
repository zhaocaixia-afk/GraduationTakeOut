module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, //视窗的宽度,对应设计稿的宽度
      viewportHeigth: 667, //视窗的高度
      unitPrecision: 5, //指定'px'转换为视窗单位值的小数位数
      viewportUnit: 'vw', //指定需要转换成的视窗单位,建议使用vm
      selectorBlackList: [], //指定不需要转换的类
      minPixelValue: 1, //最小转换值
      mediaQuery: false //允许在媒体查询中转换'px'
      // exclude: [正则表达式1,正则表达式2,/^TabBar/]
    }
  }
}
