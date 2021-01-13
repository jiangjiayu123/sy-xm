<template>
    <div class="me-page">
        <div class="me-bar">
            <!-- 登录注册 -->
            <div class="me-top-bar">
                <div class="me-top-list">
                    <div class="me-center">
                        <div class="me-top-photo"></div>
                        <div class="me-top-name">登录/注册</div>
                    </div>
                </div>
            </div>
            <!-- 我的订单 -->
            <div class="me-order">
                <p class="me-order-02">我的订单</p>
                <p class="me-order-01">全部订单</p>
                <p class="me-order-photo"></p>
            </div>
            <!-- 待付款 -->
            <ul class="me-wait-pay">
                <li class="dfk">
                    <div class="me-icon"></div>
                    <span class="me-icon-01">待付款</span>
                </li>
                 <li class="dfk">
                    <div class="me-icon-s"></div>
                    <span class="me-icon-01">待收货</span>
                </li>
                 <li class="dfk">
                    <div class="me-icon-t"></div>
                    <span class="me-icon-01">退换货</span>
                </li>
            </ul>
            <div class="ui-line"></div>
            <!-- 列表 -->
            <ul class="me-last-list">
                <li class="item1"></li>
            </ul>
            

        </div>

    </div>
</template>

<script>
// import axios from "axios";
export default {
    
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
.me-page {
    width: 100%;
    height: 100%;
}
.me-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.me-top-bar{
    height: 13%;
    width:100%;
}
.me-top-list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-image: url(../assets/images/me-01.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #f37d0f;
}
.me-top-photo {
    background-image: url(../assets/images/me-02.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 0.16rem 0 0.32rem;
    width: 0.96rem;
    height: 0.96rem;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0, 0%, 100%, 0.4);
    text-align: center;
    align-items: center;
}
.me-center{
    width: 100%;
    height: 65%;
    margin: auto 0;
    display: flex;
    align-items: center;
}
.me-top-name{
    color: #fff;
    font-size: .24rem;
    text-align: left;
}
.me-order{
    width: 100%;
    height: 8%;
    display: flex;
    justify-content:space-between;
    font-size: .28rem;
    color: rgba(0,0,0,.87);
    padding: 0 0 0 .32rem;
    border-bottom:1px solid rgba(0,0,0,.15);
    align-items: center;
}
.me-order-01{
     font-size: .24rem;
     width: 17%;
}
.me-order-02{
    width: 80%;
}
.me-order-photo{
    background-image: url(../assets/images/小箭头.png);
    width:10%;
    height: 70%;
    background-size:100% 100%;
}
.me-wait-pay{
    height: 15%;
    width: 100%;
    display: flex;
    justify-content:space-around;
    background-color: #fff;
}
.dfk{
    display: flex;
    -ms-flex-line-pack: justify;
    align-content: space-between;
    flex-direction: column;
    position: relative;
    padding: .4rem 0;
    width:13%;
    font-size:0.2rem
}
.me-icon{
    background-image: url(../assets/images/me-03.png);
}
.me-icon,.me-icon-s,.me-icon-t{
    background-size: 100% 100%;
    width: 80%;
    height:80%;
}
.me-icon-s{
     background-image: url(../assets/images/物流.png);
}
.me-icon-t{
    background-image: url(../assets/images/修理.png);
}
.ui-line{
    height: .2rem;
    background: #f5f5f5;
    overflow: hidden;
}

</style>