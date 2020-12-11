<template>
  <div id='main'>
    <Header title="喵喵影院"/>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城<i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand_switch">
                    品牌<i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature_switch">
                    特色<i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
            <CinemaList/>
        </div>
    <TabBar />
  
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import TabBar from '@/components/TabBar/TabBar.vue'
import CinemaList from '@/components/CinemaList/CinemaList.vue'


export default {
  name: 'cinema',
  components: {
    Header,
    TabBar,
    CinemaList
  }
}
</script>

<style lang='scss' scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>