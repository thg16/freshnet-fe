<template>
  <div class="slick-products">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title">{{ title }}</h2>

          <Carousel class="products-slick main-slick" :autoplay="7000" :settings="{
            itemsToShow: 4,
            wrapAround: true,
            snapAlign: 'start',
          }">
            <Slide v-for="i in 7" :key="i">
              <div>
                <div class="card-slick">
                  <div class="card-item">
                    <div class="content-card">
                      <div>
                        <div class="img-card">
                          <img src="../../assets/product.png" alt="" />
                          <div class="icons-img">
                            <span class="icon selected"
                              ><i class="fas fa-heart"></i
                            ></span>
                            <span class="icon"><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                        <div class="name-card">
                          <h2>Product Name with two lines 2un</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean eu sem convallis, as.
                          </p>
                        </div>
                      </div>
                      <div class="button-product">
                        <button class="product-buy">Buy for $12,249.90</button>
                      </div>
                    </div>
                    <div class="footer-card">
                      <span class="footer-card-title">Fresh-net indicators:</span>
                      <span class="icon green"><i class="fas fa-truck"></i></span>
                      <span class="icon red"><i class="fas fa-cloud"></i></span>
                      <span class="icon yellow"
                        ><i class="fas fa-recycle"></i
                      ></span>
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
  name: "Slick Products",
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
.slick-products {
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

.products-slick {
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
      @media (min-width: 1025px) {
        width: 100%;
      }
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
    padding: 20px;
  }
  .card-item {
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    padding: 15px;
    // width: 270px;
    // height: 390px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    background: #dff1f4;
    position: relative;
  }
  .content-card {
    height: 415px;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img-card {
    display: flex;
    justify-content: center;
    align-items: center;
    .icons-img {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #45595d;
      text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      .icon:first-child {
        transition: all 0.4s;
        &:hover,
        &.selected {
          color: #d81f44;
          text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.4s;
        }
      }
      .icon:last-child {
        transition: all 0.4s;
        &:hover,
        &.selected {
          color: #f8b823;
          text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.4s;
        }
      }
    }
  }
  .name-card {
    h2 {
      font-size: 22px;
      line-height: 27px;
      color: #45595e;
      margin-top: 15px;
      text-align: left;
      height: 2.5em;
    }
    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.3;
      text-align: left;
      margin-bottom: 0;
    }
  }
  .button-product {
    width: 100%;
    .product-buy {
      background: #5ccd62;
      transition: all 0.4s;
      &:hover {
        background: #21b3d1;
        transition: all 0.4s;
      }
      border-radius: 26px;
      font-family: Fredoka One;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #fff;
      border: none;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      width: 100%;
      padding: 14px;
    }
  }
  .footer-card {
    border-top: 1px solid #b1ccd0;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    text-align: left;
    color: #45595d;
    .icon {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      grid-gap: 5px;
      cursor: pointer;
      transition: all 0.4s;
      &.red {
        color: #d81f44;
      }
      &.yellow {
        color: #f8b823;
      }
      &.green {
        color: #5ccd62;
      }
      i {
        font-size: 22px;
      }
    }
  }
}
</style>
