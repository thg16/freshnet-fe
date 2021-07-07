<template>
  <router-view v-slot="{ Component }">
    <!-- <MainHeader /> -->
    <transition name="fade" appear mode="out-in">
      <component :is="Component" />
    </transition>
    <MainFooter />
  </router-view>

  <transition name="fade" mode="out-in" appear>
    <Splash v-if="showSplash" />
  </transition>
</template>

<script>
import Splash from "@/components/General/Splash.vue";
import MainFooter from "@/components/General/MainFooter.vue";
import MainHeader from "@/components/General/MainHeader.vue";

export default {
  components: {
    Splash,
    MainFooter,
    MainHeader,
  },
  data() {
    return {
      showSplash: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSplash = false;
    }, 6000);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Mr+Dafoe&family=Roboto:wght@300;400;500;700&display=swap");
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import "./scss/colors";

body {
  overflow-x: hidden;
}

#app {
  color: #333;
}

h1,
h2,
h3 {
  font-family: "Fredoka One", cursive;
  line-height: 1.5;
  text-align: center;
}

p,
a {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
}

.signature {
  font-family: "Mr Dafoe", cursive;
}

h2 {
  font-size: 60px;
  color: $primary-gray;
  &.white {
    color: #fff;
  }
}

.big-input {
  display: block;

  input {
    background: #fff;
    border: none;
    width: 100%;
    max-width: 520px;
    border-radius: 54px;
    font-family: "Fredoka One", cursive;
    font-size: 2rem;
    padding: 34px 187px 34px 34px;
    color: #333;
    outline: none;
  }

  button {
    transition: all 0.43s;
    background: $primary-blue;
    border: none;
    width: 150px;
    border-radius: 54px;
    font-family: "Fredoka One", cursive;
    font-size: 2rem;
    padding: 25px 0;
    color: #fff;
    margin-left: -163px;

    &:hover {
      box-shadow: 0 0 7px #00000077;
      text-shadow: 0 0 7px #00000077;
    }

    &:active {
      box-shadow: none;
      text-shadow: none;
      background: darken($primary-blue, 16%);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.home {
  width: 100vw;
}
</style>
