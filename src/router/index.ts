import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }, {
    path: "/community",
    name: "Community",
    component: () => import("../views/Community.vue"),
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    component: () => import("../views/Marketplace.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("../views/Resources.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
