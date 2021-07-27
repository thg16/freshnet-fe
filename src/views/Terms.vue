<template>
  <div class="terms">
    <Hero :hero="hero" :small="true" />
    <WaveDivider />

    <div class="terms-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="terms-paragraphs">
              <h2 class="title">General Rules of Use</h2>
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
            <div class="terms-paragraphs">
              <h2 class="title topic-title">1- About the platform</h2>
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
            <div class="terms-paragraphs">
              <h2 class="title topic-title">2- About the platform</h2>
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
            <div class="terms-paragraphs">
              <h2 class="title topic-title">3- About the platform</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae. Sed vitae vulputate nulla. lacinia neque.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae vulputate nulla.
              </p>
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
export default class Terms extends Vue {
  hero: HeroObject = {
    title: "Terms and Conditions",
  };
}
</script>
<style lang="scss" scoped>
.terms-content {
  background: #fff;
  position: relative;
  padding-bottom: 250px;
  .terms-paragraphs {
    margin-bottom: 120px;
    .title {
      margin-bottom: 60px;
      &.topic-title {
        font-size: 40px;
        line-height: 1.2;
        color: #45595d;
        padding: 20px 40px;
        background: #bac7ca;
        border-radius: 44px;
      }
    }
    p {
      font-size: 24px;
      line-height: 1.3;
      color: #45595d;
      margin-bottom: 50px;
    }
  }
}
</style>
