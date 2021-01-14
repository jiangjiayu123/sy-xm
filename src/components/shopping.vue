<template>
    <div class="app-shell app-shell-bottom-navigation">
        <header class="app-header-wrapper app-shell-header">
            <div class="app-header-left">
                <a><img src="../assets/return.png" alt=""></a>
            </div>
            <div class="app-header-middle">
                <div class="app-header-title">购物车</div>
            </div>
            <div class="app-header-right">
                <a><img src="../assets/search.png" alt=""></a>
            </div>
        </header>
        <div class="app-view-wrapper">
            <div class="container fluid app-view app-view-with-header app-view-with-footer">
                <div class="page-wrap">
                    <div class="nologin">
                        <a >
                            <span>登录后享受更多优惠</span>
                            <em>去登录<img src="../assets/right.png" alt=""></em>
                        </a>
                    </div>
                    <div class="noitems">
                        <a href="">
                            <span>购物车还是空的</span>
                            <em>去逛逛</em>
                        </a>
                    </div>
                    <div class="recommend-box space-top">
                        <div class="recommend-top-img">
                            <img src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
                        </div>
                        <div class="recommend-list">
                            <div class="goods-item" v-for="item in list" :key="item.id">
                                <a>
                                    <div class="goods-img-box">
                                        <img :src="item.img" alt="">
                                    </div>
                                    <div class="goods-info">
                                        <div class="goods-name no-wrap">{{item.name}}</div>
                                        <div class="goods-price price">{{item.price}}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
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
            ]
        }
    }
}
</script>

<style scoped>
.app-shell{
    position: relative;
    width: 100%;
    z-index: 1;
}
.app-shell .app-shell-header{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
}
.app-header-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    background: #f2f2f2;
    color: #666;
    padding: 0;
}
.app-header-wrapper>div{
    display: flex;
   align-items: center;
}
.app-header-wrapper a{
    display: block;
    width: .6rem;
    margin: 0 .2rem;
}
.app-header-wrapper img{
    width: .5rem;
    padding-bottom:0.15rem ;
}
.app-header-middle{
    font-size: .3rem;
    min-width: 0;
}
.app-header-right img{
    width: .7rem;

}
.app-view-wrapper{
    position: relative;
    max-width: 7.2rem;
    margin: 0 auto;
}
.app-view-wrapper .app-view.app-view-with-footer{
    padding-bottom: 52px;
}
.app-view-wrapper .app-view.app-view-with-header{
    padding-top:50px;
}
.page-wrap{
    height: 100%;
    overflow-x: hidden;
    overflow-y:auto ;
}
.nologin>a{
    height: 1.04rem;
    line-height: 1.04rem;
    padding: 0 .56rem 0 .32rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    color: rgba(0,0,0,.54);
}
.nologin>a>span{
    font-size: .32rem;
    color: rgba(0,0,0,.87);
    display: block;
    text-align: left;
}
.nologin>a em{
    font-style: normal;
    font-size: .24rem;
    text-align: right;
}
em img{
    width: .3rem;
    height: .3rem;
    margin-left: .1rem;
}
.noitems{
    background: #ebebeb;
    padding: .2rem;
}
.noitems>a{
    height: .8rem;
    font-size: .24rem;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;

}
.noitems>a span{
    display: inline-block;
    line-height: .8rem;
    background: url("https://m.mi.com/static/img/cartnull.daaf7926f8.png") no-repeat 0;
    background-size: auto 100%;
    padding: 0 .16rem 0 .96rem;
    color: rgba(0,0,0,.27);
}
.noitems>a em{
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    color: rgba(0,0,0,.87);
    font-style: normal;
    margin-top: .1rem;
}
.recommend-box{
    background: #fff;
    text-align: left;
}
.space-top{
    padding-bottom: .9rem;
}
.recommend-top-img{
    width: 7.2rem;
    height: 1.25rem;
}
.recommend-top-img >img{
    height: 1.2rem;
}
.recommend-list{
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: row;
}
.goods-item{
    flex: 0 1 50%;
    overflow: hidden;
}
.goods-item a{
    display: block;
}
.goods-item .goods-img-box{
    position: relative;
}
.goods-img-box>img{
    display: block;
    width: 100%;
    min-height: 3.56rem;
}
.goods-info{
    padding: .18rem .26rem .22rem;
}
.goods-info .goods-name{
    font-size: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.nowrap{
    white-space: nowrap;
}
.goods-info .goods-price{
    font-size: .32rem;
    color: #ff6700;
    margin-top: .1rem;
}
.price{
    position: relative;
    padding-left: .5em;
    line-height: 1em;
}
</style>