<template>
    
  <div class="abcd">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in lunlist" :key="item.id">              
            <div class="swiper-slide-video" id="swiper-slide-video">
                  <img :src="item.img" alt="" class="banner-img" />       
            </div>
          </swiper-slide>        
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

      },
      lunlist: [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce53624682c4fd432deda71daf5b21c5.jpg",
          id: 0,
        },
        {
          img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19566b7da2dffb8ec89ffb937b72e343.jpg",
          id: 1,
        },
        {
          img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59eb101ed14a0ad3ba36c92ee6310fa3.jpg",
          id: 2,
        },
        {
          img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee8d1a9ec1bf778864b00dfd37700d9.jpg",
          id: 3,
        },
        {
          img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f16af22a1fac0a6351ebbeb46a45ace.jpg",
          id:4
        },
        {
          img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a7927e953f393a8e6b7f4032a994b76.jpg",
          id:5
        },
        {
          img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e65ca36170b7cc5376cb482f275381ef.jpg",
          id:6
        }
      ],
    };
  },
};
</script>

<style scoped>
.swiper-slide-video>img{
 width: 7.2rem;
 height:7.92rem;
}


</style>