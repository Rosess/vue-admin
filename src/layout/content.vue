<template lang="html">
  <section class="content-wrapper">
    <!-- 路由外链 -->
    <router-view></router-view>
  </section>
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

<style lang="css">
.content-wrapper {
  position: absolute;
  top: 50px;
  left: 200px;
  right: 0;
  bottom: 0;
}
</style>
