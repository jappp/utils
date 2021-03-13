Function.prototype.call = function(context) {
  context = context ? Object(context) : window;
  let fn = Symbol();
  context[fn] = this;

  let args = [...arguments].slice(1);
  let result = context[fn](...args);
  delete context[fn];

  return result;
}

// 测试用例
// var value = 2;
// var obj = {
//   value: 100,
//   fn: 123,
// };

// function bar(name, age) {
//   console.log(this.value);
//   return {
//     value: this.value,
//     name: name,
//     age: age,
//   };
// }

// console.log(bar.call(obj, "a", 22));