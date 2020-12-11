export default {
    path: '/movie',
    component: () => import('@/views/Movie/movie.vue'),
    // 设置二级路由
    children: [
        {
            // 这里path不用加斜杠
            path: 'city',
            component:()=>import('@/components/City/City.vue')
        },
        {
            path: 'now',
            component:()=>import('@/components/Now/Now.vue')
        },
        {
            path: 'coming',
            component: () => import('@/components/Coming/Coming.vue')
        },
        {
            path: 'search',
            component: () => import('@/components/Search/Search.vue')
        },
        {
            //重定向:当页面为movie时，指向正在热映
            path: '/movie',
            redirect:'/movie/now'
        }
    ]
}