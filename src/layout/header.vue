<template>
  <header class="header-wrapper">
    <a v-link="{path: '/'}">Vue Admin</a>
    <div class="header-items">
      <ul class="nav ace-nav">
        <li><i class="ace-icon fa fa-tasks"></i></li>
        <li><i class="ace-icon fa fa-bell"></i></li>
        <li><i class="ace-icon fa fa-envelope"></i></li>
      </ul>
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
    justify-content: flex-end;
    box-flex: 1;
    flex: auto;
  }
  .nav {
    float: right;
  }
  .nav li {
    float: left;
    width: 40px;
    color: #fff;
    font-size: 16px;
  }
</style>
