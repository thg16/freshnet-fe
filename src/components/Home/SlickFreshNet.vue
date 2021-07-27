<template>
  <div class="slick-home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title">
            Join our growing community and buy through Fresh-net today
          </h2>
          <Carousel :autoplay="7000" :settings="{
            itemsToShow: 5,
            wrapAround: true,
          }">
            <Slide v-for="i in 7" :key="i">
              <div class='carousel__item'><img src="../../assets/freshNetSlick.png" alt="" /></div>
            </Slide>

            <template #addons>
              <navigation v-if="showNavigation" />
              <pagination v-if="showPagination" />
            </template>
          </Carousel>
          <!-- <div class="multiple-items">
            <div><img src="../../assets/freshNetSlick.png" alt="" /></div>
            <div><img src="../../assets/freshNetSlick.png" alt="" /></div>
            <div><img src="../../assets/freshNetSlick.png" alt="" /></div>
            <div><img src="../../assets/freshNetSlick.png" alt="" /></div>
            <div><img src="../../assets/freshNetSlick.png" alt="" /></div>
            <div><img src="../../assets/freshNetSlick.png" alt="" /></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Slick FreshNet",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      showNavigation: false,
      showPagination: true,
    };
  },
};
</script>

<style lang="scss">

@import "../../scss/colors";

.slick-home {
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  margin-top: -2px;
  .main-title {
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: 60px;
    @media (min-width: 1200px) {
      margin-bottom: 130px;
    }
  }
}

.slick-dotted.slick-slider {
  margin-bottom: 94px;
}
.slick-dots {
  bottom: -94px;
}

.slick-dots li {
  &,
  button {
    width: 18px;
    height: 18px;
    @media (min-width: 992px) {
      width: 24px;
      height: 24px;
    }
  }
  &.slick-active {
    &,
    button {
      width: 24px;
      height: 24px;
      @media (min-width: 992px) {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.slick-dots li button:before {
  color: #758f95;
  opacity: 1;
  font-size: 18px;
  line-height: 18px;
  width: 18px;
  height: 18px;
  @media (min-width: 992px) {
    width: 24px;
    height: 24px;
    font-size: 24px;
    line-height: 24px;
  }
}
.slick-dots li.slick-active button:before {
  color: $primary-blue;
  font-size: 24px;
  line-height: 24px;
  width: 24px;
  height: 24px;
  @media (min-width: 992px) {
    width: 30px;
    height: 30px;
    font-size: 30px;
    line-height: 30px;
  }
}
</style>
