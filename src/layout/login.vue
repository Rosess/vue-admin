<template>
  <div class="wrapper">
    <div class="login-container">
      <img :src="logo" alt="Vue">
      <form @submit.prevent="">
        <div class="input-wrapper">
          <i icon="user" class="input-icon"></i>
          <input type="text" placeholder="请输入帐号" v-model="">
        </div>
        <div class="input-wrapper">
          <i icon="key" class="input-icon"></i>
          <input type="password" placeholder="请输入密码" v-model="">
        </div>
        <div class="error" v-show="">

        </div>
        <button v-if="" class="button disabled">
          <i icon="pulse spinner"></i>
        </button>
        <button v-if="" class="button disabled">
          登录 <i icon="check"></i>
        </button>
        <button
            v-else v-if=""
            type="submit"
            class="button">
          登录
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @theme-color: #1ab394;
  @theme-success-color: #1c84c6;
  @theme-info-color: #21b9bb;
  @theme-warning-color: #f8ac59;
  @theme-error-color: #ec4758;

  .wrapper {
    position: fixed;
    top: 45%;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .login-container {
    width: 320px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: #f3f3f3;
    transform: translateY(-50%);
  }
  img {
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .input-wrapper, .button {
    display: block;
    width: 100%;
    height: 2.5em;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .input-wrapper {
    position: relative;
    background-color: white;
    line-height: 2.5;
    > .input-icon {
      width: 2.5em;
      text-align: center;
      vertical-align: middle;
    }
    > input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-left: 2.5em;
      padding-right: 1em;
      border: 1px solid #eee;
      border-radius: 1px;
      background-color: transparent;
      transition-property: border-color, box-shadow;
      transition-duration: 0.15s;
      &:focus {
        border-color: @theme-color;
      }
    }
  }
  .error {
    margin-top: -10px;
    margin-bottom: -10px;
    text-align: right;
    color: @theme-error-color;
  }
</style>
