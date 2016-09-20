// https://github.com/shelljs/shelljs
// 全局模式，用于实现 Unix shell 命令执行
require('shelljs/global') // shelljs 模块重新包装了 child_process，调用系统命令更加方便
env.NODE_ENV = 'production' // 设置环境变量为“production”

var path = require('path')
var config = require('../config')
var ora = require('ora') // Elegant terminal spinner 优雅的终端转轮
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start() // 转轮开始

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath) // rm是Linux的删除命令 后面带的“-rf”，"-r"指的是 递归删除（意思是删除当前目录下所有文件和文件夹），而“-f”指的是 强制删除 。
mkdir('-p', assetsPath) // 创建一个新目录
cp('-R', 'static/', assetsPath) // 复制目录及目录内的所有项目

webpack(webpackConfig, function (err, stats) {
  spinner.stop() // 转轮结束
  if (err) throw err
  // nodeJS process.stdout输出
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
