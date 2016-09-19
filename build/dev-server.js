var path = require('path')  // 引入 Node.js Path，模块， 用于处理文件路径的小工具
var express = require('express') // 引入 Node.js Express 框架，使用 Express 可以快速地搭建一个完整功能的网站。
var webpack = require('webpack')
var config = require('../config') // 分别配置 build 和 dev，用于配置环境、入口文件等 build打包后生成的路径 dev端口号
var proxyMiddleware = require('http-proxy-middleware') // Node.js 代理中间件 for connect, express 和 browser-sync。
 //Node.js process对象  全局对象
// process.env属性返回一个对象，包含了当前Shell的所有环境变量
// 新建一个环境变量NODE_ENV  生产阶段设为production，开发阶段设为develop或staging
// 读取 process.env.NODE_ENV
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// 默认端口监听dev传入流量
// process.env.POR ？？？？
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
// 定义自定义HTTP代理API的后端
var proxyTable = config.dev.proxyTable

var app = express() // 调用express函数
var compiler = webpack(webpackConfig) // 编译器 不同的环境编译不同的文件

// webpack中间件 处理静态资源的middleware
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  // 中间件绑定一个公共路径
  publicPath: webpackConfig.output.publicPath,
  // options for formating the statistics
  // 统计选项
  stats: {
    colors: true,
    chunks: false
  }
})

// 结合webpack-dev-middleware使用的middleware，它可以实现浏览器的无刷新更新（常说的HMR）
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// html-webpack-plugin模板的改变时，自动加载刷新页面
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))  // 代理   被用作服务器中间件
})

// handle fallback for HTML5 history API
// Provides a fallback for non-existing directories so that the HTML 5 history API can be used.
app.use(require('connect-history-api-fallback')()) //

// 用于webpack包输出
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 静态路径   path.posix.join() 以 posix 兼容的方式交互
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// express.static() 中间件函数设置静态目录的顺序来查找文件
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
