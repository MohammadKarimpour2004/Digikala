<template>
<div class="Products flex justify-between flex-col mr-12 p-1 rounded-lg">
  <div class="img">
    <img :src="require(`../assets/product-img/${img}.jpg`)" alt="Products" class=" rounded-lg">
  </div>
  <div class="titleAndtext">
    <div class="w-full flex justify-start flex-col">
    <p class="text-white">{{title}}</p>
    <p class="text-white">{{text}}</p>
    </div>
    <div class="w-full flex justify-end flex-col">
    <button @click="add" class="button is-warning is-light flex justify-between"> {{ qemat }}<span><i class="bi bi-cart2"></i></span> </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Products",
 props:['img','title','text','qemat','off'],
  data(){
    return{
      marts : []
    }
  },
  mounted() {
    if (localStorage.getItem('marts')){
      this.marts =JSON.parse(localStorage.getItem('marts'))
    }else {
     // localStorage.setItem('marts',new Array())
    }
  },
  methods:{

    add(){
     this.marts = JSON.parse(localStorage.getItem('marts'))
      let  mart = {
       title:this.title,
       text : this.text,
       img: this.img,
       qemat: this.qemat,
       off : this.off
     }
     this.marts.push(mart)
     localStorage.setItem('marts',JSON.stringify(this.marts))
      console.log(this.marts)
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
