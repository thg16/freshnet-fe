<template>
  <footer class="main-footer">
    <div class="footer-list">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav class="footer-links list-inline">
              <router-link to="/" class="list-inline-item footer-links-item"
                >Home</router-link
              >
              <router-link
                to="/marketplace"
                class="list-inline-item footer-links-item"
                >Marketplace</router-link
              >
              <router-link
                to="/about"
                class="list-inline-item footer-links-item"
                >About</router-link
              >
              <router-link
                to="/community"
                class="list-inline-item footer-links-item"
                >Community</router-link
              >
              <router-link
                to="/resources"
                class="list-inline-item footer-links-item"
                >Resources</router-link
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-privacy">
      <div class="footer-privacy-items">
        <div class="logo-footer">
          <img src="../../assets/logo.png" class="logo" />
        </div>
        <nav class="privacy-links list-inline">
          <router-link to="/terms" class="list-inline-item privacy-links-item"
            >Terms of use</router-link
          >
          <router-link to="/privacy" class="list-inline-item privacy-links-item"
            >Privacy Policy</router-link
          >
          <router-link to="/" class="list-inline-item privacy-links-item"
            >Security</router-link
          >
          <router-link to="/" class="list-inline-item privacy-links-item"
            >Privacy Shield Policy</router-link
          >
        </nav>
        <div class="privacy-socials">
          <ul class="socials-list list-inline">
            <li class="socials-list-item list-inline-item">
              <i class="fab fa-facebook"></i>
            </li>
            <li class="socials-list-item list-inline-item">
              <i class="fab fa-instagram"></i>
            </li>
            <li class="socials-list-item list-inline-item">
              <i class="fab fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/mainFooter";
</style>
