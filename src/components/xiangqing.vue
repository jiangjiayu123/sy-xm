<template>
      <div class="card-box">
          <div class="description-view">
              <div class="tab-header" v-show="play">
                  <a class="flex" :class="{active:componentName=='introduce'}" @click="bottomBarClick('introduce')">商品介绍</a>
                  <a class="flex" :class="{active:componentName=='parameter'}" @click="bottomBarClick('parameter')">规格参数</a>
              </div>
              <div class="tab-header1" v-show="player">
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
            componentName:"introduce",
            play:true,
            player:false,
            scroll:"",
        }
    },
    mounted(){
        window.addEventListener('scroll', this.menu)
    },
    methods:{
        bottomBarClick(componentName){
            this.componentName=componentName
        },
        menu(){
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        }
    },
    watch:{
        scroll(newVal){
            if(newVal>=2150&&newVal<=13053){
                this.play=false;
                this.player=true;
            }
            else{
                this.play=true;
                this.player=false;
            }
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
    .tab-header1{
        height: .68rem;
        position: fixed;
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