class EventEmitter {
  constructor() {
    this.eventMap = {};
  }

  // 收集依赖
  on(type, handler) {
    if (!(handler instanceof Function)) {
      throw new Error('need function');
    }

    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    }
    this.eventMap[type].push(handler);
  }

  // 触发
  emit(type, params) {
    if (this.eventMap[type]) {
      this.eventMap[type].forEach(handler => handler(params));
    }
  }

  // 移除
  off(type, handler) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1)
    }
  }
}

// 实例化 myEventEmitter
// const myEvent = new EventEmitter();
// // 编写一个简单的 handler
// const testHandler = function (params) {
//   console.log(`test事件被触发了，testHandler 接收到的入参是${params}`);
// };
// // 监听 test 事件
// myEvent.on("test", testHandler);
// // 在触发 test 事件的同时，传入希望 testHandler 感知的参数
// myEvent.emit("test", "newState");


// myEvent.on("test", (params) => {
//   console.log('第二次触发' + params)
// });
// myEvent.emit("test", "newState2");