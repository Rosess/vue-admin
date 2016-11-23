<template>
  <div class="dropdown">
    <ul class="dropdown-menu">
      <li class="dropdown-tittle">4 Tasks to complete</li>
      <li></li>
      <li class="dropdown-footer">查看更多详细</li>
    </ul>
    <span class="dropdown-arrow"></span>
  </div>
</template>

<script>
export default {
  name: 'drop-view',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  .dropdown-menu {
    width: 200px;
    position: absolute;
    top: 45px;
    right: 0;
    background-color: #ccc;
  }
  .dropdown-tittle {
    font-weight: 200;
  }
  .dropdown-arrow {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #ccc;
    position: absolute;
    transform: rotate(45deg);
    bottom: -10px;
    z-index: 100px;
  }
</style>
