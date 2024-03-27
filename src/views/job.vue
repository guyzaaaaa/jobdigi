<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

	<div class="member-account text-dark pb-4 mt-20">
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
			  <!-- ส่วนข้อมูลส่วนตัว -->
			  <!-- ข้อมูลรูป -->
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
			<!-- ชื่อ-สกุล -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">ชื่อ-สกุล *</label>
  <div class="col-sm-9">
    <input type="text" class="form-control border rounded-md px-3 py-2 w-full" name="user_personal[fullname]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

			  <!-- เพศ -->
			  <div class="form-group row">
				<label class="col-sm-3 col-form-label">เพศ *</label>
				<div class="col-sm-9 form-inline">
				  <input type="radio" class="mr-2" name="user_personal[sex]" value="ชาย" required=""> ชาย
				  <input type="radio" class="ml                -2 mr-2" name="user_personal[sex]" value="หญิง" required="" onchange="validateSoldier(event,'ได้รับการยกเว้น')"> หญิง
              </div>
            </div>
            <!-- สถานะสมรส -->
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">สถานะสมรส *</label>
              <div class="col-sm-9 form-inline">
                <input type="radio" class="mr-2" name="user_personal[marry]" value="โสด" required=""> โสด
                <input type="radio" class="ml-2 mr-2" name="user_personal[marry]" value="สมรส" required=""> สมรส
                <input type="radio" class="ml-2 mr-2" name="user_personal[marry]" value="แยกกันอยู่" required=""> แยกกันอยู่
                <input type="radio" class="ml-2 mr-2" name="user_personal[marry]" value="หย่าร้าง" required=""> หย่าร้าง
              </div>
            </div>
          <!-- สัญชาติ -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">สัญชาติ *</label>
  <div class="col-sm-9">
    <input type="text" class="form-control border rounded-md px-3 py-2 w-full" name="user_personal[nationality]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

          <!-- ศาสนา -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">ศาสนา *</label>
  <div class="col-sm-9">
    <input type="text" class="form-control border rounded-md px-3 py-2 w-full" name="user_personal[religion]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

            <!-- วัน เดือน ปีเกิด -->

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">วัน เดือน ปีเกิด *</label>
              <div class="col-sm-9 form-inline">
                <input id="datepicker" class="form-input mt-1 block w-full rounded-md border-gray-300" type="text" placeholder="Select date">

                  <!-- ตัดเกรด -->
               
                <select class="form-control mr-2" name="birthday[month]" data-text="month" onchange="changeDOB(this,event)" required="">
                  <option value="01">มกราคม</option>
                  <option value="02">กุมภาพันธ์</option>
                  <option value="03" selected="">มีนาคม</option>
                  <!-- ตัดเกรด -->
                </select>
                <select class="form-control" name="birthday[year]" data-text="year" onchange="changeDOB(this,event)" required="">
                  <!-- ตัดเกรด -->
                </select>
                <div class="help-block with-errors"></div>
              </div>
            </div>
           <!-- ส่วนสูง -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">ส่วนสูง *</label>
  <div class="col-sm-9 form-inline">
    <input type="number" class="form-control mr-2 border rounded-md px-3 py-2" name="user_personal[tall]" value="" required=""> เซ็นติเมตร
    <div class="help-block with-errors"></div>
  </div>
</div>

<!-- น้ำหนัก -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">น้ำหนัก *</label>
  <div class="col-sm-9 form-inline">
    <input type="number" class="form-control mr-2 border rounded-md px-3 py-2" name="user_personal[weighty]" value="" required=""> กิโลกรัม
    <div class="help-block with-errors"></div>
  </div>
</div>

            <!-- สถานะภาพทางทหาร -->
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">สถานะภาพทางทหาร *</label>
              <div class="col-sm-9">
                <div>เพศหญิง ให้เลือก ได้รับการยกเว้น</div>
                <select class="form-control" name="user_personal[soldier]" required="">
                  <option value=""></option>
                  <option value="รอการเกณฑ์ทหาร">รอการเกณฑ์ทหาร</option>
                  <!-- ตัดเกรด -->
                </select>
                <div class="help-block with-errors"></div>
              </div>
            </div>

            <!-- ข้อมูลการติดต่อ -->
            <h4>ข้อมูลการติดต่อ</h4>
          <!-- ที่อยู่ -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">ที่อยู่ *</label>
  <div class="col-sm-9">
    <input type="text" class="border rounded-md px-3 py-2 w-full" name="user_personal[address]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

            <!-- จังหวัด -->
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">จังหวัด *</label>
              <div class="col-sm-9">
                <select class="form-control" name="user_personal[province]" required="">
                  <option value="" selected disabled>กรุณาเลือกจังหวัด</option>
                  <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                  <option value="สมุทรปราการ">สมุทรปราการ</option>
                  <option value                  ="นนทบุรี">นนทบุรี</option>
                  <!-- เพิ่มต่อไปตามจำนวนจังหวัดที่ต้องการ -->
                </select>
                <div class="help-block with-errors"></div>
              </div>
            </div>
          <!-- รหัสไปรษณีย์ -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">รหัสไปรษณีย์ *</label>
  <div class="col-sm-9">
    <input type="text" class="border rounded-md px-3 py-2 w-full" name="user_personal[zipcode]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

<!-- Email -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">Email *</label>
  <div class="col-sm-9">
    <input type="email" class="border rounded-md px-3 py-2 w-full" name="user_personal[email]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

           <!-- Phone -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">Phone *</label>
  <div class="col-sm-9">
    <input type="tel" class="border rounded-md px-3 py-2 w-full" name="user_personal[phone]" value="" required="">
    <div class="help-block with-errors"></div>
  </div>
</div>

<!-- ID Line -->
<div class="form-group row">
  <label class="col-sm-3 col-form-label">ID Line</label>
  <div class="col-sm-9">
    <input type="text" class="border rounded-md px-3 py-2 w-full" name="user_personal[line_id]" value="">
    <div class="help-block with-errors"></div>
  </div>


            </div>

          </div>
        </div>
        <!-- ปุ่มบันทึก -->
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
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import 'bulma/css/bulma.min.css';

flatpickr("#datepicker", {
    dateFormat: "Y-m-d",
    // และอื่น ๆ ตามต้องการ
});

</script>

<style scoped>
  /* Styles for the form container */
  .form-container {
    width: fit-content; /* Adjust width to fit content */
    margin: auto; /* Center horizontally */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(26, 108, 82, 0.1);
  }

  /* Styles for the parent container */
  .member-account {
    text-align: justify; /* Center the form container horizontally */
    padding: 20px; /* Add padding to the parent container */
    border: 1px solid #9e3939; /* Add border to the parent container */
    border-radius: 10px; /* Add border radius to the parent container */
    box-shadow: 0 0 10px rgba(26, 108, 82, 0.1); /* Add box shadow to the parent container */
  }

  /* Styles for the input fields */
  .form-container input[type="text"],
  .form-container input[type="email"],
  .form-container input[type="tel"],
  .form-container input[type="number"],
  .form-container select,
  .form-container textarea {
    color: #000; /* Set text color to black */
  }
</style>






  