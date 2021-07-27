<template>
  <div class="hero" :class="{ small: small }">
    <AnimatedBG />

    <div class="overlay" :class="{ show: appearOverlay }">
      <div class="overlay-inner">
        <h1>{{ hero.title }}</h1>
        <h2>{{ hero.subtitle }}</h2>

        <div class="big-input" v-if="hero.placeholder && hero.button">
          <input :placeholder="hero.placeholder" />
          <button>{{ hero.button }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedBG from "./AnimatedBG.vue";

export default {
  name: "Hero",
  props: {
    hero: {
      required: true,
      type: Object,
    },
    small: {
      default: false,
      type: Boolean,
    },
  },
  components: {
    AnimatedBG,
  },
  data() {
    return {
      appearOverlay: false,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.appearOverlay = true;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 20px);

  &.small {
    height: calc(43vh - 20px);

    .overlay {
      height: 70%;
    }
  }
}

.overlay {
  transition: 1s all;
  position: fixed;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  opacity: 0;

  .overlay-inner {
    margin: auto;
    max-width: 80%;
    color: #fff;
    text-shadow: 0 4px 12px #00000055;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 25px;
      color: #fff;

      @media (min-width: 1200px) {
        font-size: 3.4rem;
      }
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 10px;

      @media (min-width: 1200px) {
        font-size: 5rem;
      }
    }
  }

  &.show {
    opacity: 1;
  }
}
</style>
