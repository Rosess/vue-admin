var path = require('path') // nodeJS path模块 管理文件路径的
var config = require('../config')
var utils = require('./utils') // 实用工具 公共部分
var projectRoot = path.resolve(__dirname, '../') // 项目路径

module.exports = {
  // 入口文件
  entry: {
    app: './src/main.js'
  },
  // 出口文件(生成文件)
  output: {
    // 生成文件路径(绝对路径)
    path: config.build.assetsRoot,
    // 生成文件的公共路径
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    // 文件名 [name]这里是webpack提供的根据路口文件自动生成的名字
    filename: '[name].js'
  },
  // 文件路径的指向
  resolve: {
    // 用于指明程序自动补全识别哪些后缀,第一个是空字符串! 对应不需要后缀的情况.
    extensions: ['', '.js', '.vue'],
    // 配置应用层的模块（要被打包的模块）解析
    fallback: [path.join(__dirname, '../node_modules')],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'layout': path.resolve(__dirname, '../src/layout'),
      'components': path.resolve(__dirname, '../src/components'),
      'views': path.resolve(__dirname, '../src/views'),
      'node_modules': path.resolve(__dirname, '../node_modules')
    }
  },
  // 用来配置 loader 模块的解析
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  // Loader加载器
  module: {
    // preLoaders在调用loader之前需要调用的loader,他不做任何代码的转换，只是进行检查。
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    // 转换器
    // loaders是一个数组，每个元素都用来指定loader
    loaders: [
      // 编译写入.vue文件
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      // 转化ES6语法
      {
        test: /\.js$/, // test值为正则表达式，当文件路径匹配时启用(必须)
        loader: 'babel', // 指定使用什么loader，可以用字符串，也可以用数组(必须)
        include: projectRoot, // 手动添加必须处理的文件（文件夹）
        exclude: /node_modules/  //屏蔽不需要处理的文件（文件夹）可以使用exclude来排除一部分文件
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      // 编译vue的template部分
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        // Loader可以通过查询字符串(类似web页面url中的查询字符串)传递查询参数，
        // 使用问号?将 loader与查询字符串连接，loader后跟查询字符串
        // 也可用query
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // 检查代码是否有格式错误或其它错误
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
