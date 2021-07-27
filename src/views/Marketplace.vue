<template>
  <div class="marketplace">
    <Hero :hero="hero" />
    <WaveDivider flipY />
    <SlickCategories v-if="isLogged" />
    <FindHere v-else />
    <SlickSuppliers title="Suppliers you might like" />
    <SlickProducts title="Products you might like" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/General/Hero.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";
import SlickCategories from "@/components/General/SlickCategories.vue";
import SlickSuppliers from "@/components/General/SlickSuppliers.vue";
import SlickProducts from "@/components/General/SlickProducts.vue";
import FindHere from "@/components/Marketplace/FindHere.vue";

interface HeroObject {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  button?: string;
}

@Options({
  components: {
    Hero,
    WaveDivider,
    SlickCategories,
    FindHere,
    SlickSuppliers,
    SlickProducts,
  },
})
export default class Marketplace extends Vue {
  data() {
    return {
      isLogged: false,
    };
  }
  hero: HeroObject = {
    title: "It started with a search...",
    placeholder: "Search Anything",
    button: "Search",
  };
}
</script>

<style lang="scss">

</style>
