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
    <h1>جانبی</h1>
    <div class="flex">
    <div  v-for="product in janbe ">
      <products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
    </div>
      </div>
    <h1>خانگی</h1>
    <div class="flex">
    <div  v-for="product in xange ">
<products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
    </div>
      </div>
    <h1>صنعتی</h1>
    <div class="flex">
    <div  v-for="product in sanate ">
<products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
    </div>
      </div>
    <h1>خوراکی</h1>
    <div class="flex">
    <div  v-for="product in xorake">
<products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
    </div>
      </div>
  </div>
</div>
</template>

<script>
import hederMarket from "~/components/hederMarket";
import Products from "~/components/Products";

export default {
  name: "market",
  components:{Products, hederMarket},
  data(){
    return{
      janbe:null,
      xange:null,
      sanate:null,
      xorake:null,

    }
  },
  created() {
    let products = this.$store.state.cart.products
    let janbe = products.filter((pro)=>{
     return pro.grup == 'janbe'
   })
    this.janbe = janbe

    let xange = products.filter((pro)=>{
     return pro.grup == 'xange'
   })
    this.xange = xange

   let sanate = products.filter((pro)=>{
     return pro.grup == 'sanate'
   })
    this.sanate = sanate

   let xorake = products.filter((pro)=>{
     return pro.grup == 'xorake'
   })
    this.xorake = xorake
  }
}
</script>

<style scoped>

</style>
