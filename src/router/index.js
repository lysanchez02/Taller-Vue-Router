import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import inicio from '../views/inicioView.vue'

import dashboardAdmin from '../views/admin/dashboardAdmin.vue'
import create from '../views/admin/productos/create.vue'
import index from '../views/admin/productos/index.vue'
import update from '../views/admin/productos/update.vue'
import dashboardUser from '../views/user/dashboardUser.vue'
import rol from '../views/user/login/rol.vue'
import inicioSesion from '../views/user/login/inicioSesion.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboardAdmin',
    name: 'dashboardAdmin',
    component: dashboardAdmin
  },
  {
    path: '/create',
    name: 'create',
    component: create
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/update',
    name: 'update',
    component: update
  },
  {
    path: '/dashboardUser',
    name: 'dashboardUser',
    component: dashboardUser
  },
  {
    path: '/rol',
    name: 'rol',
    component: rol
  },
  {
    path: '/inicioSesion',
    name: 'inicioSesion',
    component: inicioSesion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
