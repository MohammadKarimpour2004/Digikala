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
 <div class="mart flex justify-between items-center" v-for="mart in marts">
   <div class="name flex flex-col justify-between h-full">
     <div class="flex">
       <div class="flex flex-col items-center">
     <img :src="require(`../../assets/product-img/${mart.img}.jpg`)" width="95" class="ml-3" alt="">
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
        <h1 class="text-xl">{{mart.title}}</h1>
        <p>{{mart.qemat}} تومان</p>
       </div>
     </div>

   </div>
   <div class="more flex flex-col  justify-between">
     <div class="number flex">
       <button @click="mart.number++" class="m-2">+</button>
       <h1 class="m-2">{{mart.number}}</h1>
       <button v-if="mart.number > 1" @click="mart.number--" class="m-2">-</button>
       <button v-if="mart.number == 1"  class="m-2">-</button>

       <i @click="mart.like = !mart.like" v-if="mart.like == false" class="bi bi-heart m-1"></i>
       <i @click="mart.like = !mart.like" v-if="mart.like == true" class="bi bi-heart-fill m-1" style="color: #ef3a4f"></i>
     </div>
     <button @click="bay(mart.title)" class="button is-danger is-small">خرید</button>
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
    //get items in localstorage
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
  font-size: 30px;
}
.more{
  height: 100%;
}
h4{
  color: white;
  background-color: #ef3a4f;
  padding: 5px;
  margin: 10px;
  border-radius: 50px;
}
i{
  margin-right: 10px;
}
.stars i{
  margin: 0px;
  font-size: 15px;
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
  .more{
    width: 30%;
  }
}
</style>
