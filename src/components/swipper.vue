<template>
    
  <div class="abcd">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in lunlist" :key="item.id">
              
        <div class="swiper-slide-video" id="swiper-slide-video">
                  <img :src="item.img" alt="" class="banner-img" />       
        </div>
            </swiper-slide>
          
      <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-scrollar" slot="scrollbar"></div> -->
        </swiper>      
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Swiper2, { Navigation, Pagination, Autoplay } from "swiper";
Swiper2.use([Navigation, Pagination, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 3000,
        },
      },
      lunlist: [
        {
          img: require("../assets/01.jpg"),
          id: 0,
        },
        {
          img: require("../assets/02.jpg"),
          id: 1,
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.swiper-slide-video>img{
 width: 100%;
 height:3.6rem;
}


</style>