import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/PageNotFound.vue')
  },
  {
    path: '*',
    redirect: '404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
