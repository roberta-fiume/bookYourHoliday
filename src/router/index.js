import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Destinations from '../views/Destinations.vue'
import Mexico from '../views/Mexico.vue'
import Dubai from '../views/Dubai.vue'
import Hawaii from '../views/Hawaii.vue'
import Maldives from '../views/Maldives.vue'
import Sardinia from '../views/Sardinia.vue'
import Payment from '../views/Payment.vue'
import Example from '../views/Example.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/',
    name: 'destinations',
    component: Destinations
  },

  {
    path: '/mexico',
    name: 'mexico',
    component: Mexico,

    children: [
      { path: 'payment', component: Payment}
    ]
  },

  {
    path: '/dubai',
    name: 'dubai',
    component: Dubai
  },

  {
    path: '/hawaii',
    name: 'hawaii',
    component: Hawaii
  },

  {
    path: '/maldives',
    name: 'maldives',
    component: Maldives
  },

  {
    path: '/sardinia',
    name: 'sardinia',
    component: Sardinia
  },

  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },

  {
    path: '/example',
    name: 'example',
    component: Example
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
