<template>
<div class="header w-full">
  <!-- digikala logo-->
  <div class="image flex justify-center items-center">
   <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/0b95274f4638c9d7dddb46e2ea65fa1c22787e62_1647358133.jpg?x-oss-process=image/quality,q_95">
  </div>
  <!-- login & signin , mart page button-->
  <div class="menus grid w-full h-28 content-between">
    <div class="search-user flex items-center w-full justify-between">
       <img src="https://www.digikala.com/statics/img/svg/logo.svg" style="width: 115px;" alt="">
      <div class="userbtn flex items-center">
        <div>
          <nuxt-link to="/user/profile" id="profile" v-if="log" class="flex items-center text-dark p-2 login" title="پروفایل">
            <img v-if="img != null" :src="img" />
            <img src="../assets/profile.jpg" v-if="img == null">
          </nuxt-link>
          <nuxt-link to="user/SignIn" v-if="!log" class="flex items-center text-dark p-2 login button is-warning is-light" title="ثبت و نام | ورود">ثبت و نام | ورود</nuxt-link>
        </div>
        <button @click="cart" class="text-dark m-2 button is-danger is-small is-outlined" title="سبد خرید"><i class="bi bi-cart3 font-bold"></i></button>
      </div>
    </div>
    <!-- menu buttons for scroll-->
    <div class="menu w-full flex items-center justify-between">
      <div class="mahsol flex mb-3">
        <button class="button is-danger is-small is-outlined mr-2 por" title="پر فروش ها"><i class="bi bi-patch-check-fill"></i>پر فروش ها</button>
        <button @click="janbe" class="button is-danger is-small is-outlined mr-2" title="جانبی"><i class="bi bi-earbuds"></i> جانبی  </button>
        <button @click="xange" class="button is-danger is-small is-outlined mr-2" title="خانگی"><i class="bi bi-house-fill"></i>خانگی  </button>
        <button @click="sanate" class="button is-danger is-small is-outlined mr-2"  title="صنعتی"><i class="bi bi-wrench-adjustable-circle-fill"></i> صنعتی  </button>
        <button @click="xorake" class="button is-danger is-small is-outlined mr-2" title="خوراکی"><i class="bi bi-egg-fried"></i>خوراکی  </button>
      </div>
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
      img:null
    }
  },
  methods:{
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
      window.scrollTo({top:1100, behavior: 'smooth'})
    },
    xange(){
      window.scrollTo({top:1550, behavior: 'smooth'})
    },
    sanate(){
      window.scrollTo({top:2000, behavior: 'smooth'})
    },
    xorake(){
      window.scrollTo({top:2600, behavior: 'smooth'})
    },
  },
  mounted() {
    if (localStorage.getItem('login')){
        this.log = localStorage.getItem('login')
    }
        this.img = localStorage.getItem('img')
  }
}
</script>
<style scoped>
.bi-cart3{
  font-size: 20px;
}
#profile{
  width: 50px;height: 50px;

}
img{
  width: 100%;height: 100%;
}
@media only screen and (max-width: 540px){
    button{
      width: 50px;
      font-size: 10px;
    }
    .por{
      display: none;
    }
}
</style>
