/* wait 时间内，可以重新生成定时器，但只要 wait 的时间到了，必须给用户一个响应 */
function throttle(fn, wait) {
  let previous = 0;
  let timer = null;

  return function(...args) {
    let now = +new Date();

    // 如果间隔时间小于设定时间，则为本次触发操作设立一个新的定时器
    if (now - previous < wait) {
      // 定时器时间结束后执行函数 fn
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        previous = now;
        fn.apply(this, args);
      }, wait);
    } else {
      previous = now;
      // 间隔大于设定时间，直接执行
      fn.apply(this, args);
    }
  }
}