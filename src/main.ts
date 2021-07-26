import { createApp } from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import VueAppear from 'vue-appear';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

// Importing Icons
import {
  faUserSecret,
  faChartBar,
  faCubes,
  faStar,
  faCalendarAlt,
  faUser,
  faUpload,
  faSearch,
  faFilter,
  faArrowUp,
  faArrowDown,
  faShoppingCart,
  faDollarSign,
  faCog,
  faBell,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret,
  faChartBar,
  faCubes,
  faStar,
  faCalendarAlt,
  faUser,
  faUpload,
  faSearch,
  faFilter,
  faArrowUp,
  faArrowDown,
  faShoppingCart,
  faDollarSign,
  faCog,
  faBell,
  faEnvelope,
  faFacebook,
  faInstagram,
  faTwitter);

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAppear, {
    immediate: false,
    toggle: false,
    children: false,
    offset: 150,
    hook: 'onEnter',
    delay: 0,
    class: 'appear',
    selector: null,
  })
  .component('vue-slick-carousel', VueSlickCarousel)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");

