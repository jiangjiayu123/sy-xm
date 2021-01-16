<template>
  <swiper :options="swiperOption" class="swiper-container swiper-pagination1"  ref="mySwiper">
                            <!-- 添加的图片,src中存放图片路径 -->
              <swiper-slide><img class="banner-img" src="../assets/01.jpg" /> </swiper-slide>
              <swiper-slide><img class="banner-img" src="../assets/02.jpg"/> </swiper-slide>
                            <!-- 控制选项 -->
              <div class="swiper-pagination"  slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
  require('swiper/swiper-bundle.css');
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination1',
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: false,
          spaceBetween: 0,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //自动播放的相关设置
          autoplay:{
            delay:2000,
            //设置触碰后是否停止自动播放
            disableOnInteraction:false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          //循环
          loop:true
        }
      }
    },
    //定义swiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      this.swiper.slideTo(0, 0, false);
    }
 
  }
</script>