<template>
  <section>
    <button class="btn" @click="showToast">我在上面，3秒后消失,我成功了</button>
    <button class="btn" @click="showToast2">我在下面，5秒后消失，我失败了</button>
    <button class="btn" @click="showToast3">我是默认参数</button>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    showToast() {
      this.$toast({
        message: '我在上面，3秒后消失',
        duration: 3000,
        position: 'top',
        icon: 'sucess',
      });
    },
    showToast2() {
      this.$toast({
        message: '我在下面，5秒后消失',
        duration: 5000,
        position: 'bottom',
        icon: 'error',
      });
    },
    showToast3() {
      this.$toast();
    },
  },
};
</script>

<style scoped lang="postcss">
  .btn {
    display: block;
    padding: .1rem .3rem;
    text-align: center;
    color: #fff;
    border-radius: .2rem;
    margin-top: .1rem;
  }
  .btn:nth-child(1) {
    background: red;
  }
  .btn:nth-child(2) {
    background: blue;
  }
  .btn:nth-child(3) {
    background: green;
  }
</style>
