<template>
  <div id='main'>
    <Header title="我的喵喵"/>
        <div id="content">
            <Login/>
        </div>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import TabBar from '@/components/TabBar/TabBar.vue'
import Login from '@/components/Login/Login.vue'

export default {
  name: 'mine',
  components: {
    Header,
    TabBar,
    Login
  }
}
</script>

<style lang='scss' scoped>
</style>