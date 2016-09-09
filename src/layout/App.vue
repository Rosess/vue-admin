<template>
<div id="app">
  <!-- <section class="wrapper"> -->
    <header-layout></header-layout>
    <sidebar-layout></sidebar-layout>
    <content-layout></content-layout>
    <footer-layout></footer-layout>
  <!-- </section> -->
</div>
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
