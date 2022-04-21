<template>
<div class="grup flex  flex-row-reverse mt-12 p-3 rounded-lg mr-3">
  <img @click="link" :src="require(`.././assets/images/${img}-small.jpg`)" alt="" class="m-4 rounded-lg">
  <div class="text">
    <h1 @click="link">{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</div>
</template>

<script>
export default {
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
  width: 95%;
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
@media only screen and (max-width: 660px){
    img{
      width: 300px;
    }
}
@media only screen and (max-width: 540px){
    .grup{
      flex-direction: column;
      align-items: center;
    }
    img{
      width: 100%;
    }
}

</style>
