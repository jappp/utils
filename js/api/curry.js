function curry(fn, length = fn.length) {
    return function (...args) {
      return args.length >= length // 新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
       ? fn.apply(this, args) // 满足要求，执行 fn 函数，传入新函数的参数
       : curry(fn.bind(this, ...args), length - args.length) // 不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 fn 剩余参数的长度
    }
}

//不定参数函数的柯里化, 简单判断没有参数的传入的时候执行
function curry2(fn) {
  return (...args) => args.length === 0 ? fn.apply(this, args) : curry2(fn.bind(this, ...args))
}

// function add1(...args) {
//   return args.reduce((a, b) => a + b);
// }

// addSum = curry2(add1);

// console.log(addSum(1)(2)(3, 4)())
