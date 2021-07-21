<template>
  <div class="custom-table">
    <div class="row custom-row header">
      <div class="col custom-col" :class="header.id" v-for="header in headers" :key="header.id">
        {{ header.label }}
      </div>
    </div>
    <div class="row custom-row" v-for="(row, i) in content" :key="i">
      <div class="col custom-col" :class="header.id" v-for="header in headers" :key="header.id">
        <span v-if="header.id === 'more'">...</span>
        <span v-else>{{ row[header.id] }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CustomTable",
  props: {
    content: {
      required: true,
    },
    headers: {
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

@import "../../../scss/colors";

.custom-table {
  .custom-row {
    transition: all 0.43s;
    padding: 25px;

    &:hover {
      background: #FFF;
      border-radius: 50px;
      box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.05);
    }

    &.header {
      font-size: 22px;
      font-weight: 700;

      &:hover {
        background: transparent;
        box-shadow: none;
      }
    }
  }
}

</style>
