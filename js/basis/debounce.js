function debounce(fn, wait = 50, immediate = false) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);

    // immediate 为 true 表示首次触发时直接执行一次函数
    // timer 为null表示首次触发
    if (immediate && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

function throttle(fn, wait = 1000) {
  let previous = 0;

  return function(...args) {
    let now = +new Date();
    let timer = null;

    // 优化节流，wait时间内必定触发一次函数
    if (now - previous > wait) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        previous = now;
        fn.apply(this, args);
      })
    } else {
      // 初始逻辑
      previous = now;
      fn.apply(this, args);
    }
  }
}