import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'

import App from 'src/layout/App'
import RouteMap from 'src/config/route'
import 'font-awesome/css/font-awesome.min.css'
import 'components'

// 安装路由模块 注册/扩展vue的路由这一发法
Vue.use(VueRouter)
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制
// history 管理浏览历史记录
const router = new VueRouter({history: true})// ???
// 路由映射到各个组件
router.map(RouteMap)

// 启动应用！
// 路由器会创建一个 App 实例，并且挂载到选择符 app 匹配的元素上。
// app document.querySelector(“app”);
router.start(App, 'app')
