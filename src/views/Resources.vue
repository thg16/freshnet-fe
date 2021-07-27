<template>
  <div class="resources">
    <Hero :hero="hero" :small="true" />
    <WaveDivider />
    <Tabs />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/General/Hero.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";
import Tabs from "@/components/Resources/Tabs.vue";

interface HeroObject {
  title?: string;
  subtitle?: string;
}

@Options({
  components: {
    Hero,
    Tabs,
    WaveDivider,
  },
})
export default class Resources extends Vue {
  data() {
    return {};
  }
  hero: HeroObject = {
    title: "Resources",
    subtitle: "Events",
  };
}
</script>
