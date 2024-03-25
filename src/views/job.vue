<template>
	<div class="member-account text-dark pb-4">
	  <div class="container">
		<h2 class="mb-3">แก้ไขข้อมูลใบสมัครงาน</h2>
  
		<form data-toggle="validator" role="form" id="edit-form" data-delay="0" novalidate="true">
		  <input type="hidden" name="token" value="UCAAM1cqUC8ENgA0ASNQVFEtVjVUGQZHUwQBeQ4SC20HKgp4BEIMA1RiW2NXfFY5BnMBMQZrAgECQFRmVBkAPFsPAkdRQQVnU1IJewRhDRtQMwBvVzxQUgRuAEEBT1BiUStWalQFBnNTHgE5DjcLNwciCmUEWwwyVC5bMVc0VkwGfwFOBmECFQJmVGhUDgBTWzsCYVEiBT9Tagk4BCkNO1BKAFVXC1BxBCIAfQFRUElRGVZCVBEGQlMaAXgOCwsbByYKAgR4DA1USFswVwJWfAZfAXwGbwIBAkxUZFQuAGhbNQJvUVkFF1NNCTAEcw0UUFY=" required="">
  
		  <p><small class="text-danger">ช่องที่มีครื่องหมาย * จำเป็นต้องใส่ข้อมูล</small></p>
  
		  <ul class="nav nav-tabs" id="user-form-tab" role="tablist">
			<li class="nav-item">
			  <a class="nav-link active" id="personal-tab" data-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="true">ข้อมูลส่วนตัว</a>
			</li>
		  </ul>
  
		  <div class="tab-content px-0 py-2" id="userTabContent">
			<div class="tab-pane show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
			  <h4>ข้อมูลทั่วไป</h4>
			  <div class="form-group row">
				<label class="col-sm-3 col-form-label">รูปภาพ</label>
				<div class="col-sm-9">
				  <input type="file" id="new_pic_resu" accept="image/*">
				  <input type="hidden" name="user_personal[pic_resu]" value="">
				  <ul class="list-unstyled text-muted mt-2 mb-0 text-help">
					<li>1. รูปภาพสำหรับการสมัครงาน ควรเป็น รูปหน้าตรง เห็นหน้าชัดเจน</li>
					<li>2. หากพบเจอรูปภาพที่ไม่เหมาะสม ทางเราจะดำเนินการยกเลิกการเป็นสมาชิกทันที โดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
					<li>3. รูปภาพควรมีขนาด 130*110 pixel ควรเป็นรูปหน้าตรง แนวตั้ง</li>
				  </ul>
				</div>
			  </div>
			  <div class="form-group row">
				<!-- ส่วนอื่น ๆ ของแบบฟอร์ม -->
			  </div>
			</div>
		  </div>
  
		  <hr>
		  <button type="submit" class="btn btn-app btn-green disabled" id="btn-save-personal" style="pointer-events: all; cursor: pointer;">บันทึกข้อมูล</button>
		  <a href="https://www.jobnorththailand.com/employee/account" class="btn btn-app btn-border-green">ย้อนกลับ</a>
  
		</form>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'About'
  }
  </script>
  
  <style scoped>
  .member-account {
	color: #333; /* เปลี่ยนสีข้อความ */
	padding-bottom: 4rem; /* เพิ่มช่องว่างด้านล่าง */
  }
  
  .container {
	max-width: 1140px; /* กำหนดความกว้างสูงสุด */
	margin: 0 auto; /* วางตรงกลาง */
	padding: 0 1rem; /* เพิ่มช่องว่างด้านซ้ายขวา */
  }
  
  h2 {
	margin-bottom: 1.5rem; /* เพิ่มระยะห่างด้านล่าง */
  }
  
  .nav-tabs {
	padding: 0;
  }
  
  .tab-pane {
	padding: 0;
  }
  
  .form-group {
	display: flex; /* ให้เรียงข้อมูลในแนวนอน */
	margin-bottom: 1rem; /* เพิ่มระยะห่างด้านล่าง */
  }
  
  .col-form-label {
	width: 25%; /* กำหนดความกว้างของ label */
  }
  
  .col-sm-9 {
	width: 75%; /* กำหนดความกว้างของ input */
  }
  
  .btn {
	font-size: 1rem; /* กำหนดขนาดตัวอักษร */
	border-radius: 0.375rem; /* กำหนดขนาดของมุม */
	font-weight: 600; /* กำหนดความหนาของตัวอักษร */
	padding: 0.5rem 1rem; /* กำหนดขนาดพื้นที่ภายในปุ่ม */
  }
  
  .btn-green {
	background-color: #38a169; /* เปลี่ยนสีพืน้ำเขียวของปุ่มเป็นสีเขียวเข้ม */
}

.btn-green {
background-color: #2d6a4f; /* เปลี่ยนสีพื้นหลังของปุ่มเป็นสีเขียวเข้ม /
color: #fff; / เปลี่ยนสีข้อความบนปุ่มเป็นสีขาว /
border: none; / ลบเส้นขอบของปุ่ม */
}

.btn-green:hover {
background-color: #205e46; /* เปลี่ยนสีพื้นหลังของปุ่มเมื่อเม้าส์ชี้ไป /
color: #fff; / เปลี่ยนสีข้อความบนปุ่มเป็นสีขาว */
}

.btn-border-green {
background-color: transparent; /* ทำให้พื้นหลังของปุ่มโปร่งใส /
border: 2px solid #2d6a4f; / เปลี่ยนสีเส้นขอบของปุ่มเป็นสีเขียวเข้ม /
color: #2d6a4f; / เปลี่ยนสีข้อความบนปุ่มเป็นสีเขียวเข้ม */
}

.btn-border-green:hover {
background-color: #2d6a4f; /* เปลี่ยนสีพื้นหลังของปุ่มเป็นสีเขียวเข้ม /
color: #fff; / เปลี่ยนสีข้อความบนปุ่มเป็นสีขาว */
}
</style>
  