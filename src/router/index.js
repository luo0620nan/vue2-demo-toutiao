import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
// 把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User },
]

// 创建理由实例对象
const router = new VueRouter({
  routes,
})

export default router
