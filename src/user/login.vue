<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
      {{ isLoggedIn ? 'ยินดีต้อนรับ' : 'ยังไม่มีบัญชี?' }}
      <a href="/register" class="text-blue-500 hover:underline">สมัครสมาชิกที่นี่</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isLoggedIn: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_MEMBER}/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_email: this.email,
            user_password: this.password,
          }),
        });

        if (response.ok) {
          const userData = await response.json();
          // เข้าสู่ระบบสำเร็จ
          // ทำสิ่งที่ต้องการหลังจากเข้าสู่ระบบ
          this.isLoggedIn = true;
          console.log('เข้าสู่ระบบสำเร็จ');
        } else {
          // กรณีผิดพลาดในการเข้าสู่ระบบ
          this.error = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
          console.error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error);
        this.error = 'เกิดข้อผิดพลาด';
        // จัดการข้อผิดพลาดที่เกิดขึ้น
      }
    },
  },
};
</script>

<style scoped>
/* Your scoped styles here */
</style>
