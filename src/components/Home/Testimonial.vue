<template>
  <div class="testimonial-home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title">Don’t just take our word for it!</h2>
          <h3 class="main-subtitle">
            We saved 16% on milk alone! Also Fresh-Net bring us great
            seasonal<br />
            produce, they do our buying. Great platform
          </h3>
          <div class="testimonial-items">
            <div>
              <img src="../../assets/supplier.png" alt="" />
              <p class="signature">Thiago Santos</p>
              <span class="username">CEO | Thiago Cruz Co</span>
            </div>
            <div>
              <img src="../../assets/supplier.png" alt="" />
              <p class="signature">Thiago Santos</p>
              <span class="username">CEO | Thiago Cruz Co</span>
            </div>
            <div>
              <img src="../../assets/supplier.png" alt="" />
              <p class="signature">Thiago Santos</p>
              <span class="username">CEO | Thiago Cruz Co</span>
            </div>
            <div>
              <img src="../../assets/supplier.png" alt="" />
              <p class="signature">Thiago Santos</p>
              <span class="username">CEO | Thiago Cruz Co</span>
            </div>
            <div>
              <img src="../../assets/supplier.png" alt="" />
              <p class="signature">Thiago Santos</p>
              <span class="username">CEO | Thiago Cruz Co</span>
            </div>
            <div>
              <img src="../../assets/supplier.png" alt="" />
              <p class="signature">Thiago Santos</p>
              <span class="username">CEO | Thiago Cruz Co</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial Home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../scss/colors";
.testimonial-home {
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  margin-top: -2px;
  padding-bottom: 60px;
  @media (min-width: 1200px) {
    padding-bottom: 126px;
  }
  .main-title {
    margin-bottom: 45px;
    line-height: 1.2;
    font-size: 50px;
  }
  .main-subtitle {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #758f95;
    margin-bottom: 60px;
    line-height: 1.2;
    @media (min-width: 1200px) {
      font-size: 28px;
    }
  }
}

.testimonial-items {
  .slick-slide {
    text-align: center;
    img {
      margin: 0 auto;
    }
  }
  p.signature {
    font-size: 40px;
    color: $primary-gray;
    @media (min-width: 1200px) {
      font-size: 52px;
    }
  }
  span.username {
    color: #758f95;
    font-size: 22px;
    @media (min-width: 1200px) {
      font-size: 28px;
    }
  }
}
</style>
