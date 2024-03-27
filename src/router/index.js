import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowProduct from '../views/showproduct.vue'
import Signin from '../user/signin.vue'
import Login from '../user/login.vue'
import job from '@/views/job.vue'
import Compajop from '@/views/compajop.vue'
import UserShowProduct from '../views/usershowproduct.vue' 
import AboutViewUser from '../views/aboutviewuser.vue' // Import AboutViewUser.vue ที่คุณสร้างไว้

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
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/compajop',
      name: 'compajop',
      component: Compajop
    },
    // เพิ่มเส้นทางสำหรับแสดงผลสินค้าของผู้ใช้ที่เข้าสู่ระบบแล้ว
    
    {
      path: '/usershowproduct',
      name: 'usershowproduct',
      component: UserShowProduct
    },
    {
      path: '/aboutviewuser',
      name: 'aboutviewuser',
      component: AboutViewUser
    }
    
   
  ]
})

export default router
