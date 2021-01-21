
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
          <div class="middle-title" @click="tosearch">
            <img src="../assets/search.png" alt="" />
            搜索商品名称
          </div>
        </div>
        <div class="top-bar-right">
            <div class="top-bar-right-item">
                <img src="../assets/10.png" alt="" />
            </div>          
        </div>
      </div>
      <div class="nav-wrap">
        <div class="nav-display" @click="toplay">
          <i class="image-icons icon-arrow-down" v-if="num==1"></i>
          <i class="image-icons1 icon-arrow-down" v-if="num==2"></i>
        </div>
        <div class="nav-item-layer" v-if="num==2">
            <div class="title">全部</div>
            <div class="btn-wrap">
                <span class="extra-btn cur mr-interval">推荐</span>
                <span class="extra-btn mr-interval">手机</span>
                <span class="extra-btn mr-interval">智能</span>
                <span class="extra-btn">电视</span>
                <span class="extra-btn mr-interval">家电</span>
                <span class="extra-btn mr-interval">笔记本</span>
            </div>
        </div>
        <div class="nav" v-if="num==1">
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
                        <swiperr></swiperr>
                </div>
                <div class="cells">
                    <a href="https://m.mi.com/seckill"  v-for="item in picturelist" :key="item.id">
                        <img :src="item.img">
                    </a>
                </div>
                <div class="cells">
                    <a href="https://m.mi.com/channel/all/14709" v-for="item in picture1list" :key="item.id">
                        <img :src="item.img">
                    </a>
                </div>
                <div class="line"></div>
                <div class="cells-dev">
                    <div class="cells-dev-left">
                        <a href="https://m.mi.com/channel/all/14501">
                            <img src="../assets/picture1.webp" alt="">
                        </a>
                    </div>
                    <div class="cells-dev-right">
                        <a href="https://m.mi.com/channel/all/14709">
                            <img src="../assets/picture2.webp" alt="">
                        </a>
                        <a href="https://m.mi.com/channel/all/13249" class="cells-dev-right1">
                            <img src="../assets/picture3.webp" alt="">
                        </a>
                    </div>                    
                </div>
                <div class="line"></div>
                <div class="cells-tool">
                    <a href="https://s1.mi.com/m/app/hd/index.html?id=14413">
                        <img src="../assets/01.webp" alt="">
                    </a>
                </div>
                <div class="line"></div>
                <div class="cells-tool1">
                    <a href="https://m.mi.com/commodity/detail/10000224">
                        <img src="../assets/02.webp" alt="">
                    </a>
                </div>
                <div class="line1"></div>
               <div class="product-list">
                    <a href="javascript:void(0)" v-for="(item,index) in phonelist" :key="item.id" @click="todetail(item.id)">
                        <div class="img">
                            <img :src="item.img" alt="">
                            <div class="tag" v-if="index==0">
                                <img src="../assets/down1.png" alt="">
                            </div>
                        </div>
                        <div class="bgw">
                                <div class="name">{{item.name}}</div>
                                <div class="brief">{{item.brief}}</div>
                                <div class="price">
                                ￥{{item.price}}<span>起</span>
                                    <span class="price-old">
                                        <del>￥{{item.priceold}}</del>
                                    </span>
                                </div>
                                <div class="buybtn mauto" >立即购买</div>                            
                        </div>                    
                    </a>
                </div>
                <div class="box-flex">
                    <a href="javascript:void(0)">
                        <div class="ti">
                            更多小米手机产品>
                        </div>
                    </a>               
                </div>
                <div class="line"></div>
                <div class="cells-tool1">
                    <a href="javascript:void(0)">
                        <img src="../assets/picture4.webp" alt="">
                    </a>
                </div>
                <div class="line1"></div>
                <div class="product-list">
                    <a href="javascript:void(0)" v-for="(item) in watchlist" :key="item.id">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="bgw">
                                <div class="name">{{item.name}}</div>
                                <div class="brief">{{item.brief}}</div>
                                <div class="price">
                                ￥{{item.price}}<span>起</span>
                                    <span class="price-old">
                                        <del>{{item.priceold}}</del>
                                    </span>
                                </div>
                                <div class="buybtn mauto" @click="todetail">立即购买</div>                            
                        </div>                    
                    </a>
                </div>
                <div class="box-flex">
                    <a href="javascript:void(0)">
                        <div class="ti">
                            更多小米电视产品>
                        </div>
                    </a>               
                </div>
                <div class="line"></div>
                <div class="cells-tool">
                    <a href="javascript:void(0)">
                        <img src="../assets/picture5.webp" alt="">
                    </a>
                </div>
                <div class="line"></div>
                <div class="cells-tool1">
                    <a href="javascript:void(0)">
                        <img src="../assets/picture6.webp" alt="">
                    </a>
                </div>
                <div class="line1"></div>
                <div class="product-list">
                    <a href="javascript:void(0)" v-for="item in computerlist" :key="item.id">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="bgw">
                                <div class="name">{{item.name}}</div>
                                <div class="brief">{{item.brief}}</div>
                                <div class="price">
                                ￥{{item.price}}<span>起</span>
                                    <span class="price-old">
                                        <del>{{item.priceold}}</del>
                                    </span>
                                </div>
                                <div class="buybtn mauto" @click="todetail">立即购买</div>                            
                        </div>                    
                    </a>
                </div>
                <div class="box-flex">
                    <a href="javascript:void(0)">
                        <div class="ti">
                            更多小米电脑产品>
                        </div>
                    </a>               
                </div>
                <div class="line"></div>
                <div class="cells-tool">
                    <a href="javascript:void(0)">
                        <img src="../assets/picture7.webp" alt="">
                    </a>
                </div>
                <div class="line"></div>
                <div class="cells-tool1">
                    <a href="javascript:void(0)">
                        <img src="../assets/picture8.webp" alt="">
                    </a>
                </div>
               <div class="product-list-flex" >
                    <a href="javascript:void(0)" v-for="item in productlist" :key="item.id">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="info">
                                <div class="name">{{item.name}}</div>
                                <div class="brief">{{item.brief}}</div>
                                <div class="price">
                                ￥{{item.price}}<span>起</span>
                                    <span class="price-old">
                                        <del>￥{{item.priceold}}</del>
                                    </span>
                                </div>                           
                        </div>                    
                    </a>
                </div>
                <div class="box-flex">
                    <a href="javascript:void(0)">
                        <div class="ti">
                            更多米家家电产品>
                        </div>
                    </a>               
                </div>
                <div class="line"></div>
                <div class="cells-tool">
                    <a href="javascript:void(0)">
                        <img src="../assets/picture.webp" alt="">
                    </a>
                </div>
                <div class="line"></div>
                <div class="cells-tool1">
                    <a href="javascript:void(0)">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/393a90da633889384d35acb7c44eeb17.jpg?f=webp&w=1080&h=660&bg=FFFFFF" alt="">
                    </a>
                </div>
                <div class="list-on">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="../assets/electrical1.jpg" alt="">
                        </div>
                        <div class="info">
                            <div class="name">米家直流变频落地扇1X</div>
                            <div class="briefwrap">模拟自然风算法 支持AI语音</div>
                            <div class="price">
                                ￥299
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-on1">
                    <a href="javascript:void(0)">                        
                        <div class="info">
                            <div class="name">小米AI音箱</div>
                            <div class="briefwrap">播音乐、讲故事、查路况、设闹钟、控制智能设备</div>
                            <div class="price">
                                ￥199
                            </div>
                        </div>
                        <div class="img">
                            <img src="https://i8.mifile.cn/b2c-mimall-media/1e5e065d515ba0a0303d96740ea58494!360x360.jpg" alt="">
                        </div>
                    </a>
                </div>
                <div class="list-on">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3593f6ee74115531a529226b64702f9.jpg?thumb=1&w=360&h=360" alt="">
                        </div>
                        <div class="info">
                            <div class="name">小米小爱触屏音箱</div>
                            <div class="briefwrap">好听，更好看</div>
                            <div class="price">
                                ￥299
                            </div>
                        </div>
                    </a>
                </div>
                <div class="box-flex">
                    <a href="javascript:void(0)">
                        <div class="ti">
                            更多米家智能产品>
                        </div>
                    </a>               
                </div>
                <div class="line"></div>
                <div class="cells-auto">
                     <a href="javascript:void(0)" v-for="item in imagelist" :key="item.id">
                         <img :src="item.img" alt="">
                     </a>
                </div>
                <div class="divider-line"></div>
                <div class="cells-auto">
                     <a href="javascript:void(0)" v-for="item in imagelist" :key="item.id">
                         <img :src="item.img" alt="">
                     </a>
                </div>
                <div class="divider-line"></div>
                <div class="cells-auto">
                     <a href="javascript:void(0)" v-for="item in imagelist" :key="item.id">
                         <img :src="item.img" alt="">
                     </a>
                </div>
                <div class="line"></div>
                <div class="cells-tool">
                    <a href="javascript:void(0)">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4c4a11536a720ee0f1b516e53e4d868.jpg?f=webp&w=1080&h=420&bg=873FFA" alt="">
                    </a>
                </div>
                <div class="cells-fill">
                    <a href="javascript:void(0)">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bbb5bac8089d890338b5bf8ff742cbbc.png" alt="">
                    </a>
                </div>
                <div class="fixed-bar" v-show="play">
                    <a href="javascript:void(0)">
                        <img src="../assets/01.gif" alt="">
                    </a>
                    <a class="top" @click="totop">
                        <img src="../assets/top.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import swipper from "../components/swipper.vue"
