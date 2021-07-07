<template>
  <div class="home">
    <AnimatedBG />

    <div class="overlay" :class="{ show: appearLogo }">
      <img src="../../assets/logo.png" class="logo" />
    </div>
  </div>
</template>

<script>
import AnimatedBG from "./AnimatedBG.vue";

export default {
  name: "Splash",
  components: {
    AnimatedBG,
  },
  data() {
    return {
      appearLogo: false,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.appearLogo = true;
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  transition: 1s all;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  opacity: 0;

  .logo {
    margin: auto;
    width: 50%;
    max-width: 520px;
  }

  &.show {
    opacity: 1;
  }
}
.home {
  z-index: 2;
  position: relative;
}
</style>