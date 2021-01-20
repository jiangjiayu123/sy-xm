<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a class="product-item" v-for="item in list" :key="item.id">
                    <div class="product-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="product-name">{{item.name}}</div>
                    <div class="product-price price">
                        ￥{{item.price}}起
                        <div class="price-old">
                            <del>￥{{item.old}}</del>                           
                        </div>
                    </div>
                </a>
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
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?w=800&h=800",
                    name:"Redmi K30 5G，双模5G 高帧率流速屏",
                    price:"1599",
                    old:"2299"
                },
                {
                    id:2,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?w=800&h=800",
                    name:"Redmi K30 5G，双模5G 高帧率流速屏",
                    price:"1599",
                    old:"2299"
                },
                {
                    id:3,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?w=800&h=800",
                    name:"Redmi K30 5G，双模5G 高帧率流速屏",
                    price:"1599",
                    old:"2299"
                },
                {
                    id:4,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?w=800&h=800",
                    name:"Redmi K30 5G，双模5G 高帧率流速屏",
                    price:"1599",
                    old:"2299"
                },
                {
                    id:5,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?w=800&h=800",
                    name:"Redmi K30 5G，双模5G 高帧率流速屏",
                    price:"1599",
                    old:"2299"
                },
                {
                    id:6,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?w=800&h=800",
                    name:"Redmi K30 5G，双模5G 高帧率流速屏",
                    price:"1599",
                    old:"2299"
                }
            ]
        }
    }
}
</script>
<style scoped>
.swiper-container{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.swiper-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
}
.product-item{
    display: block;
    margin-bottom: .35rem;
    width: 2.08rem;
}
.product-item:not(:nth-child(3n)){
    margin-right: .15rem;
}
.product-img{
    display: block;
    margin-bottom: .16rem;
    height: 2.08rem;
    border-radius: .16rem;
    background-color: #f7f7f7;
    overflow: hidden;
}
.product-img>img{
    width: 100%;
    display: block;
}
.product-name{
    margin-bottom: .09rem;
    font-size: .24rem;
    line-height: 1.5em;
    height: 3em;
    text-align: left;
    color: #000;
    text-overflow: ellipsis;
    overflow: hidden;
}
.product-price{
    display: flex;
    padding-left: .65em;
    font-size: .24rem;
    text-align: left;
    font-weight: 600;
    color: #ff6700;
}
.price-old{
    margin-left: .08rem;
    font-size: .2rem;
    color: rgba(0,0,0,.3);
    text-decoration: line-through;
    font-weight: 400;
}
</style>