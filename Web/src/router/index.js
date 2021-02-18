import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Settings from '@/components/Settings'
import NewKey from '@/components/NewKey'
import KeyDetail from '@/components/KeyDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {keepAlive: false}
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {keepAlive: false}
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
      meta: {keepAlive: false}
    },
    {
      path: '/NewKey',
      name: 'NewKey',
      component: NewKey,
      meta: {keepAlive: false}
    },
    {
      path: '/KeyDetail',
      name: 'KeyDetail',
      component: KeyDetail,
      meta: {keepAlive: false}
    },
  ]
})
