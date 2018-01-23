<template>
  <transition name="fade">
    <div class="toast-main" v-show="isShow">
      <div class="toast-con">
        <div class="toast-message">{{message}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      message: '',
    };
  },
};
</script>

<style lang ="postcss">
.toast-main {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  .toast-con {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    .toast-message {
      display: inline-block;
      max-width: 90%;
      padding: 0.2rem 0.3rem;
      border-radius: 0.1rem;
      line-height: 0.24rem;
      background: rgba(0, 0, 0, 0.6);
      overflow: hidden;
      font-size: 0.14rem;
      color: #fff;
    }
  }
}

</style>

