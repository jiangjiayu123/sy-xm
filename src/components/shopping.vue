<template>
<div class="app-shell app-shell-bottom-navigation">
    <header class="app-header-wrapper app-shell-header">
      <div class="app-header-left">
        <a><img src="../assets/return.png" alt="" /></a>
      </div>
      <div class="app-header-middle">
        <div class="app-header-title" @click="entrymicar">购物车</div>
      </div>
      <div class="app-header-right">
        <a><img src="../assets/search.png" alt="" /></a>
      </div>
    </header>
    <div class="page-wrap">
        <div class="bodys">       
            <div class="nologin" @click="gotodenglu">
                <a>
                <span>登录后享受更多优惠</span>
                <em>去登录<img src="../assets/right.png" alt=""
                /></em>
                </a>
            </div>
          
                    <div class="noitems">
                        <a href="">
                            <span>购物车还是空的</span>
                            <em>去逛逛</em>
                        </a>
                    </div>

                    <!-- 猜你喜欢 -->
                    <div class="recommend-box space-top" v-for="item in list" :key="item.id">
                        <div class="recommend-top-img" >
                            <img :src="item.img" alt="">
                        </div>
                        <div class="goods-info" >
                            <div class="goods-name no-wrap">{{ item.name }}</div>
                            <div class="goods-price price">{{ item.price }}</div>
                        </div>
                </div>
            </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    id:1,
                    name:"黑鲨游戏 Type-C 耳机",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bdb3d77094854460bb36494ecf8720cc.jpg?thumb=1&w=360&h=360",
                    price:"99"
                },
                {
                    id:2,
                    name:"黑鲨游戏 Type-C 耳机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
                    price:"99"
                },
            ],
            // appearDe:false
        }
    },
    computed:{
        appearDe(){
            return this.$store.state.appearDe
        }
    },
    methods:{
        gotodenglu(){
             this.$router.push({ path: "denglu" });
        },
        // !!!!!测试小米购物车
        entrymicar(){
            this.$router.push({ path: "micart" });
        }
        
    }
}
</script>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.app-shell .app-shell-header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
}
.app-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-wrapper  {
  display: flex;
  align-items: center;
}
.app-header-wrapper a {
  display: block;
  width: 0.6rem;
  margin: 0 0.2rem;
}
.app-header-wrapper img {
  width: 0.5rem;
  padding-bottom: 0.15rem;
}
.app-header-middle {
  font-size: 0.3rem;
  min-width: 0;
}
.app-header-right img {
  width: 0.7rem;
}
.bodys{
    padding-bottom: 52px;
    position: absolute;
    top: .9rem;
    overflow: hidden;
    left: 0;
    right: 0;
    background: #fff;
}
.nologin > a {
  line-height: 1.04rem;
  padding: 0 0.56rem 0 0.32rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.54);
}
.nologin > a > span {
  font-size: 0.32rem;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  text-align: left;
}
.nologin > a em {
  font-style: normal;
  font-size: 0.24rem;
  text-align: right;
}
em img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.1rem;
}
.noitems {
  background: #ebebeb;
  padding: 0.2rem;
}
.noitems > a {
  font-size: 0.24rem;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
}
.noitems > a span {
  display: inline-block;
  line-height: 0.8rem;
  background: url("https://m.mi.com/static/img/cartnull.daaf7926f8.png")
    no-repeat 0;
  background-size: auto 100%;
  padding: 0 0.16rem 0 0.96rem;
  color: rgba(0, 0, 0, 0.27);
}
.noitems > a em {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.24rem;
  color: rgba(0, 0, 0, 0.87);
  font-style: normal;
  margin-top: 0.1rem;
}
.recommend-box {
  background: #fff;
  text-align: left;
}
.space-top {
  padding-bottom: 0.9rem;
}
.recommend-top-img {
  width: 7.2rem;
  height: 1.25rem;
}
.recommend-top-img > img {
  height: 1.2rem;
}
.recommend-list {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
}
.goods-item {
  flex: 0 1 50%;
  overflow: hidden;
}
.goods-item a {
  display: block;
}
.goods-item .goods-img-box {
  position: relative;
}
.goods-img-box > img {
  display: block;
  width: 100%;
  min-height: 3.56rem;
}
.goods-info {
  padding: 0.18rem 0.26rem 0.22rem;
}
.goods-info .goods-name {
  font-size: 0.28rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nowrap {
  white-space: nowrap;
}
.goods-info .goods-price {
  font-size: 0.32rem;
  color: #ff6700;
  margin-top: 0.1rem;
}
.price {
  position: relative;
  padding-left: 0.5em;
  line-height: 1em;
}
</style>