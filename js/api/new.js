function createNew() {
  var Con = [].shift.call(arguments);

  var obj = Object.create(Con.prototype);

  // this指向该新对象，执行并返回构造函数
  var res = Con.apply(obj, arguments);

  return res instanceof Object ? res : obj;
}
