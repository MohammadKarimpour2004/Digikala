<template>
  <div class="app flex flex-col justify-between">
   <div class="headerSite">
     <headersite/>
   </div>
    <div class="content flex flex-col items-center ">
      <div class="title flex justify-center  w-full ">
        <VueSlickCarousel class="VueSlickCarousel" :arrows="false"  :autoplay="true" :speed="900"  :autoplaySpeed="5000" :dots="false">
          <nuxt-link to="./market"><img src="../assets/images/xorake.jpg" alt="خوراکی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/sanate.jpg" alt="صنعتی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/xange.jpg" alt="خانگی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/janbe2.jpg" alt="جانبی"></nuxt-link>
        </VueSlickCarousel>
      </div>
      <div class="items w-full flex justify-evenly mb-4">
        <div v-for="item in items" class="flex flex-col items-center imgitem ">
          <a href="#"><img :src="require(`./../assets/images/${item.number}.png`)"  alt="img" width="55"></a>
          <p class="text-s">{{item.text}}</p>
        </div>
      </div>
      <div class="images flex justify-center">
        <img src="../assets/images/profile.jpg" style="width: 65%;" class=" m-3 rounded-lg" alt="">
        <img src="../assets/images/car.jpg" style="width: 30%" class=" b m-3 rounded-lg" alt="">
      </div>

      <div class="grups">
          <br>
          <h1>سایت ما با تخبیفات و جشنواره های فراوان در خدمت مشتریان خود میباشد</h1>
          <br>
        <img src="../assets/images/tt.jpg" style="width: 100%;" alt="">
          <br>
          <grups title="جانبی" text="انواع لوزم جانبی با کیفیت را از ما با بهترین قیمت ممکن بخرید! لوازم های جانبی ما تمامی از برند های اورجینال و اصلی تهیه میشوند تا مشتریان بتوانند با خیال راحت از ما خرید بکنند." img="janbe" addres="janbe"/>
          <br>
          <br>
          <grups title="خانگی" text="اسایش را در خانه با محصولات ما افزایش دهید!  لوازم های جانبی ما تمامی از برند های اورجینال و اصلی تهیه میشوند تا مشتریان بتوانند با خیال راحت از ما خرید بکنند." img="xange" addres="xange"/>
          <br>
          <br>
          <grups title="صنعتی" text="کار خود را توسعه دهید با لوارم اصلی از سایت ما!  لوازم های جانبی ما تمامی از برند های اورجینال و اصلی تهیه میشوند تا مشتریان بتوانند با خیال راحت از ما خرید بکنند." img="sanate" addres="sanate"/>
          <br>
          <br>
          <grups title="خوراکی" text="خوراکی های سالم و خوشمزه و تازه را از این سایت تهیه کنید تا پرورش عالی را تجربه کنید!  لوازم های جانبی ما تمامی از برند های اورجینال و اصلی تهیه میشوند تا مشتریان بتوانند با خیال راحت از ما خرید بکنند." img="xorake" addres="xorake"/>
      </div>
      <br>
      <div class="imgs flex justify-center items-center">
        <img src="../assets/images/img1.jpg" alt="">
        <img src="../assets/images/img2.jpg" alt="">
        <img src="../assets/images/img3.jpg" alt="">
        <img src="../assets/images/img4.jpg" alt="">
      </div>
      <div class="apps flex justify-between items-center mt-12 p-4">
        <div class="flex items-center log">
        <img src="../assets/images/footerLogo.png" class="logo"  alt="">
          <h3 class="m-0 mr-2" style="color: white">دانلود اپلیکیشن</h3>
          </div>
        <div class="flex download">
          <img src="https://www.digikala.com/statics/img/svg/appStores/google-play.svg" class="m-2" alt="">
          <img src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg" class="m-2" alt="">
          <img src="https://www.digikala.com/statics/img/svg/appStores/myket.svg" class="m-2" alt="">
          <img src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" class="m-2" alt="">
        </div>
      </div>
    </div>
    <div class="footerSite"><footersite/></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import headersite from "~/components/header";
import grups from "~/components/grups";
import footersite from "~/components/footer";

export default {
  name: 'home',
  components:{headersite,grups,footersite,VueSlickCarousel},
  data(){
    return{
      items:[
        {text:'دیجی کالا جت',number:1},
        {text:'دیجی استایل',number:2},
        {text:'دیجی پی',number:3},
        {text:'دیجی کالا مهر',number:4},
        {text:'ماموریت ها',number:5},
        {text:'دیجی پلاس',number:6},
        {text:'دیجی کلاب',number:7},
        {text:'پیندو',number:8}

      ]
    }
  }

}
</script>
<style scoped>
.app{
  width: 100%; height: 100vh;
}
.VueSlickCarousel{
  width: 100%;
}
.images{
  background-color: red;
  padding: 15px;
}

.imgs img{
  width: 22%;
  border-radius: 10px;
  margin: 10px;

}
.apps{
  background-color: #3c4b6d;
  width: 97%;
  border-radius: 10px;
}
.download img{
  width: 25%;
}
@media only screen and (max-width: 890px){
    .apps h3{
      font-size: 12px;
    }


}

@media only screen and (max-width: 824px){

  .items p{
    font-size: 10px;
  }
  .imgitem{
    width: 40px;
  }
  .imgs{
  flex-wrap: wrap;
  width: 100%;
}
  .imgs img{
    width: 45%;
  }
  .log{
    display: none;

  }
  .download{
    width: 100%;
    justify-content: space-between;

  }
  .download img{
    width: 45%;margin: 20px;

  }
}
@media only screen and (max-width: 690px){
    .apps{
      flex-direction: column;
    }
   .download {

     flex-wrap: wrap;
   }
  .log{
    display:flex;
    margin-bottom: 10px;
  }
  .log h3{
    font-size: 20px;
  }


  }

@media only screen and (max-width: 444px){
	.items{
    flex-wrap: wrap;

  }
  .imgitem{
    width: 60px;
    margin: 15px;
  }

}
@media only screen and (max-width: 400px){
	  .imgs img{
      width: 95%;
    }

  }
@media only screen and (max-width: 362px){
   .download img{
     width: 100%;
   }
   }
</style>
