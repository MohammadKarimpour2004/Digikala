<template>
<div class="grup flex mb-12 flex-row-reverse   rounded-lg ">
  <!-- image -->
   <img @click="link" :src="require(`.././assets/images/grup/grup${img}.jpg`)" alt="" class="m-4 rounded-lg">
  <!-- text -->
  <div class="text">
    <h1 @click="link">{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</div>
</template>
<script>
export default {
  //get props
  name: "grups",
  props:['title','text','img'],
  methods:{
    link(){
      this.$router.push('/market')
    }
  }
}
</script>
<style scoped>
.grup{
  background-color: #faf7f7;
  width: 97%;
}
@media only screen and (max-width: 1124px){
    img{
      width: 585px;
    }
}
@media only screen and (max-width: 860px){
    img{
      width: 400px;
    }
}
@media only screen and (max-width: 824px){
    .grup{
      flex-direction: column;
      align-items: center;
    }
    img{
      width: 100%;
      margin: 0px;
    }
    h1{
      font-size: 20px;
    }
    p{
      font-size: 15px;
    }
}
@media only screen and (max-width: 400px){
    h1{
      font-size: 15px;
    }
    p{
      font-size: 11px;
    }
}
</style>
