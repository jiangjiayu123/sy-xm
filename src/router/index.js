import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/Home.vue'
import search from "../components/search.vue"


// 引入购物车
import micart from "../components/miCart.vue"
import detail from "../components/detail.vue"
import denglu from "../components/DengLu.vue"
import detail1 from "../components/detail1.vue"
import detail2 from "../components/detail2.vue"
import detail3 from "../components/detail3.vue"
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/search',
    component:search
  },
  {
    path:'/detail',
    component:detail
  },
  {
    path:'/detail1',
    component:detail1
  },
  {
    path:'/detail2',
    component:detail2
  },
  {
    path:'/detail3',
    component:detail3
  },
  {
    path:"/denglu",
    component:denglu
  },

  // 小米购物车的路由
  {
    path:"/micart",
    component:micart
  }
]

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
});

export default router;
