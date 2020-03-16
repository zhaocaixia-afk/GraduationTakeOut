// 公共方法
export function debounce(func, delay) {
  delay = delay || 300
  let timer = null
  return function(...args) {
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
// 理解
// 刚开始执行一遍，等待delay在执行一遍。中间时间段不会执行，不会刷新
