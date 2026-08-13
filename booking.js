document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('booking-form');

  form.addEventListener('submit', function (event) {
    var fullname = document.getElementById('fullname').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();
    var classSelect = document.getElementById('class-select').value;
    var classDate = document.getElementById('class-date').value;
    var timeSlot = document.getElementById('time-slot').value;
    var experience = document.querySelector('input[name="experience"]:checked');
    var confirm = document.getElementById('confirm').checked;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullname === '') {
      alert('กรุณากรอกชื่อ–นามสกุล');
      event.preventDefault();
      return;
    }

    if (phone === '') {
      alert('กรุณากรอกหมายเลขโทรศัพท์');
      event.preventDefault();
      return;
    }

    if (email === '' || !emailPattern.test(email)) {
      alert('กรุณากรอก Email ให้ถูกต้องตามรูปแบบ');
      event.preventDefault();
      return;
    }

    if (age === '' || isNaN(age) || Number(age) < 15 || Number(age) > 100) {
      alert('กรุณากรอกอายุระหว่าง 15 ถึง 100 ปี');
      event.preventDefault();
      return;
    }

    if (classSelect === '') {
      alert('กรุณาเลือกคลาสออกกำลังกาย');
      event.preventDefault();
      return;
    }

    if (classDate === '') {
      alert('กรุณาเลือกวันที่ต้องการเข้าเรียน');
      event.preventDefault();
      return;
    }

    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var selectedDate = new Date(classDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('กรุณาเลือกวันที่ปัจจุบันหรือวันที่ในอนาคต');
      event.preventDefault();
      return;
    }

    if (timeSlot === '') {
      alert('กรุณาเลือกช่วงเวลาเข้าเรียน');
      event.preventDefault();
      return;
    }

    if (!experience) {
      alert('กรุณาเลือกระดับประสบการณ์ในการออกกำลังกาย');
      event.preventDefault();
      return;
    }

    if (!confirm) {
      alert('กรุณายืนยันข้อมูลและรับทราบว่าการส่งแบบฟอร์มยังไม่ถือเป็นการยืนยันสิทธิ์เข้าเรียน');
      event.preventDefault();
      return;
    }
  });
});
