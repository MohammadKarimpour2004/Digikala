<template>
<div class="Login flex justify-center items-center">
  <div class="forms flex items-center flex-col">
    <div class="form">
      <div class="Email mt-6">
        <h1 class="mr-3 text-xl">ایمیل</h1>
        <input v-model="Email" class="input is-danger m-3 p-3" type="email" placeholder="ایمیل">
      </div>
      <div class="Password mt-6">
        <h1 class="mr-3 text-xl">پسورد</h1>
        <input v-model="Password" class="input is-danger m-3 p-3" type="password" placeholder="پسورد">
      </div>

      <button @click="Login" class="button is-danger mt-12 mr-3">ورود</button>
      <nuxt-link to="./SignIn" class="button is-outlined is-danger mt-12">ثبت و نام</nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "index",
  data(){
    return{
      Email:null,
      Password:null
    }
  },
  methods:{
    Login(){
      if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'))
        if (this.Email === null || this.Password === null) {
          swal({
            title: 'هشدار' ,
            text: 'لطفا فرم ها را پر نمایید!' ,
            icon: 'warning' ,
            button: 'تایید'
          })
        } else if (user.Email !== this.Email || user.Password !== this.Password) {
          swal({
            title: 'خطا' ,
            text: 'اطلاعات وارد شده صحیح نمیباشد!' ,
            icon: 'error' ,
            button: 'تایید'
          })
        } else if (user.Email === this.Email && user.Password === this.Password) {
          swal({
            title: 'ورود موفق' ,
            text: 'شما با موفقیت وارد سایت شدید!' ,
            icon: 'success' ,
            button: 'تایید'
          })
          localStorage.setItem('login' , 'true')
          setTimeout(() => {
            this.$router.push('/')
          } , 2000)
        }
      }else {
        swal({
          title: 'ورود نا موفق' ,
          text: 'شما هنوز ثبت و نام نکردید!' ,
          icon: 'error' ,
          button: 'تایید'
        })
        setTimeout(() => {
          this.$router.push('/user/SignIn')
        } , 2000)
      }
    }
  }

}
</script>

<style scoped>
.Login{
  width: 100%; height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1032%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1039' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1039' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1032'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1038'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1037'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1035'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1033'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1034'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1036'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1039'%3e%3cuse xlink:href='%23SvgjsPath1033' x='30' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='30' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='30' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='30' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='30' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='30' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='30' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='30' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='30' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='30' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='90' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='90' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='90' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='90' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='90' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='90' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='90' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='90' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='90' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='90' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='150' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='150' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='150' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='150' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='150' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='150' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='150' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='150' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='150' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='150' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='210' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='210' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='210' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='210' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='270' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='270' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='270' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='270' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='270' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='270' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='270' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='270' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='270' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='270' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='330' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='330' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='330' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='330' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='330' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='330' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='330' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='330' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='330' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='330' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='390' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='390' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='390' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='390' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='390' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='390' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='390' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='390' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='390' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='390' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='450' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='450' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='450' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='450' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='450' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='450' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='450' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='450' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='450' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='450' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='510' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='510' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='510' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='510' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='510' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='510' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='510' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='510' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='510' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='510' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='570' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='570' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='570' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1037' x='570' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='570' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='570' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='570' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='570' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='570' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='570' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='630' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='630' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1038' x='630' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='630' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='630' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='630' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='630' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='630' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='630' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='630' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='690' y='30' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='690' y='90' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='690' y='150' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='690' y='210' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1034' x='690' y='270' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1036' x='690' y='330' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1033' x='690' y='390' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='690' y='450' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='690' y='510' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1035' x='690' y='570' stroke='rgba(255%2c 0%2c 0%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
}
.forms{
  background-color: white;
  width: 350px;height: 500px;
  border: 3px solid black;
  border-radius: 15px;
}
.form{
  width: 80%;height: 95%;
}
</style>
