import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/myLogin.vue'
import First from '@/views/myHome.vue'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
// 把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/first',
    component: First,
    children: [
      { path: '/home', component: Home },
      { path: '/user', component: User },
    ],
  },
  // { path: '/home', component: Home },
]

// 创建理由实例对象
const router = new VueRouter({
  routes,
})
router.beforeEach(function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
