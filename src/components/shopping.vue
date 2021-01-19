<template>
    <div class="app-shell app-shell-bottom-navigation">
        <header class="app-header-wrapper app-shell-header">
            <div class="app-header-left"  @click="bottomBarClick('firsttab')">
                <a>
                    <img src="../assets/return.png" alt />
                </a>
            </div>
            <div class="app-header-middle">
                <div class="app-header-title" @click="entrymicar">购物车</div>
            </div>
            <div class="app-header-right piccc">
                <a>
                    <img src="../assets/search.png" alt />
                </a>
            </div>
        </header>
        <div class="page-wrap">
            <div class="bodys">
                <div class="nologin" @click="gotodenglu" v-show="showDengLu">
                    <a>
                        <span>登录后享受更多优惠</span>
                        <em>
                            去登录
                            <img src="../assets/right.png" alt />
                        </em>
                    </a>
                </div>

                <div class="noitems" v-show="gouwuche">
                    <a href>
                        <span>购物车还是空的</span>
                        <em>去逛逛</em>
                    </a>
                </div>
                <!-- 购物车样式 -->
                <div class="car-body">
                    <div class="car-for"
                        v-for="(item,index) in goodsList"
                        :key="item.id">
                        <div class="item">
                            <!-- 商品的选中! -->
                            <div
                                class="item-check-01"
                                v-if="item.flag == 1"
                                @click="WgoodsCheck(item)"
                            ></div>
                            <div class="item-check-02" v-else @click="WgoodsCheck(item)"></div>
                            <div class="item-photo">
                                <img :src="item.img" alt class="good-img" />
                            </div>
                            <div class="item-describe">
                                <p class="goodname">{{item.name}}</p>
                                <p>
                                    <span class="goodprice">售价：</span>
                                    <span>{{item.price}}元</span>
                                </p>
                                <div class="del-item">
                                    <p class="xm-input-number">
                                        <span
                                            class="goodResce-01"
                                            v-if="item.showBei"
                                            @click="Goodjian(index)"
                                        ></span>
                                        <span class="goodResce-02" v-else @click="Goodjian(index)"></span>
                                        <span class="goodNum">{{item.num}}</span>
                                        <span class="goodAdd" @click="Goodjia(index)"></span>
                                    </p>
                                    <p class="del-photo" @click="deteleItem(index)"></p>
                                </div>
                            </div>
                        </div>
                        <div class="yanbao-item">
                            <div class="yanbao">
                                <p class="baojia">
                                    <img :src="item.img2" alt class="pic2" />
                                </p>
                                <p class="yanbao-time">{{item.name2}}</p>
                                <p class="choose-buy">选购</p>
                            </div>
                        </div>
                        <div class="empty"></div>
                    </div>
                </div>
                <!-- 购物车底部 -->
                <transition>
                <div class="bottom-submit" v-show="play">
                    <div class="total-price">
                        <span>共</span>
                        <span>{{count}}</span>
                        <span class="jian">件</span>
                        <span>金额:</span>
                        <div class="price-old">
                            <p class="priceed">{{allPrices}}</p>
                            <p>元</p>
                        </div>
                    </div>

                    <p class="conutine-buy">继续购物</p>
                    <p class="pay-goods">去结算</p>
                </div>
                </transition>
                <!-- 这是购物车下面的详情页面 -->
                <div class="recommend-box space-top">
                    <div class="recommend-top-img">
                        <img
                            src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
                            alt
                        />
                    </div>
                    <div class="recommend-list">
                        <div class="goods-item" v-for="item in list" :key="item.id">
                            <div class="goods-img-box">
                                <img :src="item.img" alt />
                            </div>
                            <div class="goods-info">
                                <div class="goods-name">{{ item.name }}</div>
                                <div class="goods-price">{{ item.price }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: "黑鲨游戏 Type-C 耳机",
                    img:
                        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bdb3d77094854460bb36494ecf8720cc.jpg?thumb=1&w=360&h=360",
                    price: "￥99",
                },
                {
                    id: 2,
                    name: "米家直流变频落地扇1X",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
                    price: "￥299",
                },
                {
                    id: 3,
                    name: "手机USB micro 数据线",
                    img:
                        "https://i8.mifile.cn/b2c-mimall-media/652ae759d82f68d40caea9329e266044!360x360.jpg",
                    price: "￥9.9",
                },
                {
                    id: 4,
                    name: "米家智能IH电饭煲 4L",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f735084aaa49c1b832af24eca6cc5a01.jpg?thumb=1&w=360&h=360",
                    price: "￥499",
                },
                {
                    id: 5,
                    name: "米家洗烘一体机Pro",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360",
                    price: "￥2899",
                },
                {
                    id: 6,
                    name: "小米巨能写中性笔10支装",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6a8abf50e2134139e24c30c9293871c.jpg?thumb=1&w=360&h=360",
                    price: "￥9.99",
                },
                {
                    id: 7,
                    name: "米家互联网燃气灶",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa0f388a9e6ba57caa623e1e18e9b3fe.jpg?thumb=1&w=360&h=360",
                    price: "￥799",
                },
                {
                    id: 8,
                    name: "知吾煮汤锅 米家定制",
                    img:
                        "https://i8.mifile.cn/b2c-mimall-media/72f7329a96a5c89bf160fba8cd2745be!360x360.jpg",
                    price: "￥99",
                },
                {
                    id: 9,
                    name: "米家电子温湿度计Pro",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fcc8cd115c4d1417d8cb7860fe66049.jpg?thumb=1&w=360&h=360",
                    price: "￥79",
                },
                {
                    id: 10,
                    name: "小米活塞耳机",
                    img:
                        "https://i8.mifile.cn/b2c-mimall-media/e73a38fa0dca982ea6685e045d05a163!360x360.jpg",
                    price: "￥29",
                },
                {
                    id: 11,
                    name: "照片打印机彩色相纸",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e315bf299f209996e7e91b77a75512c.jpg?thumb=1&w=360&h=360",
                    price: "￥59",
                },
                {
                    id: 12,
                    name: "小米电视音箱",
                    img:
                        "https://i8.mifile.cn/b2c-mimall-media/f0ed6c9712b59561f24104553a206e3f!360x360.jpg",
                    price: "￥399",
                },
                {
                    id: 13,
                    name: "小米净水器600G",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efae8106bc194e6a730294c9ee531caf.jpg?thumb=1&w=360&h=360",
                    price: "￥1698",
                },
                {
                    id: 14,
                    name: "米家智能调压电压力锅5L",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/088b2e2150928479e7b425fe2117fdaa.jpg?thumb=1&w=360&h=360",
                    price: "￥599",
                },
                {
                    id: 15,
                    name: "米家电烤箱",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43404b257f931fda0edee97073c7ee15.jpg?thumb=1&w=360&h=360",
                    price: "￥299",
                },
                {
                    id: 16,
                    name: "变频 | 米家互联网空调 1.5匹",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/425e29b004536f6de55c87d678977413.jpg?thumb=1&w=360&h=360",
                    price: "￥2199",
                },
                {
                    id: 17,
                    name: "米家精修螺丝刀套装",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398e70495246a052d00fb724c0139087.jpg?thumb=1&w=360&h=360",
                    price: "￥89",
                },
                {
                    id: 18,
                    name: "小米电视4X 43英寸",
                    img:
                        "https://i8.mifile.cn/b2c-mimall-media/ef288021164c70da7744f4f23702ed41!360x360.jpg",
                    price: "￥129",
                },
                {
                    id: 19,
                    name: "米家空气净化器滤芯 标准版",
                    img:
                        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1f9eecd1d0b411315f2e698e953a52d.jpg?thumb=1&w=360&h=360",
                    price: "￥149",
                },
                {
                    id: 20,
                    name: "米家防蓝光护目镜 Pro",
                    img:
                        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79c79d55763c27f2a657a9e2f5849f8e.jpg?thumb=1&w=360&h=360",
                    price: "￥129",
                },
            ],
            showChecked: false,
            allPrices: 0,
            gouwuche: false,
            play:true,
        };
    },

    watch:{
        goodsList(newVal){
            if(newVal.length == 0){
                this.gouwuche=true
                this.play=false
            }
            else{
                this.gouwuche=false
                this.play=true
            }
        }
    },

    created() {
        this.countNum();
        this.TotalPrice();
    },
    computed: {
        componentName(){
          return this.$store.state.componentName;
        },
        appearDe() {
            return this.$store.state.appearDe;
        },
        showDengLu(){
            return this.$store.state.showDengLu;
        },
        count(){
           return this.$store.state.count
        },
        goodsList(){
             return this.$store.state.goodsList
        }
    },
    methods: {
        bottomBarClick(name){
        this.$store.commit("bottomBarClick",name)
        },
        gotodenglu() {
            this.$router.push({ path: "denglu" });
        },
        // // !!!!!测试小米购物车
        entrymicar() {
            this.$router.push({ path: "micart" });
        },
        WgoodsCheck(item) {
            item.flag = !item.flag;
            this.countNum();
            this.TotalPrice();
        },
        Goodjian(index) {
            this.$store.commit("Goodjian",index)
            this.countNum();
            this.TotalPrice();
        },
        Goodjia(index) {
            this.$store.commit("Goodjia",index)
            this.countNum();
            this.TotalPrice();
        },
        deteleItem(index) {
            this.$store.commit("deleteItem",index)
            this.countNum();
            this.TotalPrice();
        },
        countNum() {
            let sum = 0;
            for (let i = 0; i < this.$store.state.goodsList.length; i++) {
                if (this.$store.state.goodsList[i].flag == true) {
                    sum += this.$store.state.goodsList[i].num;
                }
            }
            this.$store.state.count = sum;
        },
        TotalPrice() {
            let toprice = 0;
            for (let i = 0; i < this.$store.state.goodsList.length; i++) {
                if (this.$store.state.goodsList[i].flag == true) {
                    let num6 = this.$store.state.goodsList[i].num * this.$store.state.goodsList[i].price;
                    toprice += num6;
                }
            }
            this.allPrices = toprice;
        },        
        // count(){
        //     this.$commit("showme",count)
        // }
        // 子组件调用父元素的点击事件！！！
        // goBackShouYe(){
        //     this.$store.commit("goBackShouYe")
        // }

        // //是否显示购物车还是空的！
    },
};
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
.app-header-wrapper {
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
.bodys {
    padding-bottom: 52px;
    position: absolute;
    top: 0.9rem;
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
    background: url("https://m.mi.com/static/img/cartnull.daaf7926f8.png") no-repeat 0;
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
    width: 100%;
    height: 1.25rem;
}
.recommend-top-img > img {
    width: 100%;
    height: 1.2rem;
}
.recommend-list {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}
.goods-item {
    flex: 0 1 49%;
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
    margin-left: 0.2rem;
}
.goods-info > .goods-name {
    font-size: 0.28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nowrap {
    white-space: nowrap;
}
.goods-price {
    font-size: 0.32rem;
    color: #ff6700;
    margin-top: 0.1rem;
}
.price {
    position: relative;
    padding-left: 0.5em;
    line-height: 1em;
}
.piccc {
    padding-top: 0.12rem;
}

.car-body {
    margin-top: 0.24rem;
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
}
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.25rem;
}
.item-check-01 {
    background-image: url(../assets/images/商品选中.png);
}
.item-check-01,
.item-check-02 {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0.4rem 0.4rem;
    width: 0.6rem;
    padding: 0 0.2rem;
    height: 1.8rem;
}
.good-img {
    width: 100%;
    height: 100%;
}
.item-photo {
    display: block;
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.2rem;
    border: 1px solid #eee;
    border-radius: 2px;
    overflow: hidden;
}
.item-describe {
    width: 4.6rem;
    text-align: left;
    font-size: 0.28rem;
}

.del-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.del-photo {
    background-image: url(../assets/images/删除商品.png);
    width: 0.6rem;
    height: 0.6rem;
    background-size: cover;
    margin-right: 0.2rem;
}
.goodname {
    font-size: 0.28rem;
    line-height: 0.32rem;
    color: #666;
    margin-bottom: 0.12rem;
    margin-right: 0.3rem;
    padding: 0;
}
.goodprice {
    padding: 0.12rem 0;
    font-size: 0.24rem;
    color: #999;
    margin-bottom: 0.12rem;
}
.xm-input-number {
    display: inline-block;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
}
.goodAdd,
.goodNum,
.goodResce-01 {
    width: 0.6rem;
    height: 0.6rem;
}
.goodAdd,
.goodResce-01 {
    background-size: 0.3rem 0.3rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #f4f4f4;
}
.goodResce-01 {
    background-image: url(../assets/images/商品减减.png);
}
.goodNum {
    line-height: 0.6rem;
    text-align: center;
}
.goodResce-02 {
    width: 0.6rem;
    height: 0.6rem;
    background-size: 0.3rem 0.3rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #fafafa;
    background-image: url(../assets/images/商品减减.png);
}
.goodAdd {
    background-image: url(../assets/images/商品加加.png);
}
.empty {
    height: 0.2rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
    margin-top: 0.3rem;
}
.car-for {
    margin: 0 auto;
}
.yanbao-item {
    /* width: 100%; */
    height: 0.7rem;
    background: #f6f6f6;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
}
.yanbao {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.14rem 0.2rem;
    border-radius: 0.04rem;
    font-size: 0.24rem;
    margin: 0 0.2rem 0.2rem;
}
.baojia {
    width: 0.6rem;
    height: 0.6rem;
    margin-top: -0.1rem;
}
.pic2 {
    width: 100%;
    height: 100%;
}
.yanbao-time {
    margin-left: -2.99rem;
}
.choose-buy {
    color: #ff5722;
}
.bottom-submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 99;
    -webkit-box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    width: 100%;
    height: 1rem;
    display: flex;
}
.total-price {
    font-size: 0.28rem;
    color: #999;
    width: 100%;
    text-align: center;
    padding-top: 0.15rem;
    width: 33.3%;
}
.conutine-buy {
    font-size: 0.5rem;
    width: 33.3%;
    background: #f4f4f4;
    border: 1px solid #f4f4f4;
    color: #333;
    text-align: center;
    line-height: 1rem;
    font-size: 0.28rem;
}
.pay-goods {
    font-size: 0.3rem;
    width: 33.3%;
    background: #ff6700;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.28rem;
}
.price-old {
    display: flex;
    margin: 0 auto;
    width: 30%;
    margin-bottom: 0.2rem;
    align-items: center;
}
.priceed {
    font-size: 0.4rem;
    color: #ff5722;
    margin-right: 0.05rem;
    padding-bottom: 0.1rem;
    font-weight: 600;
}
.jian {
    margin-right: 0.1rem;
}
.item-check-02 {
    background-image: url(../assets/images/取消商品选中.png);
}
.v-enter,.v-leave-to{
    transform: translateY(52px);
}
.v-enter-active,.v-leave-active{
    transition: all .3s linear;
}
</style>