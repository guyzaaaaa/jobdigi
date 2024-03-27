<template>
  
  <div class="container mx-auto mt-10 animate-fade-down">
    <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <p class="text-lg font-semibold mb-10 mt-10">หากต้องการติดต่อบริษัทของเรา เพื่อข้อสงสัยหรือข้อเสนอแนะ
          โปรดใช้ข้อมูลติดต่อด้านล่าง:</p>
        <div class="mb-4">
          <label for="contact_type" class="block text-gray-700 text-sm font-bold mb-2">ประเภทการติดต่อ</label>
          <div class="relative">
            <select id="contact_type" name="contact_type" v-model="contact_type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="ทั่วไป">ทั่วไป</option>
              <option value="สอบถาม">สอบถาม</option>
              <option value="ข้อเสนอแนะ">ข้อเสนอแนะ</option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-4 ">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">ชื่อ-สกุล</label>
        <input type="text" id="name" name="name" v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">อีเมล์</label>
        <input type="email" id="email" name="email" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">เบอร์โทรศัพท์</label>
        <input type="tel" id="phone" name="phone" v-model="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="details" class="block text-gray-700 text-sm font-bold mb-2">รายละเอียดเพิ่มเติม</label>
        <textarea id="details" name="details" v-model="details" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div class="mb-6 text-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">ยืนยันการติดต่อ</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      contact_type: '',
      name: '',
      email: '',
      phone: '',
      details: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_MEMBER}/contact/add`, {
          contact_type: this.contact_type,
          name: this.name,
          email: this.email,
          phone: this.phone,
          details: this.details
        });
        console.log(response.data); // สำหรับการตรวจสอบการรับข้อมูลที่ส่งกลับจาก API
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
      }
    }
  }
}
</script>

<style scoped>
/* เพิ่มสไตล์ CSS ที่ต้องการในส่วนนี้ */
</style>
