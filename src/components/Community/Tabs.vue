<template>
  <div class="tabs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-tab-forum"
                data-toggle="pill"
                href="#pills-forum"
                role="tab"
                aria-controls="pills-forum"
                aria-selected="true"
                >Forum</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-tab-faq"
                data-toggle="pill"
                href="#pills-faq"
                role="tab"
                aria-controls="pills-faq"
                aria-selected="false"
                >FAQ</a
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
              id="pills-forum"
              role="tabpanel"
              aria-labelledby="pills-tab-forum"
            >
              <Forum />
            </div>
            <div
              class="tab-pane fade"
              id="pills-faq"
              role="tabpanel"
              aria-labelledby="pills-tab-faq"
            >
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Forum from "@/components/Community/Forum.vue";
import Faq from "@/components/Community/Faq.vue";
export default {
  name: "Tabs",
  components: { Forum, Faq },
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
