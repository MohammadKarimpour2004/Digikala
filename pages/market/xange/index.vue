<template>
  <div class="xange flex flex-col justify-between">
    <div class="headerSite w-full flex justify-between items-center m-2">
      <input @keyup.enter="searchs" v-model="search" class="input is-danger w-96" type="search" placeholder="جستجو">
      <div>
      <hederMarket/>
      </div>
    </div>
    <div class="content">
      <div class="w-full flex justify-center rounded-md mt-8 mb-8">
        <VueSlickCarousel class="VueSlickCarousel" :arrows="true" :autoplay="true" :speed="900"  :autoplaySpeed="5000" :dots="true">
          <img class="rounded-md" src="../../../assets/images/xange2.jpg" alt="جانبی">
          <img class="rounded-md" src="../../../assets/images/xange.jpg" alt="جانبی">
        </VueSlickCarousel>
      </div>
      <div class="flex w-full flex-wrap justify-center">
      <div class="products m-4" v-for="product in product">
        <products :img="product.img" :title="product.title" :text="product.text" :qemat="product.qemat" :off="product.off"/>
      </div>
      </div>
      <br>
    </div>
    <div class="footerSite"><footersite/></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import hederMarket from "~/components/hederMarket";
import footersite from "~/components/footer";

export default {
  name: 'home',
  data(){
    return{
      product:null
    }
  },
  components:{hederMarket,footersite,VueSlickCarousel},
  mounted() {
    let products = this.$store.state.cart.products
    let xange = products.filter((pro)=>{
      return pro.grup == 'xange'
    })
    this.product = xange
  },
   methods:{
    searchs(){
      let search = this.product.filter((pro)=>{
     return pro.title == this.search || pro.text == this.search
   })
      this.product = search
      this.search == null
    }
  }
}
</script>
<style scoped>
.xange{
  width: 100%; height: 100vh;
}
.VueSlickCarousel{
  width: 90%;
}
</style>
