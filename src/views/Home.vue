<template>
  <div class="home">
    <Hero :hero="hero" />
    <WaveDivider flipY />
    <FreshNetDifference />
    <WaveDivider flipX BGcolor="#21B3D1" />
    <Features />
    <WaveDivider BGcolor="#21B3D1" />
    <SlickFreshNet />
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
import SlickFreshNet from "@/components/Home/SlickFreshNet.vue";
import Newsletter from "@/components/General/Newsletter.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import ImageTextOddEven from "@/components/Home/ImageTextOddEven.vue";
import ContactForm from "@/components/General/ContactForm.vue";

interface HeroObject {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  button?: string;
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
    SlickFreshNet,
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
    placeholder: "Your email",
    button: "Sign up",
  };
  news: NewsletterObject = {
    title: "Join Fresh-net now",
  };
}
</script>
