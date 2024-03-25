<template>
  <div class="container mx-auto p-8">
    <h1 class=" text-3xl font-bold mb-4">รายการสินค้า</h1>
    <button @click="showAddProductForm = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">Add product</button>
    
    <!-- เพิ่มฟอร์มเพื่อเพิ่มสินค้า -->
    <div v-if="showAddProductForm" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-8 rounded-lg w-1/2">
        <h2 class="text-lg font-semibold mb-2">เพิ่มสินค้าใหม่</h2>
        <form @submit.prevent="addProduct">
          <div class="flex flex-col mb-4">
            <label for="productName" class="mb-2">ชื่อสินค้า:</label>
            <input type="text" v-model="newProduct.prod_name" id="productName" class="border rounded px-2 py-1">
          </div>
          <div class="flex flex-col mb-4">
            <label for="productDesc" class="mb-2">รายละเอียด:</label>
            <textarea v-model="newProduct.prod_desc" id="productDesc" class="border rounded px-2 py-1"></textarea>
          </div>
          <div class="flex flex-col mb-4">
            <label for="productPrice" class="mb-2">ราคา:</label>
            <input type="number" v-model="newProduct.prod_price" id="productPrice" class="border rounded px-2 py-1">
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">บันทึก</button>
            <button @click="cancelAddProduct" type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- ตารางรายการสินค้า -->
    <div class="overflow-x-auto">
      <table class="table-auto min-w-full">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">ชื่อสินค้า</th>
            <th class="px-4 py-2">รายละเอียด</th>
            <th class="px-4 py-2">ราคา</th>
            <th class="px-4 py-2">แก้ไข</th>
            <th class="px-4 py-2">ลบ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index" :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
            <td class="border px-4 py-2">{{ product.prod_name }}</td>
            <td class="border px-4 py-2">{{ product.prod_desc }}</td>
            <td class="border px-4 py-2">{{ product.prod_price }}</td>
            <td class="border px-4 py-2">
              <button @click="editProduct(product)" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</button>
            </td>
            <td class="border px-4 py-2">
              <button @click="confirmDelete(product)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- แบบฟอร์มแก้ไขสินค้า -->
    <div v-if="showEditProductForm" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-8 rounded-lg w-1/2">
        <h2 class="text-lg font-semibold mb-2">แก้ไขสินค้า</h2>
        <form @submit.prevent="updateProduct">
          <div class="flex flex-col mb-4">
            <label for="editProductName" class="mb-2">ชื่อสินค้า:</label>
            <input type="text" v-model="selectedProduct.prod_name" id="editProductName" class="border rounded px-2 py-1">
          </div>
          <div class="flex flex-col mb-4">
            <label for="editProductDesc" class="mb-2">รายละเอียด:</label>
            <textarea v-model="selectedProduct.prod_desc" id="editProductDesc" class="border rounded px-2 py-1"></textarea>
          </div>
          <div class="flex flex-col mb-4">
            <label for="editProductPrice" class="mb-2">ราคา:</label>
            <input type="number" v-model="selectedProduct.prod_price" id="editProductPrice" class="border rounded px-2 py-1">
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">บันทึก</button>
            <button @click="cancelEditProduct" type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      showAddProductForm: false,
      newProduct: { prod_name: '', prod_desc: '', prod_price: '' },
      showEditProductForm: false,
      selectedProduct: { prod_name: '', prod_desc: '', prod_price: '' }
    };
  },
  methods: {
    async addProduct() {
      try {
        const response = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newProduct)
        });
        if (!response.ok) {
          throw new Error('ไม่สามารถเพิ่มสินค้าได้');
        }
        this.products.push(this.newProduct);
        this.newProduct = { prod_name: '', prod_desc: '', prod_price: '' };
        this.showAddProductForm = false;
      } catch (error) {
        console.error(error.message);
      }
    },
    cancelAddProduct() {
      this.showAddProductForm = false;
      this.newProduct = { prod_name: '', prod_desc: '', prod_price: '' };
    },
    editProduct(product) {
      this.selectedProduct = { ...product };
      this.showEditProductForm = true;
    },
    async updateProduct() {
      try {
        const response = await fetch(`http://localhost:3000/products/${this.selectedProduct._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.selectedProduct)
        });
        if (!response.ok) {
          throw new Error('ไม่สามารถอัพเดตสินค้าได้');
        }
        const index = this.products.findIndex(product => product._id === this.selectedProduct._id);
        if (index !== -1) {
          this.products[index] = { ...this.selectedProduct };
        }
        this.selectedProduct = { prod_name: '', prod_desc: '', prod_price: '' };
        this.showEditProductForm = false;
      } catch (error) {
        console.error(error.message);
      }
    },
    cancelEditProduct() {
      this.selectedProduct = { prod_name: '', prod_desc: '', prod_price: '' };
      this.showEditProductForm = false;
    },
    async deleteProduct(product) {
      try {
        const confirmed = window.confirm('คุณต้องการลบสินค้านี้หรือไม่?');
        if (confirmed) {
          const response = await fetch(`http://localhost:3000/products/${product._id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('ไม่สามารถลบสินค้าได้');
          }
          this.products = this.products.filter(p => p._id !== product._id);
        }
      } catch (error) {
        console.error(error.message);
      }
    },
    confirmDelete(product) {
      this.deleteProduct(product);
    }
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error('ไม่สามารถดึงข้อมูลสินค้าได้');
      }
      this.products = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
