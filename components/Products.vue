<template>
<div class="Products flex justify-between flex-col mr-12 p-1 rounded-lg">
  <div class="off flex items-center justify-center font-bold text-white" v-if="off != '' ">{{ off }}</div>
  <div class="img">
    <img :src="require(`../assets/product-img/${img}.jpg`)" alt="Products" class=" rounded-lg">
  </div>
  <div class="titleAndtext">
    <div class="w-full flex justify-start flex-col">
    <p class="text-white">{{title}}</p>
    <p class="text-white">{{text}}</p>
    </div>
    <div class="w-full flex justify-end flex-col">
    <button class="button is-warning is-light flex justify-between"> {{ qemat }}<span><i class="bi bi-cart2"></i></span> </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Products",
 props:['img','title','text','qemat','off']

}
</script>

<style scoped>
.Products{
  width: 230px;height: 350px;
  background-color:rgb(241,70,104);
  border: 2px solid rgb(241,70,104);
}
.off{
  width: 30px;height: 30px;
  margin: 5px;
  border-radius: 50%;
  font-size: 11px;
  position: absolute;
  background-color:rgb(241,70,104);
}
</style>
