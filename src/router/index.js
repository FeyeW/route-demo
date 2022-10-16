/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: '/one',
        name: 'one',
        component: () => import(/* webpackChunkName: "one" */ '../components/Main/One/index.vue'),
      },
      {
        path: '/tow',
        name: 'tow',
        component: () => import(/* webpackChunkName: "tow" */ '../components/Main/Tow/index.vue'),
      },
      {
        path: '/three',
        name: 'three',
        component: () => import(/* webpackChunkName: "one" */ '../components/Main/Three/index.vue'),
      },
      {
        path: '/threeOne',
        name: 'threeOne',
        component: () => import(/* webpackChunkName: "one" */ '../components/Main/Three/threeOne.vue'),
      },
      {
        path: '/threeTow',
        name: 'threeTow',
        component: () => import(/* webpackChunkName: "one" */ '../components/Main/Three/threeTow.vue'),
      },
      {
        path: '/four',
        name: 'four',
        component: () => import(/* webpackChunkName: "one" */ '../components/Main/Four/index.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
