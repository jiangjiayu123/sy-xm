<template>
    <div class="me-page">
        <div class="me-bar">
            <!-- 登录注册 -->
            <div class="me-top-bar">
                <div class="me-top-list" @click="btndengLu">
                    <div class="me-center">
                        <div class="me-top-photo" v-if="medenglu"></div>
                        <div class="me-top-photo-denglu" v-else></div>
                        <div class="me-top-name" v-if="medenglu">登录/注册</div>
                        <div class="me-top-name-denglu" v-else>
                            <p class="denglu-id">742521367</p>
                            <p class="denglu-id deng-name">742521367</p>
                        </div>
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

            <ul class="me-last-list" v-for="item in list" :key="item.name">
                <li class="item1">
                    <p class="item1-photo">
                        <img :src="item.img1" alt="" class="item-photo-pic">
                    </p>
                    <div class="home-back item-back">
                        <p class="item-name">{{item.name1}}
                        </p>
                        <p class="me-home"></p>
                    </div>
                </li>
                <li class="item1">
                    <p class="item1-photo">
                        <img :src="item.img2" alt="" class="item-photo-pic">
                    </p>
                     <div class="home-back">
                        <p class="item-name">{{item.name2}}
                        </p>
                        <p class="me-home"></p>
                    </div>
                </li>
                <div class="ui-line"></div>
            </ul>
            <div class="kong"></div>
        </div>
        <!-- 遮罩层 -->
        <div class="xe-popup xe-dialog" v-show="seen">
            <div class="xe-popup-mask"></div>
            <div class="xe-popup-box xe-popup-center">
                <div class="xe-popup-content">
                    <div class="xe-dialog-box">
                        <div class="xe-dialog-content">
                            <div class="xe-dialog-text fz-s xe-dialog-text-align-left">
                                <div class="fz-xs">
                                    <a href="http://www.mi.com/about/user-agreement/" target="_blank" style="color:#ff6700;margin-right:0.1rem">《小米商城用户协议》</a>
                                    <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html" target="_blank" style="color:#ff6700;margin-right:0.1rem">《小米商城隐私政策》</a>
                                    <a href="https://static.account.xiaomi.com/html/agreement/account/cn.html" target="_blank" style="color:#ff6700;margin-right:0.1rem">《小米帐号用户协议》</a>
                                    <a href="https://static.account.xiaomi.com/html/privacy/account/zh_CN.html" target="_blank" style="color:#ff6700;margin-right:0.1rem">《小米帐号隐私政策》</a>
                                    <p class="xiangxi">请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                                </div>
                            </div>
                        </div>
                        <div class="choose">
                            <div class="no-promise" @click="btnNoPromise">不同意</div>
                            <div class="ok-promise" @click="btnPromise">同意</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            list:[],
            // medenglu:true,
            // seen:false,
        }
    },
    computed:{
        medenglu(){
                    return this.$store.state.medenglu;
        },
        seen(){
                return this.$store.state.seen;
        }
    },
    created() {
        let url = "http://localhost:8080/data/me-01.json";
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
    methods:{
        btndengLu(){
            // this.seen = true;
            this.$store.commit("btndengLu")
        },
        btnNoPromise(){
            // this.seen = false;
            this.$store.commit("btnNoPromise")

        },
        btnPromise(){
            this.$router.push({ path: "denglu" });
        }
    }
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
.me-top-photo{
 background-image: url(../assets/images/me-02.png);
}

.me-top-photo, .me-top-photo-denglu{
   
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
.me-top-photo-denglu{
    background-image: url(../assets/images/w登录小人.png);
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
    width: .48rem;
    height:.48rem;
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
.me-last-list{
    width:100%;
    height: 17%;
    margin:0 auto;
    font-size: 0.22rem;
}
.item1{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height: 50%;
}
.home-back{
    width: 130%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item-back{
 border-bottom:1px solid rgba(0,0,0,.15);
}
.item1-photo{
    width: 20%;
    height: 50%;
    padding-left:.3rem
}
.item-photo-pic{
    widows: 20%;
    height: 100%;
    /* padding: .1rem .1rem .1rem .1rem; */
}

.me-home{
    background-image: url(../assets/images/小箭头.png);
    width:10%;
    height: 55%;
    background-size:100% 100%;
}
.denglu-id{
    color: #fff;
    font-size: .24rem;
}
.deng-name{
    color: hsla(0,0%,100%,.6)
}
.xe-popup{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
}
.xe-dialog {
    text-align: center;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
.xe-popup .xe-popup-mask {
    background-color: rgba(0,0,0,.3);
    z-index: 999;
}
.xe-popup .xe-popup-box, .xe-popup .xe-popup-mask {
    position: absolute;
    width: 100%;
    height: 100%;
}
.xe-popup .xe-popup-box {
    -webkit-transform: translate(100%,100%);
    transform: translate(100%,100%);
    z-index: 1000;
}
.xe-popup .xe-popup-box, .xe-popup .xe-popup-mask {
    position: absolute;
    width: 100%;
    height: 100%;
}
.xe-popup .xe-popup-center .xe-popup-content {
    position: absolute;
    top: -50%;
    left: -50%;
    width: auto;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.xe-dialog .xe-dialog-box {
    width: 6.5rem;
    background: #fff;
    border-radius: .1rem;
    overflow: hidden;
}
.xe-dialog .xe-dialog-content {
    padding: 0 .3rem;
}
.xe-dialog .xe-dialog-content .xe-dialog-text.xe-dialog-text-align-left {
    text-align: left;
}
.xe-dialog .xe-dialog-content .xe-dialog-text {
    margin: .4rem;
    line-height:.5rem;
    color: #676767;
}
.fz-xs {
    font-size: .24rem!important;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    outline: 0;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.choose{
    width: 100%;
    height: 1rem;
    font-size: 0.2rem;
    display: flex;
    border-top:1px solid #676767;
}
.xe-dialog .xe-dialog-content .xe-dialog-text {
    margin: .4rem;
    line-height: .5rem;
    color: #676767;
    font-size:0.32rem!important;
}
.no-promise{
    height: 100%;
    width:50% ;
    border-right: 1px solid #676767;;
    text-align: center;
    line-height:1rem;
}
.ok-promise{
    height: 100%;
    width:50% ;
    text-align: center;
    line-height:1rem;
    color: #ff6300;
}
.kong{
    width: 100%;
    height: 0.8rem;
}
</style>