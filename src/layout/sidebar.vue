<template lang="html">
  <aside class="sidebar-wrapper">
    <section>
      <ul>
        <!-- 使用指令 v-link 进行导航。 -->
        <li><a v-link="{ path: '/' }">主页</a></li>
        <li><a v-link="{ path: '/notfound' }">找不到</a></li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ul>
    </section>
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
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0px;
    background-color: #222;
    color: #fff;
    padding: 10px 20px;
  }
</style>
