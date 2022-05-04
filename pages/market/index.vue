<template>
<div class="market">
  <!-- header site -->
  <div class="headerSite w-full flex justify-between items-center m-2">
      <div class="flex">
        <img src="https://www.digikala.com/statics/img/svg/logo.svg" class="logo" style="width: 115px;" alt="">
        <!-- inpout for search item-->
        <input @keyup.enter="searchs" v-model="search" class="input is-danger w-96 mr-3" type="search" placeholder="جستجو">
      </div>
      <div class="flex items-center">
        <!-- profile and market page -->
         <div>
           <nuxt-link to="/user/profile" id="profile" v-if="log" class="flex items-center text-dark p-2 login" title="پروفایل">
              <img v-if="img != null" :src="img" />
              <img src="../../assets/images/profile.jpg" v-if="img == null">
           </nuxt-link>
           <nuxt-link to="./../user/SignIn" v-if="!log" class="flex items-center text-dark p-2 login button is-warning is-light" title="ثبت و نام | ورود"> ثبت و نام | ورود <i class="bi bi-person fs-1"></i></nuxt-link>
        </div>
        <i @click="cart" title="سبد خرید" class="bi bi-cart2"></i>
      </div>
  </div>
    <!-- content -->
    <div class="content">
      <!-- search box -->
      <div class="search flex-col" style="display: none">
        <h1>جستجو</h1>
        <div class="flex overflow-x-scroll">
         <div v-for="search in searchss" class="flex ">
          <products :img="search.img" :title="search.title" :text="search.text" :qemat="search.qemat" :off="search.off"/>
         </div>
        </div>
      </div>
      <!-- products -->
    <div class="products">
      <h1>جانبی</h1>
      <div class="flex overflow-x-scroll">
        <div  v-for="product in market[0] ">
          <products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
        </div>
      </div>
      <h1>خانگی</h1>
      <div class="flex overflow-x-scroll">
        <div  v-for="product in market[1] ">
         <products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
        </div>
      </div>
      <h1>صنعتی</h1>
      <div class="flex overflow-x-scroll">
        <div  v-for="product in market[2] ">
          <products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
        </div>
      </div>
      <h1>خوراکی</h1>
      <div class="flex overflow-x-scroll">
        <div  v-for="product in market[3] ">
          <products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
        </div>
      </div>
   </div>
  </div>
  <!-- footer -->
  <Footer/>
</div>
</template>

<script>
import swal from 'sweetalert'
import Products from "~/components/Products";
import Footer from "~/components/footer";
export default {
  name: "market",
  components:{Footer, Products},
  data(){
    return{
      search:null,
      market:[null,null,null,null],
      searchss:null,
      log: null,
      img:null,
    }
  },
  // get info
  mounted() {
    if (localStorage.getItem('login')){
       this.log = localStorage.getItem('login')
    }
       this.img = localStorage.getItem('img')
  },
  // filter for 4 line
  created() {
      let products = this.$store.state.cart.products
      let janbe = products.filter((pro)=>{
      return pro.grup == 'janbe'
      })
      this.market[0] = janbe

      let xange = products.filter((pro)=>{
      return pro.grup == 'xange'
   })
      this.market[1] = xange

      let sanate = products.filter((pro)=>{
      return pro.grup == 'sanate'
   })
      this.market[2] = sanate

      let xorake = products.filter((pro)=>{
      return pro.grup == 'xorake'
   })
      this.market[3] = xorake
  },
  methods:{
    // search method
    searchs(){
      let products = document.querySelector('.products')
      products.style.display = 'none'
      let searchbox = document.querySelector('.search')
      searchbox.style.display = 'flex'
      let pro = this.$store.state.cart.products
      let search = pro.filter((pro)=>{
      return pro.title == this.search || pro.text == this.search
   })
      this.searchss = search
    },
    // go to market page
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
  }
}
</script>
<style scoped>
.search{
  height: 100vh;
}
.headerSite{
      max-width: 98%;
}
.bi-person,.bi-cart2{
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
@media only screen and (max-width: 570px){
   .logo{
     display: none;
   }
  .input{
    width: 90%;
  }
}
</style>
