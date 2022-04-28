<template>
<div class="Products flex justify-between flex-col mr-12 p-1 rounded-lg">
  <!-- image -->
  <div class="img">
    <img :src="require(`../assets/product-img/${img}.jpg`)" alt="Products" class=" rounded-lg">
  </div>
  <!-- title and text -->
  <div class="titleAndtext">
    <div class="w-full flex justify-start flex-col">
      <p class="text-white">{{title}}</p>
      <p class="text-white">{{text}}</p>
    </div>
    <!-- button for add to mart page ...-->
    <div class="w-full flex justify-end flex-col">
      <button @click="add" class="button is-warning is-light flex justify-between"> {{ qemat }}<span><i class="bi bi-cart2"></i></span> </button>
    </div>
  </div>
</div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "Products",
  props:['img','title','text','qemat','off'],
  methods:{
    add(){
      if (localStorage.getItem('login')){
        // get marts object
         let marts = JSON.parse(localStorage.getItem('marts'))
        // create object for push in marts
         let mart = {
           title: this.title,
           text: this.text,
           img: this.img,
           qemat: this.qemat,
           off: this.off,
           number:1
         }
         // push object in marts
         marts.push(mart)
        // set localstorage
         localStorage.setItem('marts', JSON.stringify(marts))
         swal({
           title: 'موفق' ,
           text:  `${this.title} به سبد خرید اضافه شد!`,
           icon: 'success' ,
           button: 'تایید'
         })
      }else{
         swal({
           title: 'خطا!' ,
           text: 'شما هنوز ثبت و نام نکردید!' ,
           icon: 'error' ,
           button: 'تایید'
         })
         setTimeout(() => {
             this.$router.push('/user/SignIn')
         },2000)
      }
    }
  }
}
</script>
<style scoped>
.Products{
  width: 230px;height: 350px;
  background-color:rgb(241,70,104);
  border: 2px solid rgb(241,70,104);
}
</style>
