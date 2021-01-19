<template>
    <div class="wrapper">
         <a class="help_center" href="https://account.xiaomi.com/helpcenter/"></a>
        <div class="wrapper-content">
            <div class="wrap-top">
               <div class="lgnheader">
                   <div class="header_tit">
                       <p class="header-photo"></p>
                       <p class="header-title">小米帐号登录</p>
                   </div>
               </div>
               <div class="psd">
                   <div class="user-id">
                       <p class="user-tishi">+86</p>
                       <p class="user-photo"></p>
                       <input type="number" placeholder="手机号码" class="name-input" v-model="message">
                       <p class="del-item" v-show="message" @click="delPhoto"></p>
                   </div>
                   <div class="user-psd user-item">
                       <input type="number" placeholder="短信验证码" class="psd-input" v-model="msg">
                       <p class="huoqu">获取验证码</p>
                   </div>
                   <div class="tip-phone" v-show="seen">
                           <p class="tip-phone-01"></p>
                           <p class="tip-phone-02">请输入手机号</p>
                    </div>
                    <div class="tip-phone" v-show="see">
                          <p class="tip-phone-01"></p>
                          <p class="tip-phone-02">手机号格式不正确</p>
                    </div>
                    <div class="tip-phone" v-show="seenlook">
                          <p class="tip-phone-01"></p>
                          <p class="tip-phone-02">请输入短信验证码</p>
                    </div>
                     <div class="tip-phone" v-show="duanxin">
                          <p class="tip-phone-01"></p>
                          <p class="tip-phone-02">短信验证码不正确</p>
                    </div>
                   <div class="btnadpt" @click="checkedPsd">
                            立即登录/注册
                   </div>
                   <div class="btnByname">
                            用户名密码登录
                   </div>
                   <p class="tips">收不到验证码?</p>
                   <div class="other-way">
                       <fieldset class="oth_type_tit">
                           <legend class="oth_type_txt">
                               其他方式登录
                           </legend>
                       </fieldset>
                       <div class="oth_type_links">
                           <a href="">
                               <span class="icon-other"></span>
                           </a>
                           <a href="">
                               <span class="icon-other-01"></span>
                           </a>
                           <a href="">
                               <span class="icon-other-02"></span>
                           </a>
                           <a href="">
                               <span class="icon-other-03"></span>
                           </a>
                       </div>
                   </div>

               </div>
            </div>
            <div class="wrap-bottom">
                <ul class="item ">
                    <li class="item1">简体
                        <span class="item-01">|</span>
                    </li>
                    <li>繁体
                        <span class="item-01">|</span>
                    </li>
                    <li>English
                        <span class="item-01">|</span>
                    </li>
                    <li>常见问题
                        <span class="item-01">|</span>
                    </li>
                    <li>隐私政策</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                message:"",
                msg:"",
                seen:false,//提示请输入手机号
                see:false,//提示手机号格式不正确
                seenlook:false,//提示请输入短信
                chuxian:false, //输入手机号时显示
                duanxin:false, //提示短信验证
            }
        },
        watch:{
            message(newVal){
                if(newVal != ""){
                     this.chuxian =true
                }
                 if((/^1[3456789]\d{9}$/.test(newVal)) && (newVal !="")){
                    this.seen=false;//提示请输入手机号
                    this.see=false;
                }
                if(newVal ==""){
                    this.seen=false;//提示请输入手机号
                    this.see=false;
                }
            },
            msg(newVal){
                if((this.message == "")  &&newVal == ""){
                    this.seen=false;
                    this.seenlook=false
                }
                if((/^[0-9]{6}$/.test(this.msg))){
                    this.duanxin=false
                }
            }
        },
        methods:{
            checkedPsd(){
                console.log(this.message);
                if(!(/^1[3456789]\d{9}$/.test(this.message)) && (this.message !="")){ 
                    this.see = true;
                    this.seen=false;
                    console.log("手机号格式错误")      
                }if(this.message==""){
                   this.seen =true;
                   this.see=false;
                }
                if((/^1[3456789]\d{9}$/.test(this.message)) && (this.msg =="")){
                    console.log("手机号码验证正确");
                    this.seenlook=true;
                }
                if(this.msg !=""){
                   this.seenlook=false
                }
                if((/^1[3456789]\d{9}$/.test(this.message)) && (this.msg !="")){
                    // this.$router.go(-1);
                }
                if(!(/^[0-9]{6}$/.test(this.msg))&&(this.msg !="") && (/^1[3456789]\d{9}$/.test(this.message))){
                        this.seen=false,//提示请输入手机号
                        this.see=false,//提示手机号格式不正确
                        this.seenlook=false,//提示请输入短信
                        this.duanxin= true //提示短信验证
                }if(this.msg == ""){
                    this.duanxin= false
                }
                if((/^1[3456789]\d{9}$/.test(this.message)) &&(/^[0-9]{6}$/.test(this.msg))){
                    this.seen=false,//提示请输入手机号
                    this.see=false,//提示手机号格式不正确
                    this.seenlook=false,//提示请输入短信
                    this.duanxin= false,//提示短信验证
                    this.$router.go(-1);
                    this.$store.commit("checkedPsd");
                }

            },
            delPhoto(){
                this.message="";
            }
        }
    }
