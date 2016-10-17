<template lang="html">
  <aside class="sidebar-wrapper">
    <ul class="sidebar-content">
      <!-- 使用指令 v-link 进行导航。 -->
      <li><a v-link="{ path: '/' }">主页</a></li>
      <li><a v-link="{ path: '/img' }">图片</a></li>
      <li><a v-link="{ path: '/not-found' }">找不到</a></li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
    </ul>
  </aside>
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
  .sidebar-wrapper {
    width: 200px;
    background-color: #f2f2f2;
    color: #585858;
    min-height: calc(100vh - 45px);
  }
  .sidebar-content {
    padding: 10px 20px;
  }
</style>
