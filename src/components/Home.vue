<template>
    <div class="page home-container">
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <div class="bottom-bar">
            <div class="box-flex">
                <div class="flex" @click="bottomBarClick('firsttab')">
                  <img v-if="componentName=='firsttab'" src="../assets/01.png" alt="">
                  <img v-else src="../assets/02.png" alt="">
                  <div class="bottom-title" :class="{active:componentName=='firsttab'}">首页</div>
                </div>
                <div class="flex" @click="bottomBarClick('secondtab')">
                  <img v-if="componentName=='secondtab'" src="../assets/03.png" alt="">
                  <img v-else src="../assets/04.png" alt="">
                  <div class="bottom-title" :class="{active:componentName=='secondtab'}">分类</div>
                </div>
                <div class="flex">
                  <a href="https://m.mi.com/discover">
                    <img v-if="componentName=='thirdtab'" src="../assets/05.png" alt="">
                    <img v-else src="../assets/06.png" alt="">
                    <div class="bottom-title" :class="{active:componentName=='thirdtab'}">星球</div>
                  </a>                  
                </div>
                <div class="flex" @click="bottomBarClick('fourthtab')">
                  <span class="caritem1" v-show="count">{{count}}</span>
                  <img v-if="componentName=='fourthtab'" src="../assets/07.png" alt="">
                  <img v-else src="../assets/08.png" alt="">
                  <div class="bottom-title" :class="{active:componentName=='fourthtab'}">购物车</div>
                </div>
                <div class="flex" @click="bottomBarClick('metab')">
                  <img v-if="componentName=='metab'" src="../assets/09.png" alt="">
                  <img v-else src="../assets/10.png" alt="">
                  <div class="bottom-title" :class="{active:componentName=='metab'}">我的</div>
                </div>
            </div>
        </div>
         <!-- 顶部跑马灯效果 -->
        <transition name="fade">
              <div class="progress" v-if="showchuxian"></div>
        </transition>
    </div>
      
</template>

<script>
import FirstTab from "../components/FirstTab.vue";
import Secondtab from "../components/Classify.vue";
import FourthTab from "../components/shopping.vue";
import MeTab from "../components/MeTab.vue";
export default {
    data(){
      return {
          showchuxian:false
      }
    },
    computed: {
        componentName(){
            return this.$store.state.componentName;
        },
        count(){
          return this.$store.state.count;
        },
        // showchuxian(){
        //   return this.$store.state.showchuxian;
        // }
      
    },
    components: {
        "firsttab": FirstTab,
        "secondtab": Secondtab,
        "fourthtab":FourthTab,
        "metab":MeTab
    },
    methods:{
      bottomBarClick(name){
        this.showchuxian = !this.showchuxian;
        this.$store.commit("bottomBarClick",name)
      }
    },
    watch:{
        showchuxian(newVal){
          console.log("哈哈哈哈")
          let that = this;
            if(newVal ==true){
              setTimeout(function(){
                  that.showchuxian=false
              },2000)
            }
        }
    }
};
</script>
<style >
  .fade-enter-active{
            transition:all 2s;
  }
  .fade-enter{
            transform:translateX(-100%);
            opacity: 0;
  }
  .bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
}
.box-flex {
    height: 52px;
    display: flex;
    justify-content: space-around;
  }
  .flex{
    text-align: center;
    display: block;
    position: relative;
    margin: auto 0;
    font-size: .22rem;
  }
  .flex img{
    width: .4rem;
    height: .4rem;
  }
  .bottom-title{
    font-size: 10px;
    color: #333;
  }
  .active{
    color: #ff6700;
  }
  .caritem1{
    position: absolute;
    min-width: .25rem;
    line-height: .25rem;
    height: .25rem;
    box-sizing: border-box;
    padding: 0 .05rem;
    font-size: .18rem;
    overflow: hidden;
    text-align: center;
    border-radius: .28rem;
    background: #ed4d41;
    color: #fff;
    top: 0;
    left: 50%;
    -webkit-transform: translate3d(.1rem,-20%,0);
    transform: translate3d(.1rem,-20%,0);
    font-style: normal;
  }
  .progress{
    width: 100%;
    height: 2px;
    background-color: rgb(255, 202, 43);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
  }
</style>