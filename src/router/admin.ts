import { RouteRecordRaw } from "vue-router";
import AdminHome from "../views/admin/Home.vue";

// Catalogue Routes
import AdminCatalogue from "../views/admin/Catalogue.vue";
import AdminCatalogueNew from "../views/admin/CatalogueNew.vue";

import AdminApproved from "../views/admin/Approved.vue";
import AdminOrders from "../views/admin/Orders.vue";
import AdminClients from "../views/admin/Clients.vue";
import AdminBulkUpload from "../views/admin/BulkUpload.vue";

// Promotions Routes
import AdminPromotions from "../views/admin/Promotions.vue";
import AdminPromotionsNew from "../views/admin/PromotionsNew.vue";

// Profile Routes
import AdminMyProfile from "../views/admin/MyProfile.vue";

const AdminRoutes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "Admin.Home",
    component: AdminHome,
  },
  // Catalogue Routes
  {
    path: "/admin/catalogue",
    name: "Admin.Catalogue",
    component: AdminCatalogue,
  },
  {
    path: "/admin/catalogue/new",
    name: "Admin.Catalogue.New",
    component: AdminCatalogueNew,
  },
  {
    path: "/admin/approved",
    name: "Admin.Approved",
    component: AdminApproved,
  },
  {
    path: "/admin/orders",
    name: "Admin.Orders",
    component: AdminOrders,
  },
  {
    path: "/admin/clients",
    name: "Admin.Clients",
    component: AdminClients,
  },
  {
    path: "/admin/bulk-upload",
    name: "Admin.BulkUpload",
    component: AdminBulkUpload,
  },
  {
    path: "/admin/my-profile",
    name: "Admin.MyProfile",
    component: AdminMyProfile,
  },
  // Promotion Routes
  {
    path: "/admin/promotions",
    name: "Admin.Promotions",
    component: AdminPromotions,
  },
  {
    path: "/admin/promotions/new",
    name: "Admin.Promotions.New",
    component: AdminPromotionsNew,
  }
];

export default AdminRoutes;
