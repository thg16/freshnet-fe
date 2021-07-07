<template>
  <div class="animated-bg">
    <div class="blue-bg" />
    <div class="wave red" :class="{ show: appear }">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <defs>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="192"
            height="108"
          >
            <image
              href="../../assets/red-bg.jpg"
              x="0"
              y="0"
              width="192"
              height="108"
            />
          </pattern>
        </defs>
        <path :d="redCoords" style="stroke: none; fill: url(#img1)" />
      </svg>
    </div>
    <div class="wave green" :class="{ show: appear }">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <defs>
          <pattern
            id="img2"
            patternUnits="userSpaceOnUse"
            width="192"
            height="108"
          >
            <image
              href="../../assets/green-bg.jpg"
              x="0"
              y="0"
              width="192"
              height="108"
            />
          </pattern>
        </defs>
        <path :d="greenCoords" style="stroke: none; fill: url(#img2)" />
      </svg>
    </div>
    <div class="wave yellow" :class="{ show: appear }">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <defs>
          <pattern
            id="img3"
            patternUnits="userSpaceOnUse"
            width="192"
            height="108"
          >
            <image
              href="../../assets/yellow-bg.jpg"
              x="0"
              y="0"
              width="192"
              height="108"
            />
          </pattern>
        </defs>
        <path :d="yellowCoords" style="stroke: none; fill: url(#img3)" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedBG",
  components: {},
  data() {
    return {
      redCoords: "M0,400 C160,450 250,200 350,250 L350,00 L0,0 Z",
      greenCoords: "M0,200 C200,300 350,0 350,100 L350,00 L0,0 Z",
      yellowCoords: "M0,100 C150,200 200,0 200,0 L200,00 L0,0 Z",
      appear: false,
    };
  },
  beforeMount() {
    setInterval(() => {
      let first = 375 + Math.random() * 50;
      let second = 400 + Math.random() * 150;
      let third = 150 + Math.random() * 200;
      let fourth = 250 + Math.random() * 250;
      this.redCoords = `M0,${first} C160,${second} 250,${third} 350,${fourth} L350,00 L0,0 Z`;

      first = 200 + Math.random() * 100;
      second = 300 + Math.random() * 50;
      third = 50 + Math.random() * 200;
      fourth = 200 + Math.random() * 200;
      this.greenCoords = `M0,${first} C160,${second} 250,${third} 350,${fourth} L350,00 L0,0 Z`;

      first = 100 + Math.random() * 80;
      second = 200 + Math.random() * 50;
      third = 50 + Math.random() * 100;
      this.yellowCoords = `M0,${first} C150,${second} 200,${third} 250,0 L250,00 L0,0 Z`;
    }, 1000);

    setTimeout(() => {
      this.appear = true;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.blue-bg {
  background: url(../../assets/blue-bg.jpg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wave {
  position: relative;
  width: 100%;

  svg {
    transition: all 2s;
    position: fixed;
    top: 0;
    transform: rotateZ(90deg);
  }

  &.red {
    svg {
      left: 100vw;
    }
  }

  &.yellow {
    svg {
      left: 200vw;
    }
  }

  &.green {
    svg {
      left: 150vw;
    }
  }

  &.show {
    svg {
      left: 0;
    }
  }

  path {
    transition: all 2s linear;
  }
}
</style>