export default {
    components:{
        "swiperr":swipper
    },
    data() {
    return {
        play:false,
        scroll:"",
        num:1,
        watchlist:[
            {
                id:1,
                img:"https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp",
                name:"小米电视4A 65英寸",
                brief:"4K HDR，人工智能语音系统",
                price:"2899",
                priceold:"2999"
            },
            {
                id:2,
                img:require("../assets/tv.jpg"),
                name:"小米电视4X 43英寸",
                brief:"FHD全高清屏，人工智能语音",
                price:"1299",
                priceold:"1399"
            },
            {
                id:3,
                img:require("../assets/tv1.jpg"),
                name:"小米电视4C 50英寸",
                brief:"4K HDR，钢琴烤漆",
                price:"1999",
            },
            {
                id:4,
                img:require("../assets/tv2.jpg"),
                name:"小米电视4C 55英寸",
                brief:"4K HDR，人工智能系统",
                price:"2299",
            },
            {
                id:5,
                img:require("../assets/tv3.jpg"),
                name:"小米电视4A 32英寸",
                brief:"人工智能系统，高清液晶屏",
                price:"999",
            },
            {
                id:6,
                img:require("../assets/tv.png"),
                name:"小米电视4A 50英寸",
                brief:"4K HDR，人工智能语音系统",
                price:"1999",
            },
        ],
        phonelist:[
            {
                id:1,
                img:require("../assets/phone1.jpg"),
                name:"Redmi K30 4G",
                brief:"120Hz流速屏，全速热爱",
                price:"1299",
                priceold:"1699"
            },
            {
                id:2,
                img:require("../assets/phone2.jpg"),
                name:"Redmi K30 5G",
                brief:"双模5G，120Hz流速屏",
                price:"1999",
                priceold:"2899"
            },
            {
                id:3,
                img:require("../assets/phone3.jpg"),
                name:"Note 8 Pro",
                brief:"6400万全场景四摄",
                price:"1099",
                priceold:"1399"
            },
            {
                id:4,
                img:require("../assets/phone4.jpg"),
                name:"Redmi Note 8",
                brief:"千元4800万四摄",
                price:"899",
                priceold:"999"
            },
        ],
         computerlist:[
            {
                id:1,
                img:require("../assets/computer.jpg"),
                name:"Air 13.3' 2019款",
                brief:"新一代独立显卡",
                price:"4799",
                priceold:"5399"
            },
            {
                id:2,
                img:require("../assets/computer2.jpg"),
                name:"小米笔记本15.6' MX110 独显版",
                brief:"全面均衡的国民轻薄本",
                price:"3899",
                priceold:"4299"
            },
            {
                id:3,
                img:"https://i8.mifile.cn/v1/a1/1ed6a607-21e5-8d85-e0e9-dfb07571fc6a.webp",
                name:"小米游戏本",
                brief:"冷酷的性能怪兽",
                price:"7299",
            },
            {
                id:4,
                img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f09569618c64e3f6f36d1be6922e3cc.jpg?thumb=1&w=344&h=280",
                name:"Pro 15.6' GTX显卡",
                brief:"更强悍的专业笔记本",
                price:"6299",
            },
        ],
        imagelist:[
            {
                id:1,
                img:"https://i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp?w=537&h=720&bg=C0A491"
            },
            {
                id:2,
                img:"https://i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a.webp?w=537&h=720&bg=E8CFCB"
            }
        ],
        productlist:[
            {
                id:1,
                img:"https://i8.mifile.cn/v1/a1/c585ed38-bee4-2f3c-c413-a1af154a74b3.webp",
                name:"变频 | 米家互联网空调",
                brief:"变频节能，高效制冷热",
                price:"2399",
                priceold:"2699"
            },
            {
                id:2,
                img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360",
                name:"米家洗烘一体机Pro",
                brief:"智能洗烘，省心省力",
                price:"2899",
                priceold:"3299"
            },
            {
                id:3,
                img:"https://i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469.webp",
                name:"定频 | 米家空调 大1匹",
                brief:"出众静音，快速制冷热",
                price:"1699",
                priceold:"1799"
            },
            {
                id:4,
                img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2cbe411838194ad2aee50b85dacc152e.jpg?thumb=1&w=360&h=360",
                name:"米家互联网洗烘一体机10kg",
                brief:"烘干除菌率达99.9%",
                price:"1999",
                priceold:"2299"
            },
            {
                id:5,
                img:"https://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20.webp",
                name:"自清洁 | 米家互联网空调 1.5匹",
                brief:"变频节能省电，自清洁",
                price:"2399",
                priceold:"2699"
            },
            {
                id:6,
                img:"https://i8.mifile.cn/v1/a1/3bf41b04-1924-d627-ea2e-22e1d42bc2c0.webp",
                name:"Redmi全自动波轮洗衣机1A 8kg",
                brief:"一键操作，父母都爱用",
                price:"799",
                priceold:"899"
            },
        ],
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
  mounted(){
      window.addEventListener("scroll",this.menu)
  },
  methods:{
      menu(){
          this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      },
      totop(){
          document.documentElement.scrollTop=0
      },
      toplay(){
          if(this.num==1){
            this.num=2
          }
          else{
              this.num=1
          }
      },
      tosearch(){
          this.$router.push({
              path:"/search"
          })
      },
      todetail(id){
          if(id==1){
            this.$router.push({
              path:"/detail",
          })}
          else if(id==2){
              this.$router.push({
                  path:"/detail1"
              })
          }
          else if(id==3){
              this.$router.push({
                  path:"/detail2"
              })
          }
          else if(id==4){
              this.$router.push({
                  path:"/detail3"
              })
          }
      }
  },
  watch:{
      scroll(newVal){
          if(newVal>700){
              this.play=true
          }
          else{
              this.play=false
          }
      }
  }
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
  height: 0.84rem;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.top-bar-left{
    display: flex;
    height: 100%;
    align-items: center;
}
.img-logo {
  display:block;
  width: .6rem;
  margin: 0 .2rem;
  flex-shrink: 0;
}
.img-logo > img {
    display: block;
  width: 80%;
}
.top-bar-middle {
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: 0.3rem;
}
.middle-title {
  color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
    width: 100%;
    color: rgba(0,0,0,.3);
    background-color: #fff;
    border-radius: .04rem;
}

.middle-title > img {
    display: block;
  width: .6rem;
  height: .6rem;
}
.top-bar-right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
}
.top-bar-right-item{
   display: block;
    width: .6rem;
    margin: 0 .2rem;
    flex-shrink: 0;
}
.top-bar-right-item>img {
    display: block;
    width: 80%; 
}
.nav-wrap {
  position: relative;
  overflow: hidden;
}
.nav-display {
    position: absolute;
    right: 0;
    top: 0;
    width: .68rem;
    height: .55rem;
    line-height: .55rem;
    background-color: #f2f2f2;
    -webkit-box-shadow: -15px 0 15px 0 #f2f2f2;
    box-shadow: -15px 0 15px 0 #f2f2f2;
    z-index: 99;
}
.nav-display .image-icons {
    vertical-align: middle;
    width: .4rem;
    height: .4rem;
    display: inline-block;
    background-image:url("../assets/down.png") ;
    transform: rotate(0deg);
    transition: transform .2s linear,-webkit-transform .2s linear;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.nav-display .image-icons1 {
    vertical-align: middle;
    width: .4rem;
    height: .4rem;
    display: inline-block;
    background-image:url("../assets/down.png") ;
    transform: rotate(180deg);
    transition: transform .2s linear,-webkit-transform .2s linear;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.nav-item-layer{
    background-color: #f2f2f2;
    font-size: .28rem;
    text-align: left;
    padding: 0 .25rem;
    transition: max-height .3s ease-in-out;
    overflow: hidden;
}
.nav-item-layer .title{
    padding-top: .25rem;
}
.nav-item-layer .btn-wrap{
    margin-top: .34rem;
    display: flex;
    flex-wrap: wrap;
}
.btn-wrap .extra-btn.cur{
    background-color: #fde0d5;
    border-color: #ff6700;
    color: #ff6700;
}
.btn-wrap .extra-btn.mr-interval{
   margin-right: .2rem;
}
.btn-wrap .extra-btn{
   margin-bottom: .24rem;
    display: inline-block;
    width: 1.52rem;
    height: .56rem;
    text-align: center;
    line-height: .56rem;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    font-size: .25rem;
}
.nav {
    overflow-x: auto;
    background: #f2f2f2;
    font-size: .26rem;
    white-space: nowrap;
    z-index: 2;
}
.nav-item{
    display: inline-block;
    padding: 0 .25rem;
    color: #747474;
    font-weight: 500;
}
.nav-item span{
    display: inline-block;
    line-height: .55rem;
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
    height: 1.52rem;
}
.cells img{
    width: 20%;
    height: 100%;
}
.cells-dev{
    width: 7.2rem;
    height: 5.08rem;
    display: flex;
    position: relative;
    margin: 0 auto;
}
.cells-dev-left{
    width: 3.58rem;
    height:100%;
    position: absolute;
}
.cells-dev-left>a{
    display: block;
    width: 100%;
    height:100%;
}
.cells-dev-left>a>img{
    width: 100%;
    height:100%;
}
.cells-dev-right{
    width: 3.58rem;
    height:100%;
   position: absolute;
   left:3.62rem ;
}
.cells-dev-right>a{
    display: block;
    width: 100%;
    height:2.52rem;
}
.cells-dev-right>a>img{
    width: 100%;
    height:100%;
}
.line{
    height: 0.16rem;
    border-bottom: 0.16rem solid rgb(245, 245, 245);
    background-color:rgb(245, 245, 245);
}
.cells-tool{
    height: 2.8rem;
}
.cells-tool>a{
     height: 100%;
}
.cells-tool>a>img{
    width: 100%;
     height: 100%;
}
.cells-tool1{
    height: 4.4rem;
}
.cells-tool1>a{
     height: 100%;
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
    padding: 0 0.12rem;
    text-align: center;
    background: rgb(255, 255, 255);
    display: flex;
    flex-wrap: wrap;
}
.product-list>a{
    width: 3.4rem;
    margin:0 auto;
}
.product-list>a>.img{
    position: relative;
    overflow: hidden;
    width: 3.44rem;
    height: 2.8rem;
}
.img>img{
    width: 100%;
    height:100%;
}
.tag{
    position: absolute;
    bottom:0;
    right: 0;
    height: 1.2rem;
}
 .tag img {
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
.product-list-flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.product-list-flex a{
   width: 49.5%;
}
.product-list-flex .img{
    width: 100%;
    height: 3.6rem;
}
.img>img{
    width: 100%;
}
.product-list-flex .info{
    padding: .2rem .27rem;
    text-align: left;
}
.info .name{  
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .28rem;
    color: rgba(0,0,0,.87);
}
.info .brief{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .06rem;
    font-size: .22rem;
    line-height: .3rem;
    color: rgba(0,0,0,.54);
}
.info .price{
    font-size: .28rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
    position: relative;
    padding-left: .5em;
}
.price .price-old{
    margin: 0 .1rem;
    font-size: .22rem;
    color: rgba(0,0,0,.54);
}
.list-on{
    width: 7.2rem;
    margin: 0 auto;
}
.list-on>a{
    width: 100%;
    display: flex;
}
.list-on .img{
    width: 3.6rem;
    height: 3.6rem;
    position: relative;
    overflow: hidden;
}
.list-on img{
    width: 100%;
    height: 100%;
}
.list-on .info{
    padding: .64rem .12rem 0 .32rem;
    box-sizing: border-box;
    width: 3.6rem;
    height: 3.6rem;
}
.info .briefwrap{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .06rem;
    font-size: .22rem;
    line-height: .3rem;
    color: rgba(0,0,0,.54);
}
.list-on1{
    width: 7.2rem;
    margin: 0 auto;
}
.list-on1>a{
    width: 100%;
    display: flex;
   
}
.list-on1 .info{
    width: 3.6rem;
    padding: .64rem 0 0 .12rem;
}
.list-on1 .img{
    width:3.6rem;
    height: 3.6rem;
    position: relative;
    overflow: hidden;
}
.cells-auto{
    width: 7.2rem;
    height: 4.8rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.cells-auto>a{    
    width: 3.58rem;
    height: 100%;
}
.cells-auto img{
    width: 100%;
    height: 100%;
}
.divider-line{
    height: 0.04rem;
    border-bottom: 0.04rem solid rgb(245, 245, 245);
    background-color: rgb(245, 245, 245);
}
.cells-fill{
    width: 100%;
    height: 1.06rem;
}
.cells-fill>a{
    display: block;
    width: 100%;
    height: 100%;
}
.cells-fill img{
    width: 100%;
    height: 100%;
}
.fixed-bar{
    position: fixed;
    z-index: 997;
    bottom: 1.4rem;
    right: .26rem;
}
.fixed-bar a{
    display: block;
    width: 1.12rem;
    height: 1.12rem;
    margin: .1rem auto 0;
}
.fixed-bar .top{
    width: .7rem;
    height: .7rem;
}
.fixed-bar img{
    width: 100%;
    height: 100%;
}
.top>img{
    display: block;
}
</style>
