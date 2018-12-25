// 注意：仅用于注入类库函数，不允许存储页面组件等数据
const injectRef = Object.getPrototypeOf(global) || global

// 注入regeneratorRuntime，否则不支持async等es新特性
injectRef.regeneratorRuntime = require('babel-runtime/regenerator')
