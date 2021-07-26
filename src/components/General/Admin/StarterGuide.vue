<template>
  <div class="starter-guide">
  </div>
</template>

<script>

export default {
  name: "StarterGuide",
  props: {
    step: {
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

.starter-guide {
  color: #333;
}

</style>
