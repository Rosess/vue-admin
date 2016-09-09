<template>
  <div class="container">
    <!-- <container container-class="center-box"> -->
      <div class="not-found">
        <h1 class="header">啊哦~当前页面无法访问</h1>
        <div class="digital">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <a v-link="'/'" class="button theme">返回主页</a>
      </div>
    <!-- </container> -->
  </div>
</template>

<!-- <style lang="less" src="components/button/button.less"></style> -->
<style lang="less" scoped>
  .not-found {
    text-align: center;
    color: red;
  }

  .header {
    font-size: 32px;
    font-weight: normal;
  }
  .digital {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    > span {
      display: inline-block;
      margin-left: 5px;
      margin-right: 5px;
      padding: 10px 30px;
      background-color: #333;
      font-size: 120px;
      color: white;
    }
  }
  .button {
    display: inline-block;
    width: 180px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: white;
  }
</style>
