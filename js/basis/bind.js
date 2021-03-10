Function.prototype.bind2 = function(context) {
  if (typeof this !== "function") {
    throw new Error("false");
  }
  // 获取调用函数
  const self = this; 
  let args1 = [...arguments].slice(1);
  return function(...args2) {
    let args = [...args1, ...args2];
    return self.apply(context, args);
  }
}