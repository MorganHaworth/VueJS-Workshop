import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home Page'
    }
  },
  {
    path: '/menu',
    name: 'menu-and-order',
    // route level code-splitting
    // this generates a separate chunk (menu.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MenuOrderView.vue'),
    meta: {
      title: 'Menu and Ordering'
    }
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import(/* webpackChunkName: "reviews" */ '../views/ReviewsView.vue'),
    meta: {
      title: 'Reviews'
    }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactUsView.vue'),
    meta: {
      title: 'Contact Us'
    }
  },
  {
    /* catchAll is a dynamic segment and (.*) is regex to match against anything */
    path: '/:catchAll(.*)',
    name: 'page-404',
    component: () => import(/* webpackChunkName: "page-404" */ '../views/Page404View.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
