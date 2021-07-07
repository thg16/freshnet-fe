import { createApp } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

library.add(faFacebook);
createApp(App).use(store).use(router).mount("#app");

