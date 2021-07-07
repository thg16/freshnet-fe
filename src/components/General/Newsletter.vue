<template>
  <div class="main-newsletter">
    <div class="main-newsletter-container">
      <div class="main-newsletter-content">
        <h2>{{ news.title }}</h2>
        <div class="big-input">
          <input placeholder="Your email" />
          <button>Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsletter",
  props: {
    news: {
      required: true,
      type: Object,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-newsletter {
  position: relative;
  width: 100%;
  height: 35vh;
  .main-newsletter-container {
    display: flex;
    position: absolute;
    width: 100%;
    height: 35vh;
  }
  .main-newsletter-content {
    margin: auto;
    max-width: 80%;
    color: #fff;
    text-shadow: 0 4px 12px #00000055;
    text-align: center;
    h2 {
      margin-bottom: 60px;
      color: #fff;
    }
  }
}
</style>
