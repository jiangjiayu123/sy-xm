<template>
    <div class="app-view-wrapper">
        <div class="app-search-page app-view">
            <div class="app-search-head">
                <div class="app-search-head-input">
                    <div class="app-search">
                        <a href="" class="header-btn" @click="toreturn"><img src="../assets/return.png" alt=""></a>
                            <input type="search" placeholder="搜索商品名称">
                        <a href="" class="header-btn1"><img src="../assets/search.png" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="tabs">搜索发现</div>
                <div class="ad">
                    <a href="">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ae6427f253154abf900b627dd0964da.jpg?w=984&h=160&bg=EDFCFF" alt="">
                    </a>
                </div>
                <div class="discovery">
                    <div class="discovery-left">
                        <div><a href=""><span>小米11</span></a></div>
                        <div><a href=""><span>手机选购指南</span>
                        <img src="https://m.mi.com/static/img/huodong.0318375176.png" alt=""></a></div>
                        <div><a href=""><span>小米10</span></a></div>
                        <div><a href=""><span>电视</span>
                        <img src="https://m.mi.com/static/img/fenlei.2766adca02.png" alt=""></a></div>
                        <div><a href=""><span>全部商品</span></a></div>
                    </div>
                     <div class="discovery-right">
                        <div><a href=""><span>笔记本</span></a></div>
                        <div><a href=""><span>Note 9</span></a></div>
                        <div><a href=""><span>耳机</span></a></div>
                        <div><a href=""><span>家电</span>
                        <img src="https://m.mi.com/static/img/fenlei.2766adca02.png" alt=""></a></div>
                        <div><a href=""><span>加湿器</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toreturn(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.app-view-wrapper{
    position: relative;
    max-width: 7.2rem;
    margin: 0 auto;
}
.app-view{
    background: #fff;
    color: #3c3c3c;
}
.app-search-page{
    padding-top:.8rem ;
}
.app-search-head{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    background: #f2f2f2;
}
.app-search-head-input{
    width: 100%;
}
.app-search{
    height: .8rem;
    width: 100%;
    display: flex;
    align-items: center;
}
.app-search .header-btn{
    margin: .2rem .2rem;
    color: #666;
}
.header-btn>img{
    display: block;
     width: .5rem;
    height: .5rem;
}
.app-search .header-btn1{
    margin: 0 .2rem;
    color: #666;
}
.header-btn1>img{
    display: block;
     width: .7rem;
    height: .7rem;
}
input{
   border: 1px solid #e5e5e5;
    border-radius: .04rem;
    width: 100%;
    padding: 0 .5rem 0 .2rem;
    outline: 0;
    font-size: .3rem;
    font-weight: 400;
    height: .5rem;
    line-height: normal;
}
.content{
    padding: .4rem .32rem;
    text-align: left;
}
.content .tabs{
    font-size: .28rem;
    line-height: .28rem;
    font-weight: 700;
    margin-bottom: .32rem;
}
.ad{
    margin-bottom: .31rem;
}
.ad a{
    display: inline-block;
}
.ad img{
    width: 6.56rem;
    height: 1.07rem;
    border-radius: .16rem;
}
.content .discovery{
    padding-left:.24rem;
    display: flex;
}
.discovery div{
    width: 100%;
    margin-bottom: .35rem;
    font-size: .24rem;
}
.discovery a{
    display: flex;
    width: 100%;
}
.discovery span{
    color: black;
}
.discovery div img{
    width: .51rem;
    height: .25rem;
    margin-left: .1rem;
    margin-bottom: .02rem;
}
</style>
