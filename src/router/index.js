import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowProduct from '../views/showproduct.vue'
import Signin from '../user/signin.vue'
import Login from '../user/login.vue' // Import Login.vue
import job from '@/views/job.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShowProduct
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'show-product',
      component: ShowProduct
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/job',
      name: 'job',
      component: job
    },
    // เพิ่มเส้นทางสำหรับหน้าเข้าสู่ระบบ
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
