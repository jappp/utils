Function.prototype.call2 = function(context) {
  context = context ? Object(context) : window;
  context.fn = this;

  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;

  return result;
}