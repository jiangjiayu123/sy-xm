<template>
    <div class="tab-item">
        <div class="goods-tpl-data">
            <div class="section" v-for="item in list" :key="item.id">
                <div class="img">
                    <img :src="item.img" alt="">
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
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c38fa144723422ab70fb0166e44dcbb.jpg?w=1080&h=1353&bg=FFFFFF"
                },
                {
                    id:2,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8bce2b69a614b71ba9ea4fd7d6c5c4e0.jpg?w=1080&h=872&bg=FFFFFF"
                },
                {
                    id:3,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b43e6fac65ee31fc3f7bd62866071ce.jpg?w=1080&h=1196&bg=FFFFFF"
                },
                {
                    id:4,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/102117290fea5253acb65f4e286b3a3e.jpg?w=1080&h=1542&bg=FFFFFF"
                },
                {
                    id:5,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f42de9e26d60deaeea1b4acebe5fa6e8.jpg?w=1080&h=1118&bg=FFFFFF"
                },
                {
                    id:6,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b2680538add009c13c0a232f70f3bee.jpg?w=1080&h=692&bg=FFFFFF"
                },
                {
                    id:7,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13fc74327d08bdb2d4e36ebad00aa56b.jpg?w=1080&h=1637&bg=FFFFFF"
                },
                {
                    id:8,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afb1bb572af783be0d81b25095d1c97b.jpg?w=1080&h=1676&bg=FFFFFF"
                },
                {
                    id:9,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5956e3392bcc20aa15ec17ac8bb071ef.jpg?w=1080&h=1060&bg=FFFFFF"
                },
                {
                    id:10,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ca0a7c07147e9b7f8058d2942fdeef9.jpg?w=1080&h=737&bg=FFFFFF"
                },
                {
                    id:11,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57893a5cf444694aeeff82291333a59b.jpg?w=1080&h=1794&bg=FFFFFF"
                },
                {
                    id:12,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29c68bc6fb8cccb19e6e702532894eaa.jpg?w=1080&h=749&bg=FFFFFF"
                },
                {
                    id:13,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/114194581958b49bde15831445edf9b6.jpg?w=1080&h=1200&bg=FFFFFF"
                },
                {
                    id:14,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/209b4a20d335fbae3d1f4c73dd55431a.jpg?w=1080&h=1630&bg=FFFFFF"
                },
                {
                    id:15,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cb9b9e2e43ffa4d2542fa5efb84da01.jpg?w=1080&h=606&bg=FFFFFF"
                },
                {
                    id:16,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74f887a82f63d55260be8a27414320a3.jpg?w=1080&h=482&bg=FFFFFF"
                },
                {
                    id:17,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc669047c20fec02ca836051d59db6ac.jpg?w=1080&h=607&bg=FFFFFF"
                },
                {
                    id:18,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba035c7a189fde246fd10cc015e8793b.jpg?w=1080&h=479&bg=FFFFFF"
                },
                {
                    id:19,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/980b2949f77881d3dd59c5341e08db11.jpg?w=1080&h=483&bg=FFFFFF"
                },
                {
                    id:20,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab0cda247f61f086b4a2710cd038450e.jpg?w=1080&h=478&bg=FFFFFF"
                },
                {
                    id:21,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e062baf0decafd354e70ed5b97e2cd48.jpg?w=1080&h=1075&bg=FFFFFF"
                },
                
            ]
        }
    }
}
</script>
<style scoped>
.line{
    height: 0.16rem;
    background: rgb(0, 0, 0);
}
.img{
    width: 7.2rem;
}
.img>img{
    display: block;
    width: 100%;
    height: auto;
}
</style>