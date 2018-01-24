<template>
  <transition name="fade">
    <div :class="['toast-main', `toast-${position}`]" v-show="isShow">
      <div class="toast-con">
        <div class="toast-message">
          <span :class="['toast-icon', `toast-${icon}`]"></span>  {{message}}
        </div>
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
      position: '',
      duration: 0,
      icon: '',
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
    left: 0;
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
      .toast-icon{
        &.toast-sucess,
        &.toast-error{
          width: .3rem;
          height: .3rem;
          display: inline-block;
          margin-right:.04rem;
        }
        &.toast-error {
          vertical-align: bottom;
        }
        &.toast-sucess:after{
          content:'';
          display: inline-block;
          width: .1rem;
          height: .25rem;
          border: 2px solid greenyellow;
          transform: rotate(45deg);
          border-left-color:transparent;
          border-top-color:transparent;
        }
        &.toast-error:before,
        &.toast-error:after{
          content: '';
          display: inline-block;
          width:.15rem;
          height: .15rem;
          border: 2px solid red;
          transform: rotate(45deg);
        }
        &.toast-error:before{
          border-top-color: transparent;
          border-left-color: transparent;
        }
        &.toast-error:after{
          border-bottom-color: transparent;
          border-right-color: transparent;
        }
      }
    }
  }
  &.toast-middle{
    .toast-con{
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.toast-top{
    .toast-con{
      top:.2rem;
    }
  }
  &.toast-bottom{
    .toast-con{
      bottom: .2rem;
    }
  }
}

</style>

