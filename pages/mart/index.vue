<template>
<div class="marts flex flex-col items-center">
  <div class="header flex items-center justify-between">
    <div class="flex items-center m-1">
    <img src="../../assets/images/download-logo.png"  class="ml-1" alt="">
    <h1>سبد خرید</h1>
      </div>
    <h4>{{len}}</h4>
  </div>
  <!-- items -->
  <div class="content flex flex-col items-center justify-start">
    <div v-if="len == 0" class="none-product flex flex-col items-center">
      <img src="../../assets/images/back-market.png" alt="">
      <h1>هیچ محصولی در سبد وجود ندارد!</h1>
    </div>
 <div class="mart flex justify-between items-center" v-for="mart in marts">
   <div class="name flex flex-col justify-between h-full">
     <div class="flex">
       <div class="flex flex-col items-center">
     <img :src="require(`../../assets/product-img/${mart.img}.jpg`)" width="95" class="ml-3 rounded-md" alt="">
         <!-- stars icon -->
       <div class="stars">
           <i v-if="mart.star < 3 " class="bi bi-star"></i>
           <i v-if="mart.star < 2 " class="bi bi-star"></i>
           <i v-if="mart.star < 1 " class="bi bi-star"></i>
           <i v-if="mart.star < 0 " class="bi bi-star"></i>
           <i v-if="mart.star >= 0 " style="color: #d19a0e" class="bi bi-star-fill"></i>
           <i v-if="mart.star >= 1 " style="color: #d19a0e" class="bi bi-star-fill"></i>
           <i v-if="mart.star >= 2 " style="color: #d19a0e" class="bi bi-star-fill"></i>
           <i v-if="mart.star >= 3 " style="color: #d19a0e" class="bi bi-star-fill"></i>
         </div>
       </div>
       <div>
        <h5 class="text-xl">{{mart.title}}</h5>
        <p>{{mart.qemat}} تومان</p>
       </div>
     </div>
   </div>
   <div class="more flex flex-col  justify-between">
     <div class="number flex">
       <button @click="mart.number++" class="m-2">+</button>
       <h5 class="m-2">{{mart.number}}</h5>
       <button v-if="mart.number > 1" @click="mart.number--" class="m-2">-</button>
       <button v-if="mart.number == 1"  class="m-2">-</button>
     </div>
     <div class="flex items-center bay">
        <i @click="mart.like = !mart.like" v-if="mart.like == false" class="bi bi-heart m-1 text-2xl mt-2"></i>
       <i @click="mart.like = !mart.like" v-if="mart.like == true" class="bi bi-heart-fill m-1 text-2xl mt-2" style="color: #ef3a4f"></i>
       <button @click="bay(mart.title)" class="button is-danger is-small w-full">خرید</button>
     </div>
   </div>
 </div>
    </div>
  <Footer class="mt-12"/>
</div>
</template>

<script>
import Footer from "~/components/footer";
import swal from "sweetalert";
export default {
  name: "index",
  components: {Footer},
  data(){
    return{
      marts:null,
      len:null,
    }
  },
  mounted() {
    this.marts  = JSON.parse(localStorage.getItem('marts'))
    this.len = JSON.parse(localStorage.getItem('marts')).length
  },
  methods:{
    bay(title){
      let marts = JSON.parse(localStorage.getItem('marts'))
      let mainTodoIndex = marts.findIndex(function (mart) {
        return mart.title === title
    })
      marts.splice(mainTodoIndex, 1)
      localStorage.setItem('marts', JSON.stringify(marts))
      swal({
           title: 'موفق' ,
           text:  ' خرید موفق!',
           icon: 'success' ,
           button: 'تایید'
         })
      this.marts  = JSON.parse(localStorage.getItem('marts'))
      this.len = JSON.parse(localStorage.getItem('marts')).length
    }
  }
}
</script>
<style scoped>
.marts{
  background-color: #ffffff;
}
.mart{
  width: 98%;
  height: 130px;
  background-color: #ffffff;
  border-bottom: 1px solid #616060;
  padding: 10px;
  margin: 15px;
}
.header{
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 2px solid black;
}
.header h1{
  font-size: 25px;
}
.content{
  width: 100%;
  min-height: 80vh;
}
.more{
  height: 100%;
}
.number{
  background-color: white;
}
h4{
  color: white;
  background-color: #ef3a4f;
  padding: 5px;
  margin: 10px;
  border-radius: 50px;
}
.stars i{
  font-size: 15px;
}
.bay i:hover{
  cursor: pointer;
}
@media only screen and (max-width: 540px){
    .mart h5{
      font-size: 15px;
    }
  .none-product h1{
    font-size: 20px;
  }
}
@media only screen and (max-width: 400px){
    .mart h1{
      font-size: 12px;
    }
  .mart p{
    font-size: 8px;
  }
  .more{
    width: 25%;
  }
  .none-product h1{
    font-size: 13px;
  }
}
</style>
