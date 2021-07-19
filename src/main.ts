import { createApp } from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import VueAppear from 'vue-appear';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importing Icons
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret);

import { faChartBar } from '@fortawesome/free-solid-svg-icons';
library.add(faChartBar);

import { faCubes } from '@fortawesome/free-solid-svg-icons';
library.add(faCubes);

import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faCalendarAlt);

import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

import { faUpload } from '@fortawesome/free-solid-svg-icons';
library.add(faUpload);

// Importing Icons for Panels
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowUp);

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowDown);

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";


library.add(faFacebook);

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
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");

