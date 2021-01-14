import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/Home.vue';

// 引入登录路由
import DengLu from '../components/DengLu.vue';
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:"/denglu",
    component: DengLu
  }
]

const router = new VueRouter({
    routes
});

export default router;
