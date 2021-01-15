import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     medenglu:true,
     seen:false,
     appearDe:true

  },
  mutations: {
    checkedPsd(state){
        state.medenglu=false;
        state.seen =false;
        state.appearDe=false;
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
    }


  },
  actions: {
  },
  modules: {
  }
})
