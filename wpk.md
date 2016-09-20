
# webpack

> dev-server.js

Node.js Path模块，用于处理文件路径的工具

[常用的几个方法](http://itbilu.com/nodejs/core/NJHZjdRN.html)

``` bash
# 规范化路径，注意'..' 和 '.'。
path.normalize(p)

path.join([path1][, path2][, ...])

path.dirname(p)

path.relative(from, to)
# 用于将相对路径转为绝对路径。

path.parse(pathString)
```

##### Node.js Express 框架

[详情链接1](http://javascript.ruanyifeng.com/nodejs/express.html)
[详情链接2](http://www.runoob.com/nodejs/nodejs-express-framework.html)

```bash
# 安装  
npm install express --save
```

```
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world!');
});
app.listen(3000);
```


##### http-proxy-middleware

> Node.js 代理中间件

[详情](https://www.npmjs.com/package/http-proxy-middleware)

```bash
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
app.listen(3000);

# http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```

#  webpack dev middleware


手把手深入理解 webpack dev middleware 原理與相關 plugins

[详情链接1](https://segmentfault.com/a/1190000005614604)

Express结合Webpack的全栈自动刷新

[详情链接2](http://acgtofe.com/posts/2016/02/full-live-reload-for-express-with-webpack)

# connect-history-api-fallback

> Provides a fallback for non-existing directories so that the HTML 5 history API can be used.

# webpack常用插件
[详情链接](http://www.jianshu.com/p/1eefaeaf6874)
