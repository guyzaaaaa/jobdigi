<template>
  <div>
    <!-- Header Image with Search -->
    <div class="relative">
      <img src="https://media.graphassets.com/resize=fit:crop,height:300,width:940/GRVIF6ldSMimpH1rvozu" alt="Header Image" class="w-full mb-8 mt-20 animate-header-image">
      <!-- Search Input -->
      <input type="text" class="absolute top-0 right-8 sm:right-80 mr-8 px-4 py-2 rounded-full bg-white border-2 border-gray-300 mt-16 sm:mt-60 focus:outline-none focus:ring-2 focus:ring-gray-500 animate-slide-in" placeholder="ค้นหาตำแหน่งงาน" style="width: 400px; height: 60px; box-sizing: border-box; padding: 6px;">
    </div>
    
    <!-- Job Position Title -->
    <p class="text-left ml-8 sm:ml-60 mt-10 animate-slide-in text-lg text-red-500" style="animation-delay: 0.4s; font-family: 'Fredoka One', cursive;">ตำแหน่งงานที่รับ</p>
    <p class="text-left ml-4 sm:ml-40 mt-10 animate-slide-in text-lg text-blue-500" style="animation-delay: 0.6s; font-family: 'Fredoka One', cursive;">ค้นหางานใหม่โดยแบ่งตามหมวดหมู่ที่คุณสนใจ</p>
    
    <div class="flex mt-20 justify-center">
  <div class="text-gray-700 body font-bold">
    
      <div class="flex flex-wrap -m-4 bg-emerald-500">
        <!-- Render fetched posts -->
        <div v-for="(post, index) in posts" :key="index" class="p-4 md:w-1/4 sm:w-1/2 w-full animate-pulse animate-shake">
          <div class="border-green-100 border-8 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 relative ">
            <div class=" border-cyan-900 rounded-full border-4 overflow-hidden   w-24 h-24 mx-auto mb-3">
              <img :src="post.image" class="w-full h-full object-cover" :alt="post.company">
            </div>
            <p class="text-base text-center">{{ post.Company }}</p>
            <p class="text-lg text-center font-semibold text-indigo-500 mb-4">{{ post.company }}</p>
            <!-- Add detail button -->
            <button class="bg-blue-500 flex justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto" @click="openDetails(post)">
              รายละเอียด
            </button>
          
        </div>
      </div>
    </div>
  </div>
</div>

    <div>
<!-- Modal for displaying post details -->
<div v-if="selectedPost" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
  <div class="bg-white p-8 rounded-lg animate-fade-down w-150 max-h-96 overflow-y-auto flex flex-col justify-between">
    <div class="flex flex-row">
      <img :src="selectedPost.image" width="100" class="category-icon lazy loaded" data-ll-status="loaded">
      <div class="flex flex-col justify-end ml-4">
        <!-- Move the company name below the image -->
        <h2 class="text-xl font-bold mb-4">{{ selectedPost.Company }}</h2>
        <!-- Add the image here -->
        <p>Salary: {{ selectedPost.Description }}</p>
        <p>เเผนก: {{ selectedPost.department }}</p>
      </div>
    </div>
    <!-- Action buttons -->
    <div class="flex justify-between">
      <!-- Close button -->
      <button @click="closeModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-es-2xl w-40 h-10">
        กลับ
      </button>
      <!-- Apply button -->
      <router-link to="/job" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-es-2xl w-40 h-10">
        สมัครงาน
      </router-link>
    </div>
  </div>
</div>


