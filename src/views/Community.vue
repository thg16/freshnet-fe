<template>
  <div class="community">
    <Hero :hero="hero" :small="true" />
    <WaveDivider />
    <Tabs />
    <div v-if="url == 'faq'">
      <WaveDivider flipX BGcolor="transparent" />
      <Newsletter :news="news" />
      <WaveDivider BGcolor="transparent" />
      <ContactForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/General/Hero.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";
import Newsletter from "@/components/General/Newsletter.vue";
import ContactForm from "@/components/General/ContactForm.vue";
import Tabs from "@/components/Community/Tabs.vue";

interface HeroObject {
  title?: string;
  subtitle?: string;
}
interface NewsletterObject {
  title?: string;
}

@Options({
  components: {
    Hero,
    Tabs,
    WaveDivider,
    Newsletter,
    ContactForm,
  },
})
export default class Community extends Vue {
  data() {
    return {
      url: "faq",
    };
  }
  hero: HeroObject = {
    title: "Community",
    subtitle: "FAQ",
  };
  news: NewsletterObject = {
    title: "Everything you ever asked",
  };
}
</script>
