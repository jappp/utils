/**
 * 实现难点
 * 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数
*/
Function.prototype.bind2 = function(context) {
  if (typeof this !== 'function') {
    throw new Error('xxx');
  }
  let self = this;
  let args1 = [...arguments].slice(1);

  let fBind = function(...args2) {
    return self.apply(
      this instanceof fBind ? this : context, 
      [...args1, ...args2]
    );
  }

  function F() {};

  F.prototype = this.prototype;
  fBind.prototype = new F();
  return fBind;
}

// 测试用例
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'Jack'); // bind2
var obj = new bindFoo(20); // 返回正确
// undefined
// Jack
// 20

obj.habit; // 返回正确
// shopping

obj.friend; // 返回正确
// kevin

obj.__proto__.friend = "Kitty"; // 修改原型

console.log(bar.prototype.friend); // 返回错误，这里被修改了
