<template>
  <section>
    <button class="no-options-btn btn" @click="showToast">我传参的时候没有options</button>
    <button class="options-btn btn" @click="showToast2">我传参的时候有options</button>
    <button class="no-options-btn btn">我传参的时候没有options</button>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    showToast() {
      this.$toast({
        message: 'hello',
        duration: 2000,
      });
    },
    showToast2() {
      this.$toast({
        message: 'second',
        duration: 2000,
      });
    },
  },
};
</script>

<style scoped lang="postcss">
  .btn {
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
