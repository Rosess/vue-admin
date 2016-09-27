<template>
  <header-layout></header-layout>
  <section class="body-wrapper">
    <sidebar-layout></sidebar-layout>
    <section class="content-wrapper">
      <!-- 路由外链 -->
      <router-view></router-view>
    </section>
    <footer-layout></footer-layout>
  </section>
</template>

<script>
import Header from 'layout/header'
import SideBar from 'layout/sidebar'
import Content from 'layout/content'
import Footer from 'layout/footer'

export default {
  components: {
    'header-layout': Header,
    'sidebar-layout': SideBar,
    'content-layout': Content,
    'footer-layout': Footer
  }
}
</script>

<style lang="less" src="src/assets/styles/base.less"></style>
<style scoped>
  .body-wrapper {
    position: relative;
    display: flex;
    min-height: calc(100vh - 0px);
    /*得到取100%身高*/

    padding-top: 45px
  }
  .content-wrapper {
    flex: 1;
  }
</style>
