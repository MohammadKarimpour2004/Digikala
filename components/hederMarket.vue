<template>
  <div class="header w-full flex items-center ml-4">
    <!-- profile -->
    <div>
      <nuxt-link to="/user/profile" id="profile" v-if="log" class="flex items-center text-dark p-2 login" title="پروفایل">
        <img v-if="img != null" :src="img" />
        <img src="../assets/images/profile.jpg" v-if="img == null">
      </nuxt-link>
      <nuxt-link to="./../user/SignIn" v-if="!log" class="flex items-center text-dark p-2 login button is-warning is-light" title="ثبت و نام | ورود"> ثبت و نام | ورود <i class="bi bi-person fs-1"></i></nuxt-link>
    </div>
    <i @click="cart" title="سبد خرید" class="bi bi-cart2"></i>
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
    }
  },
  methods:{
    // go to cart page
    cart(){
      if (localStorage.getItem('login')){
           this.$router.push('/mart')
      }else {
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
    }
  },
  // get info
  mounted() {
    if (localStorage.getItem('login')){
       this.log = localStorage.getItem('login')
    }
       this.img = localStorage.getItem('img')
  }
}
</script>
<style scoped>
.bi-person,.bi-cart3{
  font-size: 20px;
}
#profile{
  width: 50px;height: 50px;
}
img{
  width: 100%;height: 100%;
}
.bi-cart2{
  font-size: 30px;
  margin: 10px;
}
.bi-cart2:hover{
  cursor: pointer;
  color: black;
}
</style>
