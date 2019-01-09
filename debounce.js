/**
 * 防抖函数 - 我们希望频繁事件的回调函数在某段连续时间内，在事件触发后只执行一次
 * @param func {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，单位是毫秒（ms）
 * @return {Function} 返回一个具备防抖能力的函数
 */
function debounce(func, delay) {
  // 保存函数调用时的上下文和参数，传递给 func
  const context = this
  const args = arguments
  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 func 函数
  return () => {
    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 func
    if (window.GLOBAL_TIMER) clearTimeout(window.GLOBAL_TIMER)
    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），再过 delay 毫秒就执行 func
    window.GLOBAL_TIMER = setTimeout(() => func.apply(context, args), delay)
  }
}