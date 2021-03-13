/**
 * es6 继承手写
 * 基本原理就是寄生组合式继承
*/

function _extends(child, parent) {
  // 原型式继承父类原型属性/方法
  let prototype = Object.create(parent && parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;

  if (parent) {
    // 继承父类静态属性/方法
    Object.setPrototypeOf
      ? Object.setPrototypeOf(child, parent)
      : (child.__proto__ = parent);
  }
}