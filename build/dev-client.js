/* eslint-disable */

// dev-client.js 接受reload事件

// Simple server-side code 简单的服务器端代码
// Cross-domain requests support ("withCredentials" is not supported in IE8-IE9)  支持跨越请求
require('eventsource-polyfill') // 用来管理服务器发送事件
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

// 订阅事件，当 event.action === 'reload' 时执行页面刷新
// dev-server.js中 派发的reload事件
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
