<template>
  <div class="about">
    <Hero :hero="hero" />
    <WaveDivider />
    <Tabs />
    <WaveDivider flipX BGcolor="transparent" />
    <Newsletter :news="news" />
    <WaveDivider BGcolor="transparent" />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/General/Hero.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";
import Newsletter from "@/components/General/Newsletter.vue";
import ContactForm from "@/components/General/ContactForm.vue";
import Tabs from "@/components/About/Tabs.vue";

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
export default class About extends Vue {
  hero: HeroObject = {
    title: "About Us",
    subtitle: "Sustainability",
  };
  news: NewsletterObject = {
    title: "Let’s write something really cool about Sustainability",
  };
}
</script>
