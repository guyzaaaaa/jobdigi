<template>
  <div class="container mx-auto ">

    <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <p class="text-lg font-semibold mb-10 mt-10">หากต้องการติดต่อบริษัทของเรา เพื่อข้อสงสัยหรือข้อเสนอแนะ
          โปรดใช้ข้อมูลติดต่อด้านล่าง:</p>
        <div class="mb-4">
          <label for="contactType" class="block text-gray-700 text-sm font-bold mb-2">ประเภทการติดต่อ</label>
          <div class="relative">
            <select id="contactType" name="contactType" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="general">ทั่วไป</option>
              <option value="inquiry">สอบถาม</option>
              <option value="feedback">ข้อเสนอแนะ</option>
              <!-- Add more options as needed -->
            </select>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <label for="fullName" class="block text-gray-700 text-sm font-bold mb-2">ชื่อ-สกุล</label>
        <input type="text" id="fullName" name="fullName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">อีเมล์</label>
        <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">เบอร์โทรศัพท์</label>
        <input type="tel" id="phone" name="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="additionalDetails" class="block text-gray-700 text-sm font-bold mb-2">รายละเอียดเพิ่มเติม</label>
        <textarea id="additionalDetails" name="additionalDetails" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div class="mb-6 text-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">ยืนยันการติดต่อ</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Handle form submission logic here
    }
  }
}
</script>

<style scoped>
/* เพิ่มสไตล์ CSS ที่ต้องการในส่วนนี้ */
</style>
