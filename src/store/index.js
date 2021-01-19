import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     medenglu:true,
     seen:false,
     appearDe:true,
     showDengLu:true,
     componentName:"secondtab",
     goodsList: [
      {
          id: 1,
          img: "../images/饮水机.jpg",
          name: "小米净水器600G 白色",
          price: 1698,
          img2: "../images/保.jpg",
          name2: " 换新延保1年 99元",
          flag: true,
          num: 1,
          showBei: 0,
      },
      {
          id: 2,
          img: "../images/饮水机.jpg",
          name: "小米净水器600G 白色dww dw dw dwdw ",
          price: 1698,
          img2: "../images/保.jpg",
          name2: " 换新延保1年 99元",
          flag: true,
          num: 1,
          showBei: 0,
      },
      {
          id: 3,
          img: "../images/饮水机.jpg",
          name: "小米净水器600G 白色dwdw dw ",
          price: 1698,
          img2: "../images/保.jpg",
          name2: " 换新延保1年 99元",
          flag: true,
          num: 1,
          showBei: 0,
      },
  ],
      allPrices: 0,
      count: 0,
      gouwuche: true,

  },
  mutations: {
    checkedPsd(state){
        state.medenglu=false;
        state.seen =false;
        state.appearDe=false;
        state.showDengLu=false;
      
        // console.log("登陆失败")
    },
    btndengLu(state){
      if(state.medenglu==true){
          state.seen=true;
      }
     
      if(state.medenglu==false){
          state.seen=false
      }
    },
    btnNoPromise(state){
       state.seen=false
    },
    bottomBarClick(state,name){
        state.componentName = name;
    },
    count(state){
        state.countA = state.count
    }
  },
  actions: {
  },
  modules: {
  }
})
