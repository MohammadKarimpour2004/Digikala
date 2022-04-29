<template>
  <div class="app flex flex-col justify-between">
    <!-- header component -->
    <div class="headerSite">
      <headersite/>
    </div>
    <!-- content page-->
    <div class="content flex flex-col items-center ">
      <!-- images -->
      <div class="title flex justify-center  w-full ">
        <VueSlickCarousel class="VueSlickCarousel" :arrows="false"  :autoplay="true" :speed="900"  :autoplaySpeed="5000" :dots="false">
          <nuxt-link to="./market"><img src="../assets/images/xorake2.jpg" alt="خوراکی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/sanate2.jpg" alt="صنعتی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/title1.jpg" alt="جانبی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/xange.jpg" alt="خانگی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/title2.jpg" alt="جانبی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/title3.gif" alt="جانبی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/janbe.jpg" alt="جانبی"></nuxt-link>
          <nuxt-link to="./market"><img src="../assets/images/title4.jpg" alt="جانبی"></nuxt-link>
        </VueSlickCarousel>
      </div>
      <!-- items for option in site -->
      <div class="items w-full flex justify-evenly mt-12 mb-12">
        <div v-for="item in items" class="flex flex-col items-center imgitem ">
          <a href="#"><img :src="require(`./../assets/images/${item.number}.png`)"  alt="img" width="55"></a>
          <p class="text-s">{{item.text}}</p>
        </div>
      </div>
      <!-- 2 image-->
      <div class="images flex justify-center">
        <img src="../assets/images/profile.jpg" style="width: 65%;" class=" m-3 rounded-lg" alt="">
        <img src="../assets/images/car.jpg" style="width: 30%" class=" b m-3 rounded-lg" alt="">
      </div>
      <!-- off text to center -->
      <h3 class="text-title mt-6"><i class="bi bi-percent text-red-600 font-bold"></i>سایت ما با تخفیفات و جشنواره های فراوان در خدمت مشتریان خود میباشد<i class="bi bi-percent text-red-600 font-bold"></i></h3>
       <!-- 4 products -->
       <div style="background-color: #941b80; border: 5px solid #941b80" class="overproducts flex justify-between mt-12 mb-12">
        <div class="flex flex-col items-center justify-center logoProduct">
          <img src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg" width="100"  alt="">
          <img src="../assets/images/plus-widget.png" width="100" alt="">
          <button  class="button is-white is-small ">عضویت<i class="bi bi-chevron-compact-left"></i></button>
        </div>
        <div class="product flex justify-between">
           <div v-for="item in overItems" class="flex flex-col items-center">
             <img :src="require(`../assets/product-img/${item.img}.jpg`)" style="width: 100%;" alt="">
             <h4>{{item.qemat}} تومان </h4>
           </div>
        </div>
      </div>

      <!-- market grup -->
      <div class="grups">
          <br>
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
      <!-- 4 image -->
      <div class="imgs flex justify-around items-center">
        <img src="../assets/images/img1.jpg" alt="">
        <img src="../assets/images/img2.jpg" alt="">
        <img src="../assets/images/img3.jpg" alt="">
        <img src="../assets/images/img4.jpg" alt="">
      </div>
      <!-- 4 products -->
       <div class="overproducts flex justify-between mt-12 mb-12">
        <div class="flex flex-col items-center justify-center logoProduct">
          <img src="https://www.digikala.com/statics/img/svg/amazing-typo.svg" width="100"  alt="">
          <img src="../assets/images/General.png" width="100" alt="">
          <h4 style="color: white">مشاهده همه<i class="bi bi-chevron-compact-left"></i></h4>
        </div>
        <div class="product flex justify-between">
           <div v-for="item in overItems2"  class="flex flex-col items-center">
             <img :src="require(`../assets/product-img/${item.img}.jpg`)" style="width: 100%;" alt="">
             <h4>{{item.qemat}} تومان </h4>
           </div>
        </div>
      </div>
      <!-- download apps -->
      <div class="apps flex justify-between items-center mt-12 p-4 mb-12">
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
      <img src="../assets/images/473fd1fcad84d953715de963e0acc2c23b9b7bc8_1650898678.jpg" class="rounded-md" style="width: 97%;" alt="">
    </div>
    <!-- footer site -->
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
      // items for option site
      items:[
        {text:'دیجی کالا جت',number:1},
        {text:'دیجی استایل',number:2},
        {text:'دیجی پی',number:3},
        {text:'دیجی کالا مهر',number:4},
        {text:'ماموریت ها',number:5},
        {text:'دیجی پلاس',number:6},
        {text:'دیجی کلاب',number:7},
        {text:'پیندو',number:8}
      ],
      overItems:[
        {img:39,qemat:'570,000'},
        {img:40,qemat:'299,000'},
        {img:46,qemat:'370,000'},
        {img:48,qemat:'899,000'}
      ],
      overItems2:[
        {img:6,qemat:'570,000'},
        {img:42,qemat:'299,000'},
        {img:47,qemat:'370,000'},
        {img:44,qemat:'899,000'}
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
  background-color: #ef3a4f;
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
.overproducts{
  width: 97%;
  height: 350px;
  background-color: #ef3a4f;
  border-radius: 10px;
  border: 5px solid #ef3a4f;
}
.logoProduct{
  width: 20%;
}
.product{
  width: 80%;height: 100%;
  background-color: #ffffff;
  border-radius: 10px 0px 0px 10px;
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
  .imgitem p{
    font-size: 5px;
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
  .text-title{
    font-size: 20px;
  }
  .overproducts{
    flex-direction: column;
  }
  .product{
    width: 100%;
  }
  .logoProduct{
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  .product h4{
  font-size: 13px;
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
  .text-title{
    font-size: 15px;
  }
  .overproducts{
    height: 299px;
  }
}
@media only screen and (max-width: 500px){
	.overproducts{
    height: 287px;
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
  .imgitem p{
    font-size: 10px;
  }
  .text-title{
    font-size: 11px;
  }

}
@media only screen and (max-width: 400px){
	  .imgs img{
      width: 95%;
    }
  .overproducts{
    height: 228px;
  }
}
@media only screen and (max-width: 362px){
   .download img{
     width: 100%;
   }
  .overproducts{
    height: 200px;
  }
  .product h4{
  font-size: 10px;
 }
  .text-title{
    font-size: 8px;
  }
}
</style>
