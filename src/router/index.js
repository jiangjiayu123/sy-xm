import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/Home.vue'
import search from "../components/search.vue"
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
    path:'/denglu',
    component:denglu
  }
]

const router = new VueRouter({
    routes
});

export default router;
