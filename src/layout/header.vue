<template>
  <header class="header-wrapper">
    <a v-link="{path: '/'}">Vue Admin</a>
    <div class="header-items">
      登录
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    line-height: 45px;
    display: flex;
    padding: 0 20px;
    background-color: #438EB9;
  }
  .header-wrapper a{
    color: #FFF;
    font-size: 22px;
    text-shadow: none;
  }
  .header-items {
    /*flex: 1;*/
    justify-content: flex-end;
    box-flex: 1;
    flex: auto;
  }
</style>
