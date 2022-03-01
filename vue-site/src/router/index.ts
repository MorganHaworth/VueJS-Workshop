import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (menu.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menu" */ '../views/MenuView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import(/* webpackChunkName: "reviews" */ '../views/ReviewsView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactUsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
