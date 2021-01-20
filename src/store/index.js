import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     medenglu:true,
     seen:false,
     appearDe:true,
     showDengLu:true,
     componentName:"firsttab",
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
  ],
      allPrices: 0,
      count: 1,
      gouwuche: true,

  },
  mutations: {
    increase(state,item){
        let index=-1
        for(let i=0;i<state.goodsList.length;i++){
            if(item.name==state.goodsList[i].name){
                index=i
            }            
        }
        if(index>-1){
            state.goodsList[index].num++
        }
        else{                
            state.goodsList.push({
                img:item.img,
                name:item.name,
                price:item.price,
                num:item.num,
                img2:item.img2,
                name2:item.name2,
                flag:item.flag,
                showBei:item.showBei
            })
        
    }
    },
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
    Goodjian(state,index){
        state.goodsList[index].num--;
        if (state.goodsList[index].num <= 1) {
            state.goodsList[index].num = 1;
            state.goodsList[index].showBei = 0;
        }        
    },
    Goodjia(state,index){
        state.goodsList[index].num++;
        if(state.goodsList[index].num >= 2) {
            state.goodsList[index].showBei = 1;
                
        }
    },
    deleteItem(state,index){
        state.goodsList.splice(index, 1);
    },
    btnNoPromise(state){
       state.seen=false
    },
    bottomBarClick(state,name){
        // state.showxiantiao = !state.showxiantiao
        state.componentName = name;
    },
    count(state){
        state.countA = state.count
    }
  },
})
