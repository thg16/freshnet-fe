<template>
  <div class="privacy">
    <Hero :hero="hero" :small="true" />
    <WaveDivider />

    <div class="privacy-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="privacy-paragraphs">
              <h2 class="title">Using Fresh-Net</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Sed vitae vulputate nulla. lacinia neque.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae vulputate nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae. Sed vitae vulputate
                nulla. lacinia neque. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Sed vitae
                vulputate nulla. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae.
              </p>
            </div>
            <div class="privacy-paragraphs">
              <h2 class="title">About the platform</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Sed vitae vulputate nulla. lacinia neque.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae vulputate nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae. Sed vitae vulputate
                nulla. lacinia neque. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Sed vitae
                vulputate nulla. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae.
              </p>
            </div>
            <div class="privacy-paragraphs">
              <h2 class="title">Data storage and usage</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Sed vitae vulputate nulla. lacinia neque.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae vulputate nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae. Sed vitae vulputate
                nulla. lacinia neque. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Sed vitae
                vulputate nulla. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae.
              </p>
            </div>
            <div class="privacy-paragraphs">
              <h2 class="title">Still have questions?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Sed vitae vulputate nulla. lacinia neque.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae vulputate nulla.
              </p>
              <div class="buttons-privacy">
                <ButtonDefault text="See our FAQ" href="/faq" />
                <ButtonDefault text="Read our Blog" href="/blog" color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/General/Hero.vue";
import WaveDivider from "@/components/General/WaveDivider.vue";
import ButtonDefault from "@/components/Helpers/Button.vue";

interface HeroObject {
  title?: string;
}

@Options({
  components: {
    Hero,
    WaveDivider,
    ButtonDefault,
  },
})
export default class Privacy extends Vue {
  hero: HeroObject = {
    title: "Privacy Policy",
  };
}
</script>
<style lang="scss" scoped>
.privacy-content {
  background: #fff;
  position: relative;
  .privacy-paragraphs {
    margin-bottom: 120px;
    .title {
      margin-bottom: 60px;
    }
    p {
      font-size: 24px;
      line-height: 1.3;
      color: #45595d;
      margin-bottom: 50px;
    }
  }
  .buttons-privacy {
    display: flex;
    justify-content: space-evenly;
    margin: 120px 0 200px 0;
  }
}
</style>
