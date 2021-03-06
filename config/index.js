// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'), // 引进环境变量
    index: path.resolve(__dirname, '../dist/index.html'), // index.html的路径
    assetsRoot: path.resolve(__dirname, '../dist'), //根路径
    assetsSubDirectory: 'static', // 资源目录
    assetsPublicPath: '/', // 资源公共路径
    productionSourceMap: true, // 生成文件映射 
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, // 用来压缩文件(.gzip)
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: { // 代理
      // '/api': {
      //   target: "http://cweal.ebj.ebjcloud.com/sxdzConsole",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/'
      //   }
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
