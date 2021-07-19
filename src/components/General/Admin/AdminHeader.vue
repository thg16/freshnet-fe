<template>
  <header class="admin-header">
    <nav>
      <router-link class="logo" :to="{ name: 'Admin.Home' }"></router-link>

      <router-link class="nav-link dashboard" :to="{ name: 'Admin.Home' }">
        <font-awesome-icon icon="chart-bar" />
        <span>Dashboard</span>
      </router-link>
      <router-link class="nav-link catalogue" :to="{ name: 'Admin.Catalogue' }">
        <font-awesome-icon icon="cubes" />
        <span>Catalogue</span>
      </router-link>
      <router-link class="nav-link approved" :to="{ name: 'Admin.Approved' }">
        <font-awesome-icon icon="star" />
        <span class="bigger">Approved Sellers</span>
      </router-link>
      <router-link class="nav-link orders" :to="{ name: 'Admin.Orders' }">
        <font-awesome-icon icon="calendar-alt" />
        <span>Orders</span>
      </router-link>
      <router-link class="nav-link bulk-upload" :to="{ name: 'Admin.BulkUpload' }">
        <font-awesome-icon icon="upload" />
        <span>Bulk Upload</span>
      </router-link>
      <router-link class="nav-link clients" :to="{ name: 'Admin.Clients' }">
        <font-awesome-icon icon="user" />
        <span>Clients</span>
      </router-link>
      <router-link class="nav-link dashboard" :to="{ name: 'Admin.Home' }">
        <font-awesome-icon icon="user-secret" />
        <span>Dashboard</span>
      </router-link>
      <router-link class="nav-link dashboard" :to="{ name: 'Admin.Home' }">
        <font-awesome-icon icon="user-secret" />
        <span>Dashboard</span>
      </router-link>
    </nav>
    <div class="profile">
      <div class="alerts"></div>
      <div class="config"></div>
      <router-link class="user" :to="{ name: 'Admin.MyProfile' }"></router-link>
    </div>
  </header>
</template>

<script>

import ButtonDefault from "@/components/Helpers/Button.vue";

export default {
  name: "AdminHeader",
  // components: { ButtonDefault },
  data() {
    return {
      isLogged: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.admin-header {
  background: #FFF;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;

  nav {

    .logo {
      width: 80px;
      height: 80px;
      background: url(../../../assets/logo-admin.png) no-repeat center;
      display: block;
      margin-bottom: 52px;
    }

    .nav-link {
      color: #374F54;
      text-align: center;
      font-size: 20px;

      span {
        transition: all 0.43s;
        font-size: 16px;
        overflow: hidden;
        display: inline-block;
        width: 0;
        position: absolute;
        background: #FFFF;
        margin-left: 7px;
        padding: 3px 0;
        margin-top: -3px;
        box-shadow: 0px 0px 0px #00000000;
        border-radius: 16px;
        text-align: center;
        white-space: nowrap;
      }

      &:hover {
        span {
            width: 120px;
            padding: 3px 12px;
            box-shadow: 1px 1px 7px #00000033;

            &.bigger {
              width: 160px;
            }
        }
      }

      &.router-link-exact-active {
        color: #23B4D1;
      }
    }
  }
}
</style>
