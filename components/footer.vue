<template>
<div class="footer w-full  flex flex-col items-center justify-between ">
  <!-- items -->
  <div class="top flex justify-between w-full mb-12 items-center">
  <div class="links">
    <ul>
      <li><i class="bi bi-instagram text-pink-600 m-1"></i>اینستاگرام</li>
      <li><i class="bi bi-linkedin text-blue-600 m-1"></i>لینکدین</li>
      <li><i class="bi bi-whatsapp text-green-400 m-1"></i>واتس اپ</li>
      <li><i class="bi bi-twitter text-blue-200 m-1"></i>تویتیر</li>
    </ul>
  </div>
    <!-- icons -->
    <div>
      <h1>همراه ما باشید!</h1>
      <div class="flex justify-between w-60">
        <i class="bi bi-instagram text-pink-600 m-1" style="font-size: 30px"></i>
        <i class="bi bi-twitter text-blue-200 m-1" style="font-size: 30px"></i>
        <i class="bi bi-linkedin text-blue-600 m-1" style="font-size: 30px"></i>
      </div>
      <!-- input -->
      <div class="send">
        <h1 class="text-xl">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h1>
        <div class="flex mt-2">
          <input class="input is-danger" placeholder="ایمیل شما" type="text">
          <button class="button is-danger">ثبت</button>
        </div>
      </div>
    </div>
    </div>
  <!-- text -->
  <div class="flex items-center justify-between mesage">
    <div class="text">
      <h1 class="text-xl  mb-2">فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h1>
      <p class="">یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</p>
    </div>
    <!-- 2logo -->
     <div id="logo">
       <img src="../assets/images/ZP-footer-logo.jpg" width="100" class="rounded-md m-2" alt="">
       <img src="../assets/images/DG-footer-logo.jpg" width="100" class="rounded-md m-2" alt="">
     </div>
  </div>
  <!-- last text in page -->
  <h1 class="mt-12 last">تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</h1>
</div>
</template>

<style scoped>
.footer{
  background-color: #ede6e6;
  height: 800px;
}
li{
  margin-bottom: 10px;
}
.text{
  width: 60%;
}
.text h1{
  font-weight: bold;
}
@media only screen and (max-width: 824px){
   .text p{
     font-size: 12px;
   }
  .text h1{
    font-size: 15px;
  }
  .last{
    font-size:12px
  }
}
@media only screen and (max-width: 520px){
    .text h1{
      font-size: 10px;
    }
  .text p{
    font-size: 8px;
  }
  .send h1{
    font-size: 12px;
  }
  .last{
    font-size: 8px;
  }
}
@media only screen and (max-width: 460px){
    .mesage{
      flex-direction: column-reverse;
    }
    .last{
      font-size: 6px;
    }
  .text{
    width: 100%;
  }
  #logo{
    display: flex;
  }
}
@media only screen and (max-width: 440px){
   ul{
     display: none;
   }
  .top {
    justify-content: center;
  }
  .send{
    width: 100%;
  }
  .send h1{
    font-size: 12px;
  }
}
</style>
