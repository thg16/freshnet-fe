<template>
  <div class="wave-divider">
    <div
      class="wave white"
      :class="{ 'flip-x': flipX, 'flip-y': flipY }"
      :style="{ background: BGcolor }"
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="xMinYMin meet">
        <path :d="wave1Coords" style="stroke: none; fill: #fff" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaveDivider",
  props: {
    flipX: {
      type: Boolean,
    },
    flipY: {
      type: Boolean,
    },
    BGcolor: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      whiteCoords: "M0,250 C160,250 250,160 500,250 L500,00 L0,0 Z",
      wave1Coords:
        "M0,128L60,133.3C120,139,240,149,360,154.7C480,160,600,160,720,154.7C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
    };
  },
};
</script>

<style lang="scss" scoped>
.wave {
  position: relative;
  width: 100%;
  &.flip-x {
    transform: rotateX(180deg);
    margin-top: -1px;
  }
  &.flip-y {
    transform: rotateY(180deg);
  }
  &.flip-x.flip-y {
    transform: rotateY(180deg), rotateX(180deg);
  }

  svg {
    transition: all 2s;
  }

  path {
    transition: all 2s linear;
  }
}
</style>
