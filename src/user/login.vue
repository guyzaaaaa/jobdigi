<template>
  <div class="flex flex-col items-center justify-center min-h-screen animate-fade-down bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">ลงชื่อเข้าใช้</h2>
    <form @submit.prevent="handleSubmit" class="w-full max-w-sm">
      <div class="mb-4">
        <label for="email" class="block text-gray-700">อีเมล</label>
        <input
          type="email"
          id="email"
          placeholder="กรอกอีเมลของคุณ"
          v-model="email"
          class="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-gray-700">รหัสผ่าน</label>
        <input
          type="password"
          id="password"
          placeholder="กรอกรหัสผ่าน"
          v-model="password"
          class="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <p v-if="error" class="text-red-500">{{ error }}</p>

      <button
        type="submit"
        class="w-full p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        เข้าสู่ระบบ
      </button>
    </form>

    <p class="mt-4">
      {{ isLoggedIn ? `ยินดีต้อนรับ ${user_email}` : 'ยังไม่มีบัญชี?' }}
      <a href="/register" class="text-blue-500 hover:underline">สมัครสมาชิกที่นี่</a>
    </p>
    <!-- Modal for login success -->
    <div class="fixed inset-0 flex items-center justify-center" v-show="showModal">
      <div class="bg-white rounded-lg p-8 shadow-lg">
        <button @click="closeModal" class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <p class="text-lg text-center text-gray-700">เข้าสู่ระบบสำเร็จ</p>
        <p class="text-center mt-4">User email: {{ user_email }}</p> <!-- Show user email -->
        <p class="text-center mt-2">User ID: {{ user_id }}</p> <!-- Show user ID -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isLoggedIn: false,
      user_email: '', // Property to store user_email
      user_id: '', // Property to store user_id
      showModal: false // Add showModal property to control modal visibility
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_HR}/user/login`, {
          user_email: this.email,
          user_password: this.password
        });
        console.log(response.data)
        if (response.data && response.data.status === true) {
          this.isLoggedIn = true;
          this.user_email = response.data.data.user_email; // Store user_email from response
          this.user_id = response.data.data._id; // Store user ID from response
          this.showModal = true; // Show modal upon successful login
          setTimeout(() => {
            this.$router.push('/');
          }, 2000); // Redirect to home page after 2 seconds
          console.log('เข้าสู่ระบบสำเร็จ');
        } else {
          this.error = response.data.message; // Set error message received from API
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการเข้าสู่ระบบ:', error);
        this.error = 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ';
      }
    },
    closeModal() {
      this.showModal = false; // Close modal
    }
  }
};

</script>



<style scoped>
/* Your scoped styles here */
</style>
