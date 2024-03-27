<template>
    <nav class="bg-gray-700 shadow shadow-gray-300 w-full px-8 md:px-auto top-0 left-0 z-50"
      :class="{ 'fixed': isNavbarFixed }">
      <div
        class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap transition-transform duration-500">
        <!-- Logo -->
        <div class="text-indigo-500 md:order-1">
            <div class="order-2 md:order-3 flex items-center gap-4">
  <!-- Add Log Out button -->
  <button class="text-white font-semibold" @click="logout">Log Out</button>
</div>

          <!-- Replace the SVG with the image -->
          <img src="https://www.jobnorththailand.com/images/cached/0c602ca22c399105e854f149ea7c6ceb-100x100.png" alt="Logo" class="h-20 w-20">
        </div>
        <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold justify-between">
            <!-- Active Link = text-indigo-500
            Inactive Link = hover:text-indigo-500 -->
            <li class="md:px-4 md:py-2 border-b-4" :class="{ 'border-indigo-500': activeTab === 'home' }">
              <RouterLink to="/usershowproduct" @click="activeTab = 'home'">หน้าแรก</RouterLink>
            </li>
            <li class="md:px-4 md:py-2 border-b-4" :class="{ 'border-indigo-500': activeTab === 'about' }">
              <RouterLink to="/aboutviewuser" @click="activeTab = 'about'">เกี่ยวกับเรา</RouterLink>
            </li>
            <li class="md:px-4 md:py-2 border-b-4" :class="{ 'border-indigo-500': activeTab === 'search' }">
              <RouterLink to="/search" @click="activeTab = 'search'">ค้นหางาน</RouterLink>
            </li>
          </ul>
        </div>
        <div class="order-2 md:order-3 flex items-center gap-4">
         
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
 import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const activeTab = ref('')
const isNavbarFixed = ref(false)

// Function to handle scroll event
function handleScroll() {
  isNavbarFixed.value = window.scrollY > 0
}

// Function to handle log out
function logout() {
  // Redirect to home page
  router.push('/home');
}

// Add event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
  </script>
  
  <style scoped>
  @media screen and (max-width: 1024px) {
    .pages-nav__item {
      width: 50%;
    }
  }
  
  @media screen and (max-width: 768px) {
    .pages-nav__item {
      width: 100%;
    }
  }
  
  /* เพิ่มสไตล์ CSS ที่จำเป็นตามต้องการ */
  body {
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #112c38;
  }
  
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  ul li {
    list-style: none;
    margin: 0 20px;
    transition: 0.5s;
  }
  
  ul li a {
    display: block;
    position: relative;
    text-decoration: none;
    padding: 5px;
    font-size: 18px;
    font-family: sans-serif;
    color: #fff;
    text-transform: uppercase;
    transition: 0.5s;
  }
  
  ul:hover li a {
    transform: scale(1.5);
    opacity: 0.2;
    filter: blur(5px);
  }
  
  ul li a:hover {
    transform: scale(2);
    opacity: 1;
    filter: blur(0);
    text-decoration: none;
    color: #fff;
  }
  
  ul li a:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff497c;
    transition: 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
  }
  
  ul li a:hover:before {
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(1);
  }
  
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    /* ให้ Navbar อยู่ด้านบนสุด */
  }
  
  /* สไตล์อื่น ๆ ที่คุณต้องการ */
  
  /* เพิ่มการเปลี่ยนสีเมื่อชี้ */
  nav ul li:hover a {
    color: #4f46e5;
    /* เปลี่ยนสีข้อความเมื่อชี้ */
  }
  
  nav ul li:hover {
    border-color: #4f46e5;
    /* เปลี่ยนสีเส้นกรอบเมื่อชี้ */
  }
  
  /* เพิ่ม transition */
  nav ul li a {
    transition: color 0.3s ease, border-color 0.3s ease;
    /* เพิ่มอนิเมชันเมื่อเปลี่ยนสีและเส้นกรอบ */
  }
  </style>
  