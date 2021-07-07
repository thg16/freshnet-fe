<template>
  <div class="home">
    <Hero :hero="hero" />
    <WaveDivider flipY />
    <FreshNetDifference />
    <WaveDivider flipX BGcolor="#21B3D1" />
    <Features />
    <WaveDivider BGcolor="#21B3D1" />
    <SlickHome />
    <WaveDivider flipX BGcolor="transparent" />
    <Newsletter :news="news" />
    <WaveDivider BGcolor="transparent" />
    <Testimonial />
    <ImageTextOddEven />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/General/Hero.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";
import FreshNetDifference from "@/components/Home/FreshNetDifference.vue";
import Features from "@/components/Home/Features.vue";
import SlickHome from "@/components/Home/SlickHome.vue";
import Newsletter from "@/components/General/Newsletter.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import ImageTextOddEven from "@/components/Home/ImageTextOddEven.vue";
import ContactForm from "@/components/General/ContactForm.vue";

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
    WaveDivider,
    FreshNetDifference,
    Features,
    SlickHome,
    Newsletter,
    Testimonial,
    ImageTextOddEven,
    ContactForm,
  },
})
export default class Home extends Vue {
  hero: HeroObject = {
    title: "Your local Marketplace. Digitised.",
    subtitle: "Buy smarter via our community",
  };
  news: NewsletterObject = {
    title: "Join Fresh-net now",
  };
}
</script>
