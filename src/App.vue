<template>
<!-- keep-alive防止切换路由时，页面重新加载而导致性能下降 
    第一次加载完毕之后，进行缓存的操作
 -->
    <keep-alive>
        <router-view/>
    </keep-alive>
  
</template>


