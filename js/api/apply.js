Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window;
  let fn = Symbol();
  let result;
  context[fn] = this;

  if (!arr) {
    result = context[fn]();
  } else {
    result = context[fn](...arr);
  }
  delete context[fn];
  return result;
};

// 测试用例
// var value = 2;
// var obj = {
//   value: 1,
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

// console.log(bar.apply(obj, ["a", 22]));
