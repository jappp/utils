function debounce(fn, wait = 50, immediate = false) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);

    // immediate 为 true 表示第一次触发后执行
    // timer 为空表示首次触发
    if (immediate && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
