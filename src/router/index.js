import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import 'element-ui/lib/theme-chalk/index.css'
import '../scss/app.scss'

Vue.use(Router)
// const _import = file => () => require('@/views/' + file + ".vue");
publicRoute = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登陆',
    },
    component: () => import('@/views/Login')
  },

  {
    path: '*',
    component: () => import('@/views/common/404')
  }
]
roleRoute = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/common/layout'),
    children: [
      {
        path: '/user/index',
        name: 'Index',
        component: () => import('@/views/user/Index'),
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('@/views/template/list'),
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('@/views/template/form'),
      },
    ]
  },
]
export default new Router({
  mode: 'history',
  routes: publicRoute
})
