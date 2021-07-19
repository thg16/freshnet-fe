import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import AdminRoutes from "./admin";

const routes: Array<RouteRecordRaw> = [
  ...AdminRoutes,
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
  {
    path: "/privacy",
    name: "Privacy Policy",
    component: () => import("../views/Privacy.vue"),
  },
  {
    path: "/terms",
    name: "Terms and Conditions",
    component: () => import("../views/Terms.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
