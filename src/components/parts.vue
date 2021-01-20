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
                        ￥{{item.price}}
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
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfc2c8f35254efe16be2e2150d147846.jpg?f=webp",
                    name:"Redmi K30定制版 黑鲨双翼手柄-左手支架套装",
                    price:"179",
                },
                {
                    id:2,
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/3c114987-43d5-f6d3-d2f4-8b86dd90a55d.jpg",
                    name:"小米活塞耳机 清新版",
                    price:"29",
                },
                {
                    id:3,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9411fdd151581840ea291ab1abcb8fef.jpg?f=webp",
                    name:"小米移动电源3 10000mAh 快充版",
                    price:"79",
                },
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