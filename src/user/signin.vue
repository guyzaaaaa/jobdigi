<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-10 animate-fade-down">
    <!-- Content -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        สมัครสมาชิก
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <!-- Form -->
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="registerUser" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">อีเมล *</label>
            <div class="mt-1">
              <input v-model="user_email" id="email" name="email" type="email" autocomplete="email" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">รหัสผ่าน *</label>
            <div class="mt-1">
              <input v-model="user_password" id="password" name="password" type="password" autocomplete="new-password" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">ยืนยันรหัสผ่าน *</label>
            <div class="mt-1">
              <input v-model="confirmPassword" id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            <p class="text-red-500 text-xs italic">{{ passwordMismatchError }}</p>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input v-model="rememberMe" id="rememberMe" name="rememberMe" type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="rememberMe" class="ml-2 block text-sm text-gray-900">
                จดจำฉัน
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">ลืมรหัสผ่าน?</a>
            </div>
          </div>

          <!-- Sign Up Button -->
          <div>
            <button type="submit" :disabled="isSubmitting"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              ยืนยันการสมัคร
            </button>
          </div>
        </form>
      </div>
    </div>
<!-- Modal for terms and conditions -->
<div v-if="showTermsModal" class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

    <!-- Background overlay -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- Modal panel -->
    <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <!-- Icon -->
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
            <!-- Heroicon name: check -->
            <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              ข้อตกลงการใช้บริการ
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                กรุณาอ่านและยอมรับข้อตกลงการใช้บริการก่อนที่จะดำเนินการต่อ
              </p>
              <!-- Your terms and conditions here -->
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click="acceptTerms" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
          ยอมรับ
        </button>
        <button @click="declineTerms" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          ปฏิเสธ
        </button>
      </div>
    </div>
  </div>
</div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed z-10  mt-20 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- Modal Panel -->
        <div class="inline-block align-bottom bg-white mt-20 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <!-- Icon -->
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: check -->
                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <!-- Message -->
              <div class="mt-20 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  สมัครสมาชิกสำเร็จ
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    คุณสมัครสมาชิกสำเร็จ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <!-- Close button -->
            <button @click="closeModal" type="button" class="w-full inline-flexjustify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              กลับ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user_email: '', // แก้ไขชื่อของตัวแปรให้เป็น user_email
      user_password: '', // แก้ไขชื่อของตัวแปรให้เป็น user_password
      confirmPassword: '',
      email: '',
      rememberMe: false,
      isSubmitting: false,
      passwordMismatchError: '',
      showModal: false // Flag to control modal visibility
    };
  },
  methods: {
    async registerUser() {
  if (this.user_password !== this.confirmPassword) {
    this.passwordMismatchError = "รหัสผ่านไม่ตรงกัน โปรดลองอีกครั้ง";
    return;
  }

  this.isSubmitting = true;

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_HR}/user/register`, {
      user_email: this.user_email,
      user_password: this.user_password
    });

    console.log('การสมัครสมาชิกสำเร็จ:', response.data);
    
    // เก็บ token ที่ได้รับจากเซิร์ฟเวอร์ไว้ใน localStorage หรือ sessionStorage
    localStorage.setItem('userToken', response.data.token);
   // Show modal when registration is successful
   this.showModal = true;
  } catch (error) {
    console.error('การสมัครสมาชิกล้มเหลว:', error.message);
    // Handle errors, such as displaying error messages
  } finally {
    this.isSubmitting = false;
  }
},

    closeModal() {
      this.showModal = false; // ปิด modal
      window.location.reload(); // รีโหลดหน้าเมื่อปิด modal
      // ตัวเลือก: คุณสามารถดำเนินการเพิ่มเติมเมื่อปิด modal
    },
    async InsertUser() {
      const { user_email, user_password } = this;
      try {
        const response = await fetch('URL_TO_YOUR_SERVER_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_email,
            user_password,
          }),
        });

        const data = await response.json();
        console.log(data);
        // Handle response data as needed
      } catch (error) {
        console.error('Error inserting user:', error);
        // Handle error as needed
      }
    },
  }
}

</script>

<style>
/* Additional styles can be added here */
</style>