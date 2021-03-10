function currying(func) {
  const args = [];
  return function result(...rest) {
      if (rest.length === 0) {
        return func(...args);
      } else {
        args.push(...rest);
        return result;
      }
  }
}

function currying(fn, length) {
  length = length || fn.length; 	// 第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
  return function (...args) {			// currying 包裹之后返回一个新函数，接收参数为 ...args
    return args.length >= length	// 新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
    	? fn.apply(this, args)			// 满足要求，执行 fn 函数，传入新函数的参数
      : currying(fn.bind(this, ...args), length - args.length) // 不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 fn 剩余参数的长度
  }
}