</script>

<style scoped>
*{
      user-select: none;
}
.wrapper{
    min-height: 100%;
    height: auto;
}
.wrapper-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
}
.wrap-top{
    width: 100%;
    height: 80%;
}
.help_center{
    background: url(../assets/images/问号.png);
    background-size: 100% 100%;
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    right: 0.08rem;
    top: 0.17rem;
    z-index: 978;
}
a {
    color: #9b9b9b;
}
.header_tit{
    font-size:.4rem;
    width: 100%;
    height: 2.3rem;
    padding: .52rem 0 0;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
}
.header-photo{
    height: 60%;
    width: 100%;
    background-image: url(../assets/images/milogo.png);
    background-repeat: no-repeat;
    background-size:0.9rem 0.9rem;
    background-position:center center
}
.header-title{
    height: 30%;
    width: 100%;
    text-align: center;
}
.psd{
    width: 90%;
    height: 8rem;
    margin: .3rem auto;
    /* background-color: pink; */
}
.user-id,.user-psd{
    display: flex;
    flex-direction:row;
    align-items: center;
    border-bottom:1px solid #9b9b9b;
}
.user-item{
    margin-top:.4rem
}
.user-tishi{
    margin-right: 2px;
    color: #9b9b9b;
    font-size: .35rem;
    line-height: .2rem;
}
.user-photo{
    background-image: url(../assets/images/小箭头登陆提示.png);
    background-size:cover;
    width:0.5rem;
    height: 0.5rem;
    margin-right: 0.2rem;
}
.name-input ,.psd-input{
    width: 100%;
    padding: .16rem 0;
    line-height: normal;
    display: block;
    font-size: .35rem;
    border:transparent;
    display: block;
    height: 100%;
    outline:none
}
.huoqu{
    cursor: pointer;
    color: #0d84ff;
    font-size: .3rem;
    line-height: .2rem; 
    width:3rem
}
.btnadpt,.btnByname{
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    text-align: center;
    font-size: .35rem;
    color: #fff;
    font-weight: bold;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    overflow: hidden;
    margin-top:.5rem;
}
.btnadpt{
    background-color: #ff6700;
}
.btnByname{
    background: rgba(0,0,0,.06);
    color: rgba(0,0,0,.8);
}
.tips{
    font-size: .3rem;
    color:#9b9b9b;
    text-align: center;
}
.other-way{
    padding-top: 0.9rem;
    text-align: center;
}
.oth_type_tit{
    border:none;
    border-top: 1px solid #f2f2f2;
    padding-top: 10px;
}
.oth_type_txt{
    font-size: .12rem;
    color: #b0b0b0;
    width: 80px;
}
.oth_type_links{
    width: 4rem;
    height: 0.1rem;
    margin: 0.4rem auto;
    display:flex;
    justify-content:space-around;
    align-items: center;
}
.icon-other,.icon-other-01,.icon-other-02,.icon-other-03{
    display: inline-block;
    width:0.7rem;
    height: 0.7rem;
    background-size: cover;
}
.icon-other{
    background-image:url(../assets/images/微博.png);
}
.icon-other-01{
    background-image:url(../assets/images/支付宝.png);
}
.icon-other-02{
     background-image:url(../assets/images/微信.png);

}
.icon-other-03{
    background-image:url(../assets/images/苹果.png);
}
.item{
    width:90%;
    height:1rem;
    font-size:0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    margin:0 auto;
    margin-top: .4rem;
    color: #9b9b9b;
}
.item-01{
    padding: 0 .2rem;
}
.item1{
    color:#4a4a4a ;
}
.tip-phone{
    margin-top: .3rem;
    height: .5rem;
    font-size: .3rem;
    display: flex;
    color:#f66;
    align-items: center;
}
.tip-phone-01{
    background-image: url(../assets/images/感叹号.png);
    width: .3rem;
    height: .3rem;
    border-radius:50%;
    background-size: cover;
}
.tip-phone-02{
    margin-left:.1rem
}
.del-item{
    background-image: url(../assets/images/删除.png);
    width: .6rem;
    height: .4rem;
    border-radius:50%;
    background-size: cover;
    margin-right: 0.2rem;
}
</style>