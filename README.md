# vue-cli

> 项目生成器

``` bash
# 安装vue-cli   安装成功后下次这步可省略了
npm install -g vue-cli

# 使用vue-cli初始化项目
vue init webpack my-project

# 进入到目录
cd my-project
```

# Build Setup

> 配置项目

```bash
# 安装依赖
npm install

# 开始运行
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 项目结构
- build
    - build.js
    - dev-client.js
    - dev-server.js
    - utils.js
    - webpack.base.conf.js
    - webpack.dev.conf.js
    - webpack.prod.conf.js
- config
    - dev.env.js
    - index.js
    - prod.env.js
    - test.env.js
- src
- static
- .babelrc
- .editorconfig
- .eslintignore
- .eslintrc.js
- .gitignore
- index.html
- package.json



# CSS flex

> CSS flex

[Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html)

# vue-router

> 配置路由

[vue-router详情](http://router.vuejs.org/zh-cn/index.html)

```bash
# 安装vue-router
npm install vue-router --save-dev
```
在页面中使用<vue-router></vue-router>

把路由映射到各个组件，vue-router 会把各个组件渲染到正确的地方
