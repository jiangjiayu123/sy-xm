<template>
    <div class="page home-container">
         <keep-alive>
            <component :is="componentName"></component>
         </keep-alive>
         <div class="bottom-bar">
            <div class="box-flex">
                <div class="flex">
                  <i class="image-icon icon-home"></i>
                  <span>首页</span>
                </div>
                <div class="flex">
                  <i class="image-icon"></i>
                  <span>首页</span>
                </div>
                <div class="flex">
                  <i class="image-icon"></i>
                  <span>首页</span>
                </div>
                <div class="flex">
                  <i class="image-icon"></i>
                  <span>首页</span>
                </div>
                <div class="flex">
                  <i class="image-icon"></i>
                  <span>首页</span>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import FirstTab from "../components/FirstTab.vue"
export default {
  data(){
      return{
        componentName:"firsttab"
      }
  },
  components:{
    "firsttab":FirstTab
  }
}
</script>
<style scoped>
  .bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
  }
  .box-flex{
    height: 52px;
    display: flex;
  }
</style>