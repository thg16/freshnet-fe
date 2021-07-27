<template>
  <main :class="{ 'admin-page': isAdmin }">

    <AdminHeader v-if="isAdmin" />
    <MainHeader v-else />

    <!-- Vamos mover isso pra ca, beleza?!
    <Hero :hero="hero" />
    <WaveDivider />
    -->
    <router-view v-slot="{ Component }">
      <transition name="fade" appear mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <MainFooter v-if="!isAdmin" />

    <transition name="fade" mode="out-in" appear>
      <Splash v-if="showSplash" />
    </transition>
  </main>
</template>

<script>
import Hero from "@/components/General/Hero.vue";
import Splash from "@/components/General/Splash.vue";
import MainFooter from "@/components/General/MainFooter.vue";
import MainHeader from "@/components/General/MainHeader.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";

// Admin Components
import AdminHeader from "@/components/General/Admin/AdminHeader.vue";

export default {
  components: {
    Hero,
    Splash,
    MainFooter,
    MainHeader,
    WaveDivider,
    AdminHeader,
  },
  data() {
    return {
      showSplash: true,
    };
  },
  computed: {
    isAdmin() {
      return this.$route.name && this.$route.name.includes('Admin.');
    }
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
@import "./scss/admin";

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

  &.admin {
    text-align: left;
    color: #374F54;
    margin-bottom: 52px;
  }
}

h1 {
  &.admin {
    font-size: 1.5rem;
  }
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
    max-width: 700px;
    border-radius: 64px;
    font-family: "Fredoka One", cursive;
    font-size: 2rem;
    padding: 25px 187px 25px 34px;
    color: #333;
    outline: none;
    margin-top: 34px;
  }

  button {
    transition: all 0.43s;
    background: $primary-blue;
    border: none;
    width: 150px;
    border-radius: 54px;
    font-family: "Fredoka One", cursive;
    font-size: 2rem;
    padding: 16px 0;
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home {
  width: 100vw;
}

.gray-divider {
  border-top: 2px solid $light-gray;
  margin: 25px 0;
}

</style>
