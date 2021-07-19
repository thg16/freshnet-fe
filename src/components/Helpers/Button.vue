<template>
  <div class="button-div">
    <button type="submit" v-if="submit" :class="[activeColor]">
      {{ text }}
    </button>
    <router-link :to="{ link }" :class="[activeColor]" v-else>{{
      text
    }}</router-link>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      required: true,
      type: String,
    },
    submit: {
      type: Boolean,
    },
    color: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      activeColor: this.color,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/colors";

.button-div {
  position: relative;
  z-index: 1;
  button,
  a {
    transition: all 0.43s;
    border: none;
    color: #fff;
    font-size: 28px;
    font-family: "Fredoka One", cursive;
    background: $primary-blue;
    border-radius: 50px;
    text-shadow: 0 0 7px #00000077;
    display: inline-block;
    text-decoration: none;
    padding: 12px 30px;
    position: relative;
    &:before {
      content: "";
      transition: all 0.43s;
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.25),
          rgba(0, 0, 0, 0.25)
        ),
        $primary-blue;
      border-radius: 50px;
      transform: matrix(1, -0.05, 0.05, 1, 0, 0);
      display: block;
      height: 102%;
      width: 102%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    &:hover {
      transition: all 0.43s;
      &:before {
        transition: all 0.43s;
        width: 100%;
        height: 100%;
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
    }

    &:active {
      text-shadow: none;
      background: darken($primary-blue, 16%);
    }

    &.yellow {
      background: $primary-yellow;
      &:active {
        background: darken($primary-yellow, 16%);
      }
      &:before {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
          ),
          $primary-yellow;
      }
    }
    &.green {
      background: $primary-green;
      &:active {
        background: darken($primary-green, 16%);
      }
      &:before {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
          ),
          $primary-green;
      }
    }
    &.red {
      background: $primary-red;
      &:active {
        background: darken($primary-red, 16%);
      }
      &:before {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
          ),
          $primary-red;
      }
    }
  }
}
</style>