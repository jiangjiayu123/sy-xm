<template>
      <div class="card-box">
          <div class="tab-header">
              <div class="tab-header-inner">
                  <a class="flex" :class="{active:componentName=='recommend'}" @click="bottomBarClick('recommend')">为你推荐</a>
                  <a class="flex" :class="{active:componentName=='parts'}" @click="bottomBarClick('parts')">热门配件</a>
              </div>
          </div>
          <div class="tab-view">
              <keep-alive>
                  <component :is="componentName"></component>
              </keep-alive>
          </div>
      </div>
</template>

<script>
import recommend from "../components/recommend.vue"
import parts from "../components/parts.vue"
export default {
    components:{
        "recommend":recommend,
        "parts":parts
    },
    data(){
        return{
            componentName:"recommend"
        }
    },
    methods:{
        bottomBarClick(componentName){
            this.componentName=componentName
        }
    }
}
</script>

<style scoped>
    .card-box{
        padding: 0 .32rem .4rem;
    }
    .tab-header{
        margin-bottom: .2rem;
        height: .72rem;
    }
    .tab-header-inner{
        height: .8rem;
        display: flex;
    }
    .active{
        color: #ff6700;
        position: relative;
        border-bottom:1px solid  #ff6700 ;
        
    }
    .flex{
        display: block;
        font-size: .24rem;
        font-weight: 700;
        width: 100%;
    }
</style>