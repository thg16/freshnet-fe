<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-midle">
          <h2>It all started with a Dream</h2>
          <div class="double-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
              sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Sed vitae vulputate nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
              sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Sed vitae vulputate nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <Carousel class="slick-history" :autoplay="7000" :settings="{
    itemsToShow: 3,
    wrapAround: true,
  }">
    <Slide v-for="i in 7" :key="i">
      <div><img src="../../assets/slick-history.png" alt="" /></div>
    </Slide>

    <template #addons>
      <navigation v-if="showNavigation" />
      <pagination v-if="showPagination" />
    </template>
  </Carousel>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-midle">
          <h2>Bringing people together</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </p>
        </div>
        <div class="personas row">
          <div class="personas-item col-12 col-lg-6">
            <div class="icon"><i class="fas fa-user"></i></div>
            <h3>Buyers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
              sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
            <ButtonDefault text="Join as a Buyer" href="#" class="" />
          </div>

          <div class="personas-item col-12 col-lg-6">
            <div class="icon"><i class="fas fa-user"></i></div>
            <h3>Sellers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
              sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
            <ButtonDefault
              text="Join as a Seller"
              href="#"
              class=""
              color="red"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import ButtonDefault from "@/components/Helpers/Button.vue";
export default {
  name: "Tab1Content",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ButtonDefault,
  },
  data() {
    return {
      showNavigation: false,
      showPagination: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.text-midle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .double-text {
    display: flex;
    gap: 65px;
    p {
      text-align: left;
    }
  }
  h2 {
    font-size: 3rem;
    line-height: 3.4rem;
    text-align: center;
    margin-bottom: 60px;
  }
  p {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #45595d;
    max-width: 725px;
  }
  .cards-definition {
    margin: 60px 0 160px 0;
  }
}
.slick-history {
  margin: 225px 0;
}

.personas {
  margin-top: 120px;

  .icon {
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background: $primary-blue;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      font-size: 70px;
      line-height: 80px;
      color: #ffffff;
    }
  }
  h3 {
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #45595e;
  }
  p {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #45595d;
  }
  .personas-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &:last-child {
      .icon {
        background: $primary-red;
      }
    }
  }
}
</style>
