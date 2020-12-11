import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入movie等其他路由
import Movie from './movie'
import Mine from './mine'
import Cinema from './cinema'
Vue.use(VueRouter)

const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
    //使用movie等其他路由
    Movie,
    Mine,
    Cinema,
    {
        // 重定向：当路由不匹配时，把路由指向movie
        path: '/*',
        redirect:'/movie'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
