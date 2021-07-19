<template>
  <div class="tabs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-tab-history"
                data-toggle="pill"
                href="#pills-history"
                role="tab"
                aria-controls="pills-history"
                aria-selected="true"
                >Our story</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-tab-how-works"
                data-toggle="pill"
                href="#pills-how-works"
                role="tab"
                aria-controls="pills-how-works"
                aria-selected="false"
                >How it works</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-tab-sustain"
                data-toggle="pill"
                href="#pills-sustain"
                role="tab"
                aria-controls="pills-sustain"
                aria-selected="false"
                >Sustainability</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab-content" id="pills-tab-content">
      <div
        class="tab-pane fade show active"
        id="pills-history"
        role="tabpanel"
        aria-labelledby="pills-tab-history"
      >
        <Tab1Content />
      </div>
      <div
        class="tab-pane fade"
        id="pills-how-works"
        role="tabpanel"
        aria-labelledby="pills-tab-how-works"
      >
        <Tab2Content />
      </div>
      <div
        class="tab-pane fade"
        id="pills-sustain"
        role="tabpanel"
        aria-labelledby="pills-tab-sustain"
      >
        <Tab3Content />
      </div>
    </div>
  </div>
</template>

<script>
import Tab1Content from "@/components/About/Tab1Content.vue";
import Tab2Content from "@/components/About/Tab2Content.vue";
import Tab3Content from "@/components/About/Tab3Content.vue";
export default {
  name: "Tabs",
  components: { Tab1Content, Tab2Content, Tab3Content },
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
    .nav-item {
      position: relative;
      &:after {
        background: #c4c4c4;
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 100%;
        right: -6px;
        position: absolute;
        top: calc(50% - 6px);
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
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
