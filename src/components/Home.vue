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
    </div>
</template>

<script>
import FirstTab from "../components/FirstTab.vue";
import Secondtab from "../components/SecondTab.vue";
import FourthTab from "../components/FourthTab.vue";
import MeTab from "../components/MeTab.vue";
export default {
    data() {
        return {
            componentName:"firsttab"
        };
    },
    components: {
        "firsttab": FirstTab,
        "secondtab": Secondtab,
        "fourthtab":FourthTab,
        "metab":MeTab
    },
    methods:{
      bottomBarClick(componentName){
        this.componentName=componentName;
      }
    }
};
</script>

<style scoped>
.bottom-bar {
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
    font-size: .22rem;
    text-align: center;
    display: block;
    position: relative;
    height: 52px;

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
</style>