<template>
  <div class="panel-cart">
    <div class="ups-downs" :class="[{ down: panel.upsdowns < 0 }, { up: panel.upsdowns > 0 }]">
      {{ panel.upsdowns > 0 ? '+' : null }}{{ panel.upsdowns }}

      <font-awesome-icon icon="arrow-down" v-if="panel.upsdowns < 0" />
      <font-awesome-icon icon="arrow-up" v-else-if="panel.upsdowns > 0" />
    </div>
    <div class="icon">
      <font-awesome-icon :icon="panel.icon" />
    </div>
    <div class="title">
      {{ panel.title }}
    </div>
    <div class="value">
      {{ panel.value }}
    </div>
  </div>
</template>

<script>

export default {
  name: "PanelCart",
  props: {
    panel: {
      required: true,
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

@import "../../../scss/colors";

.panel-cart {
  display: inline-block;
  background: #FFF;
  border-radius: 34px;
  padding: 25px;
  width: 216px;
  height: 230px;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.05);
  margin-right: 1vw;
  color: $text-gray;

  .ups-downs {
    text-align: right;
    margin-bottom: 16px;

    &.up {
      color: $primary-green;
    }

    &.down {
      color: $primary-red;
    }
  }

  .icon {
    font-size: 48px;
    color: $primary-blue;
  }

  .value {
    font-size: 38px;
    font-family: "Fredoka One", cursive;
  }
}

</style>