<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <!-- Your card content here -->
</a>










    
    <!-- Existing template content -->
  </div>
    <!-- Additional Companies -->
    <div class="flex flex-col justify-center items-center mt-10">
      <div class="space-y-4">
        <div v-for="(company, index) in companies" :key="index" class="max-w-xs p-4 bg-gray-200 border border-gray-300 rounded-lg shadow-md animate-slide-in" :style="{ animationDelay: `${index * 0.2}s` }">
          <!-- Company Logo -->
          <img :src="company.logo" alt="Company Logo" class="mx-auto mb-4 h-16">
          <!-- Company Name -->
          <p class="text-lg font-semibold text-center text-gray-700">{{ company.name }}</p>
        </div>
      </div>
    </div>
    <!-- Business Categories -->
    <div class="py-5 bg-blue-200">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-0 text-2xl">ประเภทธุรกิจที่น่าสนใจ</h2> 
          <span class="text-muted">ค้นหาประเภทธุรกิจที่คุณสนใจ อัพเดทสดใหม่ ทุกวัน</span>
        </div> 
        <div id="slider" class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4" style="overflow-x: hidden; white-space: nowrap;">
          <!-- Loop through business categories -->
          <div v-for="(category, index) in businessCategories" :key="index" class="bg-gray p-4 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" style="display: inline-block; background-color: #f3f4f6; border: 1px solid #cbd5e0; color: #4a5568;" @mouseover="startScrolling" @mouseout="stopScrolling">
            <a :href="category.link">
              <img :src="category.icon" :data-src="category.icon" width="50" class="mx-auto mb-2">
              <p class="text-center text-sm">{{ category.name }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Business Categories -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const posts = ref([])
const companies = ref([])
const router = useRouter();

// Function to start scrolling
let defaultTransform = 0;
let scrollingInterval;

function startScrolling(event) {
  const slider = document.getElementById("slider");
  const rect = slider.getBoundingClientRect();
  const mouseX = event.clientX - rect.left; // Mouse position relative to the slider

  // Check if mouse is on the left half of the slider
  if (mouseX < slider.offsetWidth / 2) {
    // Scroll left
    scrollingInterval = setInterval(() => {
      defaultTransform -= 0.2;
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 10) defaultTransform = 0;
      slider.style.transform = `translateX(${defaultTransform}px)`;
    }, 5);
  } else {
    // Scroll right
    scrollingInterval = setInterval(() => {
      defaultTransform += 0.2;
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 10) defaultTransform = 0;
      slider.style.transform = `translateX(${defaultTransform}px)`;
    }, 5);
  }
}

// Function to stop scrolling
function stopScrolling() {
  clearInterval(scrollingInterval);
}
const selectedPost = ref(null);

function openDetails(post) {
  selectedPost.value = post;
}

function closeModal() {
  selectedPost.value = null;
}
onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_HR}/post`)
    if (!response.ok) {
      throw new Error('Failed to fetch post data')
    }
    const postData = await response.json()
    posts.value = postData.data
  } catch (error) {
    console.error('Error fetching post data:', error.message)
  }
})

const businessCategories = ref([
  { name: 'ทั้งหมด', icon: 'https://www.jobnorththailand.com/images/cached/ic-search.gif', link: '/search' },
  { name: 'โรงแรม/ที่พัก', icon: 'https://www.jobnorththailand.com/images/cached/d20b4ef203b75a99b6466c7f5472e-5-50.gif', link: 'https://www.jobnorththailand.com/search?biztype=2' },
  { name: 'ท่องเที่ยว/ทัวร์', icon: 'https://www.jobnorththailand.com/images/cached/11f70d9e54787b1a5163f0080e198a06-50x50.gif', link: 'https://www.jobnorththailand.com/search?biztype=14' },
  { name: 'สถานบันเทิง/ร้านอาหาร', icon: 'https://www.jobnorththailand.com/images/cached/19f7b5aa44ab1e845a1f2b34d7eda27a-50x50.gif', link: 'https://www.jobnorththailand.com/search?biztype=4' },
  { name: 'คอมพิวเตอร์/เทคโนโลยี/เครื่องใช้ไฟฟ้า', icon: 'https://www.jobnorththailand.com/images/cached/e5370bf2b8f7a1f02575664a6925e3a7-50x50.gif', link: 'https://www.jobnorththailand.com/search?biztype=15' },
  { name: 'ขายของออนไลน์/คอนเทนต์/รีวิว', icon: 'https://www.jobnorththailand.com/images/cached/c762e80b067b35aa32a240aa43c99e33-50x50.gif', link: 'https://www.jobnorththailand.com/search?biztype=32' },
  { name: 'ก่อสร้าง/วัสดุก่อสร้าง/อสังหาริมทรัพย์', icon: 'https://www.jobnorththailand.com/images/cached/6c75031f65aa0a360d160549b76ba37d-50x50.gif', link: 'https://www.jobnorththailand.com/search?biztype=16' },
  { name: 'ธนาคาร/การเงิน/การประกัน/สินเชื่อ', icon: 'https://www.jobnorththailand.com/images/cached/fafb63b7c410ef87e41489351f155e6b-50x50.gif', link: 'https://www.jobnorththailand.com/search?biztype=6' }
])
</script>

<style scoped>
@keyframes slideInTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply animation to elements */
.animate-slide-in {
  animation: slideInTop 2s ease forwards;
  opacity: 0; /* Set initial opacity to 0 */
}

/* Add your scoped styles here */
</style>

