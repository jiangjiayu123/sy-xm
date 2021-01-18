<template>
      <div class="card-box">
          <div class="description-view">
              <div class="tab-header">
                  <a class="flex" :class="{active:componentName=='introduce'}" @click="bottomBarClick('introduce')">商品介绍</a>
                  <a class="flex" :class="{active:componentName=='parameter'}" @click="bottomBarClick('parameter')">规格参数</a>
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
import introduce from "../components/introduce.vue"
import parameter from "../components/parameter.vue"
export default {
    components:{
        "introduce":introduce,
        "parameter":parameter
    },
    data(){
        return{
            componentName:"introduce"
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
    .description-view{
        position: relative;
    }
    .tab-header{
        height: .68rem;
        position: sticky;
        top: .9rem;
        width: 100%;
        z-index: 98;
        background: #fff;
        display: flex;
    }
    .active{
        color: #ff6700;
        position: relative;
        
    }
    .flex{
        display: block;
        font-size: .24rem;
        width: 100%;
    }
</style>