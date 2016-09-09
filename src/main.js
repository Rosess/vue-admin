import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'

import App from 'src/layout/App'
import RouteMap from 'src/config/route'

// 安装路由模块
Vue.use(VueRouter)
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制
// history 管理浏览历史记录
const router = new VueRouter({history: true})
// 路由映射到各个组件
router.map(RouteMap)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
