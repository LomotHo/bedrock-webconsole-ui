import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Console from '../views/Console.vue'
import WhiteList from '../views/WhiteList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Console',
    meta:{ keepAlive: true},
    component: Console
  },
  // {
  //   path: '/console',
  //   name: 'Console',
  //   meta:{ keepAlive: true},
  //   component: Console
  // },
  {
    path: '/whitelist',
    name: 'WhiteList',
    component: WhiteList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
