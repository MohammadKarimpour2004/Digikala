<template>
<div class="market">
  <div class="headerSite w-full flex justify-between items-center m-2">
      <div class="flex">
      <img src="https://www.digikala.com/statics/img/svg/logo.svg" style="width: 115px;" alt="">
      <input @keyup.enter="searchs" v-model="search" class="input is-danger w-96 mr-3" type="search" placeholder="جستجو">
        </div>
      <div>
      <hederMarket/>
      </div>
  </div>
  <div class="content">
    <div class="search flex-col" style="display: none">
      <h1>جستجو</h1>
      <div class="flex overflow-x-scroll">
      <div v-for="search in searchss" class="flex ">
        <products :img="search.img" :title="search.title" :text="search.text" :qemat="search.qemat" :off="search.off"/>
      </div>
      </div>
    </div>
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
  <Footer/>
</div>
</template>

<script>
import hederMarket from "~/components/hederMarket";
import Products from "~/components/Products";
import Footer from "~/components/footer";

export default {
  name: "market",
  components:{Footer, Products, hederMarket},
  data(){
    return{
      search:null,
      market:[null,null,null,null],
      searchss:null

    }
  },
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
    }
    }

}
</script>

<style scoped>
.search{
  height: 100vh;
}
</style>
