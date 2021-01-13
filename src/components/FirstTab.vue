
<template>
  <div class="container">
    <header class="header-bar">
      <div class="top-bar">
        <div class="top-bar-left">
          <div class="img-logo">
            <img src="../assets/mi1.png" alt="" />
          </div>
        </div>
        <div class="top-bar-middle">
          <div class="middle-title">
            <img src="../assets/search.png" alt="" />
            搜索商品名称
          </div>
        </div>
        <div class="top-bar-right">
          <img src="../assets/10.png" alt="" />
        </div>
      </div>
      <div class="nav-wrap">
        <div class="nav-display">
          <img src="../assets/down.png" alt="" />
        </div>
        <div class="nav">
          <div class="nav-item ">
              <span class="active">推荐</span>      
          </div>
          <div class="nav-item">
              <span>手机</span>
          </div>
          <div class="nav-item">
              <span>智能</span>
          </div>
          <div class="nav-item">
              <span>电视</span>
          </div>
          <div class="nav-item">
              <span>家电</span>
            </div>
          <div class="nav-item">
              <span>笔记本</span>
          </div>
        </div>
      </div>
    </header>
    <div class="page-wrap">
        <div class="bodys">
            <div class="component-list-main">
            <div class="swipper">
                <div class="swiper-wrapper">
                    <el-carousel height="187.5px">
                        <el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="cells">
                <a href="#" v-for="item in picturelist" :key="item.id">
                    <img :src="item.img">
                </a>
            </div>
             <div class="cells">
                <a href="#" v-for="item in picture1list" :key="item.id">
                    <img :src="item.img">
                </a>
            </div>
            <div class="line"></div>
            <div class="cells-dev">
                <div class="cells-dev-left">
                    <a href="#">
                        <img src="../assets/picture1.webp" alt="">
                    </a>
                </div>
                <div class="cells-dev-right">
                    <a href="#">
                        <img src="../assets/picture2.webp" alt="">
                    </a>
                    <a href="#" class="cells-dev-right1">
                        <img src="../assets/picture3.webp" alt="">
                    </a>
                </div>                    
            </div>
            <div class="line"></div>
            <div class="cells-tool">
                <a href="#">
                    <img src="../assets/01.webp" alt="">
                </a>
            </div>
            <div class="line"></div>
             <div class="cells-tool1">
                <a href="#">
                    <img src="../assets/02.webp" alt="">
                </a>
            </div>
            <div class="line1"></div>
            <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="../assets/phone1.jpg" alt="">
                        <div class="tag">
                            <img src="../assets/down1.png" alt="">
                        </div>
                    </div>
                    <div class="bgw">
                            <div class="name">Redmi K30 4G</div>
                            <div class="brief">120Hz流速屏，全速热爱</div>
                            <div class="price">
                               1299<span>起</span>
                                <span class="price-old">
                                    <del>1699</del>
                                </span>
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="../assets/phone2.jpg" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">Redmi K30 5G</div>
                        <div class="brief">双模5G，120Hz流速屏</div>
                        <div class="price">
                            1599<span>起</span>
                            <span class="price-old">
                                <del>2299</del>
                            </span>
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="../assets/phone3.jpg" alt="">
                    </div>
                    <div class="bgw">
                            <div class="name">Note 8 Pro</div>
                            <div class="brief">6400万全场景四摄</div>
                            <div class="price">
                               1099<span>起</span>
                                <span class="price-old">
                                    <del>1399</del>
                                </span>
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="../assets/phone4.jpg" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">Redmi Note 8</div>
                        <div class="brief">千元4800万四摄</div>
                        <div class="price">
                            899<span>起</span>
                            <span class="price-old">
                                <del>999</del>
                            </span>
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="box-flex">
                <a href="">
                    <div class="ti">
                        更多小米手机产品>
                    </div>
                </a>               
            </div>
            <div class="line"></div>
              <div class="cells-tool1">
                <a href="#">
                    <img src="../assets/picture4.webp" alt="">
                </a>
            </div>
            <div class="line1"></div>
            <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp" alt="">
                    </div>
                    <div class="bgw">
                            <div class="name">小米电视4A 65英寸</div>
                            <div class="brief">4K HDR，人工智能语音系统</div>
                            <div class="price">
                               2899<span>起</span>
                                <span class="price-old">
                                    <del>2999</del>
                                </span>
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="../assets/tv.jpg" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">小米电视4X 43英寸</div>
                        <div class="brief">FHD全高清屏，人工智能语音</div>
                        <div class="price">
                            1299<span>起</span>
                            <span class="price-old">
                                <del>1399</del>
                            </span>
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="../assets/tv1.jpg" alt="">
                    </div>
                    <div class="bgw">
                            <div class="name">小米电视4C 50英寸</div>
                            <div class="brief">4K HDR，钢琴烤漆</div>
                            <div class="price">
                               1999
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="../assets/tv2.jpg" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">小米电视4C 55英寸</div>
                        <div class="brief">4K HDR，人工智能系统</div>
                        <div class="price">
                            2299
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="../assets/tv3.jpg" alt="">
                    </div>
                    <div class="bgw">
                            <div class="name">小米电视4A 32英寸</div>
                            <div class="brief">人工智能系统，高清液晶屏</div>
                            <div class="price">
                               999
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="../assets/tv.png" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">小米电视4A 50英寸</div>
                        <div class="brief">4K HDR，人工智能语音系统</div>
                        <div class="price">
                            1999
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="box-flex">
                <a href="">
                    <div class="ti">
                        更多小米电视产品>
                    </div>
                </a>               
            </div>
            <div class="line"></div>
            <div class="cells-tool">
                <a href="#">
                    <img src="../assets/picture5.webp" alt="">
                </a>
            </div>
            <div class="line"></div>
             <div class="cells-tool1">
                <a href="#">
                    <img src="../assets/picture6.webp" alt="">
                </a>
            </div>
             <div class="line1"></div>
             <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="../assets/computer.jpg" alt="">
                    </div>
                    <div class="bgw">
                            <div class="name">Air 13.3" 2019款</div>
                            <div class="brief">新一代独立显卡</div>
                            <div class="price">
                               4799<span>起</span>
                                <span class="price-old">
                                    <del>5399</del>
                                </span>
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="../assets/computer2.jpg" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">小米笔记本15.6" MX110 独显版</div>
                        <div class="brief">全面均衡的国民轻薄本</div>
                        <div class="price">
                            3899<span>起</span>
                            <span class="price-old">
                                <del>4299</del>
                            </span>
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="product-list">
                <a href="">
                    <div class="img">
                        <img src="https://i8.mifile.cn/v1/a1/1ed6a607-21e5-8d85-e0e9-dfb07571fc6a.webp" alt="">
                    </div>
                    <div class="bgw">
                            <div class="name">小米游戏本</div>
                            <div class="brief">冷酷的性能怪兽</div>
                            <div class="price">
                               7999起
                            </div>
                            <div class="buybtn mauto">立即购买</div>                            
                    </div>                    
                </a>
                <a href="">
                    <div class="img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f09569618c64e3f6f36d1be6922e3cc.jpg?thumb=1&w=344&h=280" alt="">
                    </div>                    
                    <div class="bgw">
                        <div class="name">Pro 15.6" GTX显卡</div>
                        <div class="brief">更强悍的专业笔记本</div>
                        <div class="price">
                            6299起
                        </div>
                        <div class="buybtn mauto">立即购买</div>                            
                    </div>   
                </a>
            </div>
            <div class="box-flex">
                <a href="">
                    <div class="ti">
                        更多小米电脑产品>
                    </div>
                </a>               
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
      list:[
          {
              id:1,
              img:require("../assets/01.jpg")
          },
            {
              id:2,
              img:require("../assets/02.jpg")
          }
      ],
      picturelist:[
            {
              id:1,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6")
            },
            {
              id:2,
              img:("https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD")
            },
            {
              id:3,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?f=webp&w=216&h=228&bg=FFFFFF")
            },
            {
              id:4,
              img:("https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE")
            },
            {
              id:5,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF")
            },
      ],
        picture1list:[
             {
              id:6,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF")
            },
            {
              id:7,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA")
            },
            {
              id:8,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5")
            },
            {
              id:9,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF")
            },
            {
              id:10,
              img:("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8")
            },
        ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  background: #f2f2f2;
}
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 0.84rem;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.img-logo {
  display:block;
  width: .6rem;
  margin: 0 .2rem;
  margin-bottom: 0.5rem;
}
.img-logo > img {
  width: 80%;
}
.top-bar-middle {
  display: flex;
  align-items: center;
  font-size: .3rem;
  flex-grow: 1;
}
.middle-title {
  height: 33.25px;
  color: rgba(0, 0, 0, 0.3);
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  background-color: #fff;
}
.top-bar-right {
  width: .6rem;
  line-height: .6rem;
  text-align: center;
}
.middle-title > img {
  width: 20px;
}
.top-bar-right > img {
  width: 80%;
}
.nav-wrap {
  position: relative;
  height: 30px;
}
.nav-display {
  position: absolute;
  right: 0;
  top: -.1rem;
  width: .68rem;
  height: .55rem;
  line-height: .55rem;
  background-color: #f2f2f2;
    z-index: 99;
    text-align: center;
}
.nav-display > img {
    vertical-align: middle;
  width: .4rem;
  height: .4rem;
}
.nav {
  font-size: .26px;
  height: 100%;
  line-height: 30px;
  display: flex;
  overflow-x: auto;
  color: #747474;
  background: #f2f2f2;
  white-space: nowrap;
  z-index: 2;
}
.nav-item{
    vertical-align: middle;
    display: inline-block;
    padding: 0 13px;
}
.nav-item span{
    display: inline-block;
    height: 30px;
}
.active{
    border-bottom: 2px solid rgb(237, 91, 0);
    color: rgb(237, 91, 0);
}
.bodys{
    padding-bottom:52px;
    position: absolute;
    top: 1.39rem;
    overflow: hidden;
    left: 0;
    right: 0;
    background: #fff;
}
.el-carousel__item:nth-child(2n) {
     background:url("../assets/02.jpg") center center no-repeat;
     background-size:100%;
}  
.el-carousel__item:nth-child(2n+1) {
     background:url("../assets/01.jpg") center center no-repeat;
     background-size:100%;
}
.cells{
    width: 100%;
    height: 1.30rem;
}
.cells img{
    width: 20%;
    height: 100%;
}
.cells-dev{
    height: 4.60rem;
    display: flex;
    justify-content: space-between;
}
.cells-dev-left{
    width: 3.24rem;
    height:4.60rem;
}
.cells-dev-left>a{
    display: block;
    width: 3.24rem;
    height:4.60rem;
}
.cells-dev-left>a>img{
    width: 100%;
    height:100%;
}
.cells-dev-right{
    width: 3.24rem;
    height:4.60rem;
    display: flex;
    flex-direction: column;
}
.cells-dev-right>a{
    display: block;
    width: 3.24rem;
    height:2.28rem;
}
.cells-dev-right>a>img{
    width: 100%;
    height:100%;
}
.line{
    height: 0.15rem;
    border: 0.15rem solid rgb(245, 245, 245);
    background-color:rgb(245, 245, 245);
}
.cells-tool{
    height: 2.54rem;
}
.cells-tool>a{
     height: 2.54rem;
}
.cells-tool>a>img{
    width: 100%;
     height: 2.54rem;
}
.cells-tool1{
    height: 3.99rem;
}
.cells-tool1>a{
     height: 3.99rem;
}
.cells-tool1>a>img{
    width: 100%;
     height: 100%;
}
.cells-dev-right1{
    margin-top:0.05rem ;
}
.line1{
    height: 0.067rem;
    border: 0.067rem solid rgb(255, 255, 255);
    background-color:rgb(255, 255, 255);
}
.product-list{
    padding: 0 0.11rem;
    width: 100%;
    text-align: center;
    background: rgb(255, 255, 255);
    display: flex;
}
.product-list>a{
    width: 3.4rem;
    margin-right:0.11rem;
}
.product-list>a>.img{
    position: relative;
    width: 3.1rem;
    height: 2.5rem;
}
.img>img{
    width: 3.1rem;
    height: 2.5rem;
}
.tag{
    position: absolute;
    bottom:0;
    right: 0;
    height: 1rem;
}
 .tag img {
    display: inline-block;
    width: 1rem;
    height: auto;
}
.bgw{
    padding: .2rem .27rem;
}
.bgw .name{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .28rem;
    color: rgba(0,0,0,.87);
}
.bgw .brief{
    margin-top: .06rem;
    font-size: .22rem;
    line-height: .3rem;
    color: rgba(0,0,0,.54);
}
.bgw .price{
    font-size: .28rem;
    color: #ea625b;
    position: relative;
}
.price .price-old{
    margin: 0 .1rem;
    font-size: .22rem;
    color: rgba(0,0,0,.54);
}
.bgw .mauto{
    margin: 0 auto;
}
.bgw .buybtn{
    width: 2rem;
    background: #ea625b;
    border-radius: .05rem;
    text-align: center;
    color: #fff;
    font-size: .24rem;
    padding: .16rem 0;
    font-weight: 700;
}
.box-flex{
    height: 1rem;
}
.box-flex>a{
    display: block;
    background: #fff;
    height: 1rem;
    line-height: 1rem;
    font-size: .28rem;
    text-align: center;
}
.ti{
    color: rgba(0,0,0,.6);
}
</style>
