<template>
  <div class="tabs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-tab-Events"
                data-toggle="pill"
                href="#pills-Events"
                role="tab"
                aria-controls="pills-Events"
                aria-selected="true"
                >Events</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-tab-Blog"
                data-toggle="pill"
                href="#pills-Blog"
                role="tab"
                aria-controls="pills-Blog"
                aria-selected="false"
                >Blog</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tab-content" id="pills-tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-Events"
              role="tabpanel"
              aria-labelledby="pills-tab-Events"
            >
              <Events />
            </div>
            <div
              class="tab-pane fade"
              id="pills-Blog"
              role="tabpanel"
              aria-labelledby="pills-tab-Blog"
            >
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Events from "@/components/Resources/Events.vue";
import Blog from "@/components/Resources/Blog.vue";
export default {
  name: "Tabs",
  components: { Events, Blog },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.tabs {
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  .nav-pills {
    margin-bottom: 90px;
  }
  #pills-tab {
    a {
      font-family: Fredoka One;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #45595d;
      background: none;
      &.active {
        color: #21b3d1;
      }
    }
  }
}
</style>
