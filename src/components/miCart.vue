<template>
    <div class="MiCar">
        <header class="app-header-wrapper app-shell-header">
            <div class="app-header-left">
                <a><img src="../assets/return.png" alt=""></a>
            </div>
            <div class="app-header-middle">
                <div class="app-header-title" >购物车</div>
            </div>
            <div class="app-header-right pic1" >
                <a><img src="../assets/search.png" alt=""></a>
            </div>
        </header>
        <!-- 购物车部分 -->
        <div class="car-body">
            <div class="car-for" v-for="(item) in list" :key="item.name">
                <div class="item">
                    <!-- 商品的选中! -->
                    <div class="item-check-01" v-if="show"></div>
                    <!-- <div class="item-check-02" v-else></div> -->
                    <div class="item-photo">
                        <img :src="item.img" alt="" class="good-img">
                    </div>
                    <div class="item-describe">
                        <p class="goodname">{{item.name}}</p>
                        <p>
                            <span class="goodprice">售价：</span>
                            <span>{{item.price}}</span>
                        </p>
                        <div class="del-item">
                            <p class="xm-input-number">
                                <span class="goodAdd"></span>
                                <span class="goodNum">1</span>
                                <span class="goodResce"></span>
                            </p>
                            <p class="del-photo"></p>
                        </div>
                    </div>
                </div>
                <div class="yanbao-item">
                    <div class="yanbao">
                        <p class="baojia">
                            <img :src="item.img2" alt="" class="pic2">
                        </p>
                        <p class="yanbao-time">{{item.name2}}</p>
                        <p class="choose-buy">选购</p>
                    </div>
                </div>
                <div class="empty"></div>
            </div>
        </div>
        <!-- 购物车底部 -->
        <div class="bottom-submit">
            <div class="total-price">
                <span>共</span>
                <span>0</span>
                <span class="jian">件</span>
                <span>金额:</span>
                <div class="price-old">
                    <p class="priceed">0</p>
                    <p>元</p>
                </div>
            </div>
            <p class="conutine-buy">继续购物</p>
            <p class="pay-goods">去结算</p>
        </div>
    </div>


</template>
<script>
import axios from "axios";
    export default{
        data(){
            return {
                list:[],
                show:true
            }
        },
         created() {
        let url = "http://localhost:8080/data/good-list.json";
        let that = this;
        axios
         .get(url)
            .then(function (response) {
                console.log(response);
                that.list=response.data.list;
                console.log(that.list)
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    }

</script>
<style scoped>
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
}
.MiCar{
        width: 100%;
        height: 100%;
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

/*购物车样式 */
.car-body{
    margin-top: .24rem;
    /* border: 1px solid red; */
    width:100%
}
.item{
    display: flex;
    justify-content:space-between;
    align-items:center;
    height: 2.25rem;
}
.item-check-01{
    background-image: url(../assets/images/商品选中.png);
    background-position:50% 50%;
    background-repeat: no-repeat;
    background-size: .4rem .4rem;
    width: .6rem;
    padding: 0 .2rem;
    height: 1.8rem;
}
.good-img{
    width:100%;
    height:100%;

}
.item-photo{
    display: block;
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: .2rem;
    border: 1px solid #eee;
    border-radius: 2px;
    overflow: hidden;
}
.item-describe{
    width: 4.6rem;
    text-align: left;
    font-size: .28rem;
}

.del-item{
    display: flex;
    justify-content:space-between;
    align-items:center
}

.del-photo{
    background-image: url(../assets/images/删除商品.png);
     width: .6rem;
    height: .6rem;
    background-size: cover;
    margin-right: .2rem;
}
.goodname{
    font-size: .28rem;
    line-height: .32rem;
    color: #666;
    margin-bottom: .12rem;
    margin-right: .3rem;
    padding: 0;
}
.goodprice{
    padding: .12rem 0;
    font-size: .24rem;
    color: #999;
    margin-bottom: .12rem;
}
.xm-input-number{
    display: inline-block;
    border: 1px solid #eee;
    display:flex;
    align-items: center;
}
.goodAdd,.goodNum,.goodResce{
    width: 0.6rem;
    height: 0.6rem;
}
.goodAdd,.goodResce{
    background-size: .3rem .3rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #f4f4f4
}
.goodAdd{
    background-image: url(../assets/images/商品减减.png);
}
.goodNum{
    line-height:.6rem;
    text-align:center;

}
.goodResce{
     background-image: url(../assets/images/商品加加.png);
}
.empty{
    height: .2rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
    margin-top: .3rem;

}
.car-for{
    margin: 0 auto;
}
.yanbao-item{
    /* width: 100%; */
    height: .7rem;
    background: #f6f6f6;
    margin-right: .1rem;
    margin-left: .1rem;

}
.yanbao{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .14rem .2rem;
    border-radius: .04rem;
    font-size: .24rem;
    margin: 0 .2rem .2rem;
}
.baojia{
    width: .6rem;
    height: .6rem;
    margin-top: -.1rem;
}
.pic2{
    width: 100%;
    height: 100%;
}
.yanbao-time{
    margin-left: -2.99rem;
}
.choose-buy{
    color: #ff5722;
}
.bottom-submit{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 99;
    -webkit-box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    width: 100%;
    height: 1rem;
    display: flex;
    
}
.total-price{
    font-size: .28rem;
    color: #999;
    width: 100%;
    text-align: center;
    padding-top: .15rem;
    width: 33.3%;
}
.conutine-buy{
    font-size: .5rem;
    width: 33.3%;
    background: #f4f4f4;
    border: 1px solid #f4f4f4;
    color: #333;
     text-align: center;
    line-height: 1rem;
    font-size: .28rem;
}
.pay-goods{
     font-size: .3rem;
     width: 33.3%;
    background: #ff6700;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: .28rem;
}
.price-old{
    display: flex;
    margin: 0 auto;
    
    margin-bottom: .2rem;
    align-items: center;
}
.priceed{
    font-size: .4rem;
    color: #ff5722;
    margin-right: .1rem;
    padding-bottom: .1rem;
}
.jian{
    margin-right: .1rem;
}






</style>