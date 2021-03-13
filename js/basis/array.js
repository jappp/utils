// 数组扁平化es6
function flatten(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

// 数组去重
function unique(arr) {
  return Array.from(new Set(arr));
}