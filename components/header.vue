<template>
<div class="header w-full">
  <!-- digikala logo-->
  <img src="../assets/images/title.gif">
  <!-- login & signin , mart page button-->
  <div class="menus grid w-full h-28 content-between">
    <div class="search-user flex items-center w-full justify-between">
       <img src="https://www.digikala.com/statics/img/svg/logo.svg" class="mr-2" style="width: 115px;" alt="">
      <div class="userbtn flex items-center">
        <div>
          <nuxt-link to="/user/profile" id="profile" v-if="log" class="flex items-center text-dark p-2 login" title="پروفایل">
            <img v-if="img != null" :src="img" />
            <img src="../assets/images/profile.jpg" v-if="img == null">
          </nuxt-link>
          <nuxt-link to="user/SignIn" v-if="!log" class="flex items-center text-dark p-2 login button is-warning is-light" title="ثبت و نام | ورود">ثبت و نام | ورود</nuxt-link>
        </div>
        <i @click="cart" title="سبد خرید" class="bi bi-cart2"></i>
      </div>
    </div>
    <!-- menu buttons for scroll-->
    <div class="menu w-full flex items-center justify-between">
      <ul class="mahsol flex mb-3">
        <details v-if="scr <= 600">
           <summary><i class="bi bi-list mb-2 "></i></summary>
           <li @click="janbe" class=" mt-2 p-1" title="جانبی"><i class="bi bi-lightning-charge-fill"></i> پرفروش‌ترین‌ها  </li>
           <li @click="xange" class=" mt-2 p-1" title="خانگی"><i class="bi bi-percent"></i>تخفیف‌ها و پیشنهادها</li>
           <li @click="sanate" class=" mt-2 p-1"  title="صنعتی"><i class="bi bi-check"></i> شگفت‌انگیزها  </li>
        </details>
        <li v-if="scr > 600" @click="janbe" class=" mr-4" title="جانبی"><i class="bi bi-lightning-charge-fill"></i> پرفروش‌ترین‌ها  </li>
        <li v-if="scr > 600" @click="xange" class=" mr-4" title="خانگی"><i class="bi bi-percent"></i>تخفیف‌ها و پیشنهادها</li>
        <li v-if="scr > 600" @click="sanate" class=" mr-4"  title="صنعتی"><i class="bi bi-check"></i> شگفت‌انگیزها  </li>
        <li @click="xorake" class=" mr-5 " title="خوراکی">سوالی دارید؟</li>
        <li @click="xorake" class=" mr-4" title="خوراکی">فروشنده شوید!</li>
      </ul>
       <p class="data ml-1 m-2" :title="Fulldate">{{date}}</p>
    </div>
  </div>
</div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "header",
  data(){
    return{
      log: null,
      img:null,
      datae:null,
      Fulldate:null,
      scr:null,
      top:1600,
      top2:2100,
      top3:2600,
      top4:3000
    }
  },
  methods:{
    //go to cart page
    cart(){
      if (localStorage.getItem('login')){
          this.$router.push('/mart')
      }else{
         swal({
           title:'خطا',
           text: 'هنوز وارد سایت نشدید!',
           icon: 'error',
           button: 'تایید'
         })
         setTimeout(()=>{
           this.$router.push('user/Login')
         },2000)
      }
    },
    // scrolls event
    janbe(){
      window.scrollTo({top:this.top, behavior: 'smooth'})
    },
    xange(){
      window.scrollTo({top:this.top2, behavior: 'smooth'})
    },
    sanate(){
      window.scrollTo({top:this.top3, behavior: 'smooth'})
    },
    xorake(){
      window.scrollTo({top:this.top4, behavior: 'smooth'})
    },
  },
  // get info
  mounted() {
    if (localStorage.getItem('login')){
        this.log = localStorage.getItem('login')
    }
        this.img = localStorage.getItem('img')
    // get date
    let date = new Date()
    let option = {
      weekday:'long',
      day:'numeric'
    }
    let Fulloption = {
      day:'numeric',
      weekday:'long',
      month:'long',
      year:'numeric'
    }
    this.date = date.toLocaleDateString('fa-IR', option)
    this.Fulldate = date.toLocaleDateString('fa-IR', Fulloption)

    this.scr = window.screen.width
  }
}
</script>
<style scoped>
.bi-cart2{
  font-size: 30px;
  margin: 10px;
}
.bi-cart2:hover{
  cursor: pointer;
  color: black;
}
.mahsol li{
  font-size: 11px;
  padding-bottom: 5px;
  background-image:
    linear-gradient(
     transparent 0%,
     transparent 90%,
     #ef3a4f 90%,
     #ef3a4f 100%
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position-x: right;
  transition: background-size 500ms;
}
.mahsol li:hover{
  background-size: 100% 100%;
  background-position-x: left;
  cursor: pointer;
  color: black;
}
#profile{
  width: 50px;height: 50px;
}
img{
  width: 100%;height: 100%;
}
.data{
  font-size: 12px;
}
summary{
  list-style: none;
}
details{
  background-color: #ffffff;
  position: absolute;
  z-index: 1;
}
@media only screen and (max-width: 650px){
   .mahsol li{
     font-size: 10px;
     margin-right: 0px;
   }
}
@media only screen and (max-width: 540px){
    button{
      width: 50px;
      font-size: 8px;
    }
}
</style>
