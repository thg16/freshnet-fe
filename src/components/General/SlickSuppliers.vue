<template>
  <div class="slick-suppliers">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title">{{ title }}</h2>


          <Carousel class="suppliers-slick main-slick" :autoplay="7000" :settings="{
            itemsToShow: 4,
            wrapAround: true,
            snapAlign: 'start'
          }">
            <Slide v-for="i in 7" :key="i">
              <div>
                <div class="card-slick">
                  <div class="card-item">
                    <div class="content-card">
                      <div class="img-card"><i class="fas fa-image"></i></div>
                      <div class="name-card"><h2>Supplier Name Inc.</h2></div>
                    </div>
                    <div class="footer-card">
                      <span class="icon"><i class="fas fa-heart"></i> 295</span>
                      <span class="icon"
                        ><i class="fas fa-comment"></i> 1295</span
                      >
                      <span class="icon"><i class="fas fa-star"></i> 4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <navigation v-if="showNavigation" />
              <pagination v-if="showPagination" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Slick Suppliers",
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      showNavigation: true,
      showPagination: true,
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/colors";
.slick-suppliers {
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  margin-top: -2px;
  padding: 60px 0 50px 0;
  .main-title {
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: 50px;
    @media (min-width: 1200px) {
      margin-bottom: 70px;
    }
  }
}

.suppliers-slick {
  margin-bottom: 60px;
  .slick-slide > div {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    img {
      max-width: 100%;
    }
    .title-slick {
      font-size: 18px;
      line-height: 22px;
      color: #45595e;
      margin: 0;
    }
  }
  .slick-arrow {
    width: 50px;
    height: 50px;
    background: #45595d;
    border-radius: 100%;
    z-index: 1;
    // top: 65px;
    transition: all 0.4s;
    &:hover {
      transition: all 0.4s;
      background: #21b3d1;
    }
    i {
      font-size: 32px;
      color: #fff;
    }
  }
  .slick-prev {
    i {
      margin-right: 5px;
    }
  }
  .slick-next {
    i {
      margin-left: 5px;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    content: none;
  }
  .card-slick {
    position: relative;
  }
  .card-item {
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    padding: 15px;
    // width: 270px;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    background: #dff1f4;
    position: relative;
  }
  .img-card {
    font-size: 106px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #21b3d1;
    border-radius: 16px;
    color: #fff;
    padding: 36px 65px;
  }
  h2 {
    font-size: 22px;
    line-height: 27px;
    color: #45595e;
    margin-top: 15px;
  }
  .footer-card {
    border-top: 1px solid #b1ccd0;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    color: #7f9498;
    align-items: center;
    font-size: 16px;
    .icon {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      grid-gap: 5px;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        color: #21b3d1;
        transition: all 0.4s;
      }
      &:first-child:hover {
        color: #d81f44;
        transition: all 0.4s;
      }
      &:last-child:hover {
        color: #f8b823;
        transition: all 0.4s;
      }
      i {
        font-size: 32px;
      }
    }
  }
}
</style>
