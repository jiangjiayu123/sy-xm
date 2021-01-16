import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/Home.vue'
import search from "../components/search.vue"


// 引入购物车
import micart from "../components/miCart.vue"
import detail from "../components/detail.vue"
import denglu from "../components/DengLu.vue"
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
    routes
});

export default router;
