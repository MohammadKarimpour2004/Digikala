<template>
  <div class="header w-full flex items-center ml-4">
          <div>
            <nuxt-link to="/user/profile" id="profile" v-if="log" class="flex items-center text-dark p-2 login" title="پروفایل">
              <img v-if="img != null" :src="img" />
              <img src="../assets/profile.jpg" v-if="img == null">
            </nuxt-link>
            <nuxt-link to="./../user/SignIn" v-if="!log" class="flex items-center text-dark p-2 login button is-warning is-light" title="ثبت و نام | ورود"> ثبت و نام | ورود <i class="bi bi-person fs-1"></i></nuxt-link>
          </div>
          <button @click="cart" class="text-dark m-2 button is-danger is-small is-outlined" title="سبد خرید"><i class="bi bi-cart3 font-bold"></i></button>
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
    cart(){
      if (!localStorage.getItem('login')){
        swal({
          title:'خطا',
          text: 'هنوز وارد سایت نشدید!',
          icon: 'error',
          button: 'تایید'
        })
        setTimeout(()=>{
          this.$router.push('/user/Login')
        },2000)
      }
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
.bi-person,.bi-cart3{
  font-size: 20px;
}
#profile{
  width: 50px;height: 50px;
  border-radius: 50%;
}
img{
  width: 100%;height: 100%;
}

</style>
