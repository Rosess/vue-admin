var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge') // 连接数组和合并对象  合併設定檔使用
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
// 依据一个简单的模板，生成html文件插件，自动引用了打包后的JS文件
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  /*
    使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
    这个选项可以在不影响构建速度的前提下生成完整的sourcemap，
    但是对打包后输出的JS文件的执行具有性能和安全的隐患。
    不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项；
    eval-source-map is faster for development
  */
  devtool: '#eval-source-map',
  plugins: [
    //  DefinePlugin 定义一些全局的变量,通过定义不同的变量值，使我们在开发和发布的时候执行不同的代码。
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    // 全局开启代码热替换
    // 模块热替换(HMR)交换, 添加, 或者删除模块, 同时应用持续运行, 不需要页面刷新.
    new webpack.HotModuleReplacementPlugin(),
    // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
