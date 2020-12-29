import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

//全局过滤器，自定义图片的宽高 url地址 arg是指定参数
Vue.filter('setWh', (url, arg) => {
    // .要转义 => \.
    return url.replace(/w\.h/, arg)
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
