// 公共方法
// 1.抖动
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
// 2.localStorage存入值
export function setStore(key, value) {
  value = typeof value === 'object' ? JSON.stringify(value) : value
  localStorage.setItem(key, value)
  return true
}
// 3.获取值
export function getStore(key) {
  var tem = ''
  try {
    tem = localStorage.getItem(key)
    tem = JSON.parse(tem)
  } catch (e) {
    tem = localStorage.getItem(key)
  }
  return tem
}
// 4.删除值
export function unsetStore(key) {
  localStorage.removeItem(key)
  return true
}
