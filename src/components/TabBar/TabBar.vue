<template>
  <div class='tabBar'>
     <ul>
         <!-- 把router-link 渲染成li标签 -->
         <router-link tag="li" to="/movie" >
             <i class="iconfont icon-dianying"></i>
             <p>电影</p>
         </router-link>
         <router-link tag="li" to="/cinema">
             <i class="iconfont icon-yingyuan "></i>
             <p>影院</p>
         </router-link>
         <router-link tag="li" to="/mine">
             <i class="iconfont icon-wode "></i>
             <p>我的</p>
         </router-link>
     </ul>
  </div>
</template>

<script>
  export default {
      name:'TabBar'
}
</script>

<style lang='scss' scoped>

.tabBar{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
.tabBar ul{ display: flex; text-align: center; height:50px; align-items:center;}
.tabBar ul li{ flex:1; height:40px;}
.tabBar ul li.active{ color: #f03d37;}
// .router-link-active的样式即可改变选中状态
.tabBar ul li.router-link-active{color: #f03d37;}
.tabBar ul i{ font-size: 20px;}
.tabBar ul p{ font-size: 12px; line-height: 18px;}
</style>