<template>
<div class="marts flex flex-col items-center">
  <div class="header flex items-center justify-start">
    <h1>سبد خرید</h1>
  </div>
  <!-- items -->
 <div class="mart flex justify-between items-center" v-for="mart in marts">
   <div class="name flex flex-col justify-between h-full">
     <div class="flex">
     <img :src="require(`../../assets/product-img/${mart.img}.jpg`)" width="50" class="ml-3" alt="">
     <h1 class="text-3xl">{{mart.title}}</h1>
     </div>
     <p>{{mart.qemat}} تومان</p>
   </div>
   <div class="more flex flex-col items-center justify-between">
     <div class="number flex">
       <button @click="mart.number++" class="button is-danger is-small">+</button>
       <h1 class="m-2">{{mart.number}}</h1>
       <button @click="mart.number--" class="button is-danger is-small">-</button>
     </div>
     <button class="button is-danger">خرید</button>
   </div>
 </div>
  <Footer class="mt-12"/>
</div>
</template>

<script>
import Footer from "~/components/footer";
export default {
  name: "index",
  components: {Footer},
  data(){
    return{
      marts:null,
    }
  },
  mounted() {
    //get items in localstorage
    this.marts  = JSON.parse(localStorage.getItem('marts'))
  },
}
</script>
<style scoped>
.marts{
  background-color: #ffffff;
}
.mart{
  width: 98%;
  height: 130px;
  border-radius: 10px;
  background-color: white;
  border: 4px solid #ef3a4f;
  padding: 10px;
  margin: 15px;
}
.header{
  height: 80px;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid black;
}
.header h1{
  font-size: 30px;
}
.more{
  height: 100%;
}
@media only screen and (max-width: 540px){
    .mart h1{
      font-size: 20px;
    }
}
@media only screen and (max-width: 400px){
    .mart h1{
      font-size: 15px;
    }
  .mart p{
    font-size: 10px;
  }
}
</style>
