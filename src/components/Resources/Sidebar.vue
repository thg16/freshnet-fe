<template>
  <div class="sidebar">
    <div class="search sidebar-item">
      <input placeholder="Search our Posts" />
      <button><i class="fas fa-search"></i></button>
    </div>
    <div class="sidebar-item">
      <h3 class="sidebar-item-title">Categories</h3>
      <ul class="list-items list-unstyled">
        <li class="list-item"><a href="#">First Category</a></li>
        <li class="list-item"><a href="#">Another one</a></li>
        <li class="list-item"><a href="#">The third</a></li>
        <li class="list-item">
          <a href="#">Huge category that need two lines</a>
        </li>
        <li class="list-item"><a href="#">The last one</a></li>
      </ul>
    </div>
    <div class="sidebar-item">
      <h3 class="sidebar-item-title">Most viewed</h3>
      <ul class="list-items list-unstyled">
        <li class="list-item"><a href="#">First Category</a></li>
        <li class="list-item"><a href="#">Another one</a></li>
        <li class="list-item"><a href="#">The third</a></li>
        <li class="list-item">
          <a href="#">Huge category that need two lines</a>
        </li>
        <li class="list-item"><a href="#">The last one</a></li>
      </ul>
    </div>
    <div class="sidebar-item">
      <h3 class="sidebar-item-title">Latest</h3>
      <ul class="list-items list-unstyled">
        <li class="list-item"><a href="#">First Category</a></li>
        <li class="list-item"><a href="#">Another one</a></li>
        <li class="list-item"><a href="#">The third</a></li>
        <li class="list-item">
          <a href="#">Huge category that need two lines</a>
        </li>
        <li class="list-item"><a href="#">The last one</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/colors";
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 50px;
  .search {
    display: block;
    text-align: center;
    // margin-bottom: 40px;
    input {
      border: none;
      width: 100%;
      max-width: 310px;
      font-family: "Fredoka One", cursive;
      padding: 20px 60px 20px 20px;
      outline: none;
      border-radius: 50px;
      font-size: 18px;
      line-height: 22px;
      color: #88989c;
      background: #bac7ca;
    }
    button {
      margin-left: -55px;
      transition: all 0.43s;
      border: none;
      width: 45px;
      font-family: "Fredoka One", cursive;
      font-size: 18px;
      padding: 9px 0;
      color: #fff;
      background: $primary-blue;
      border-radius: 50px;
    }
  }
  .sidebar-item {
    .sidebar-item-title {
      font-size: 44px;
      line-height: 53px;
      margin-bottom: 20px;
      text-align: left;
      color: $primary-green;
    }
    &:nth-child(3) {
      .sidebar-item-title {
        color: $primary-red;
      }
    }
    &:last-child {
      .sidebar-item-title {
        color: $primary-yellow;
      }
    }
    .list-items {
      display: flex;
      flex-direction: column;
      gap: 22px;
      .list-item {
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        position: relative;
        &:after {
          background: #cee7eb;
          content: "";
          height: 1px;
          width: 100%;
          position: absolute;
          bottom: -12px;
          left: 0;
        }
        &:last-child:after {
          display: none;
        }
        a {
          color: #96a5a8;
          text-decoration: none;
          &:hover,
          &:focus {
            color: $primary-blue;
          }
        }
      }
    }
  }
}
</style>