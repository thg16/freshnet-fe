<template>
  <div class="features-home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title">Multiple features included for free</h2>
          <div class="features-home-grid">
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
            <div class="features-home-grid-items">
              <div class="features-hgi-content">
                <div class="features-hgi-img"><i class="fas fa-leaf"></i></div>
                <p>Dashboards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.features-home {
  display: flex;
  background: $primary-blue;
  position: relative;
  flex-direction: column;
  margin-top: -2px;
  .main-title {
    color: #fff;
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: 60px;
    @media (min-width: 1200px) {
      margin-bottom: 130px;
    }
  }
  .features-home-grid {
    display: grid;
    text-align: center;
    gap: 30px 15px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .features-home-grid-items {
      background: #ffffff;
      border-radius: 53px;
      .features-hgi-content {
        display: flex;
        align-items: center;
        padding: 8px;
        gap: 12px;
        .features-hgi-img {
          font-size: 30px;
          width: 65px;
          height: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          color: #fff;
        }
        p {
          font-weight: 500;
          font-size: 20px;
          color: #45595d;
          margin: 0;
          margin-block-start: 0;
          margin-block-end: 0;
        }
      }
      &:nth-child(4n + 1) {
        .features-hgi-img {
          background: $primary-blue;
        }
      }
      &:nth-child(4n + 2) {
        .features-hgi-img {
          background: $primary-red;
        }
      }
      &:nth-child(4n + 3) {
        .features-hgi-img {
          background: $primary-green;
        }
      }
      &:nth-child(4n) {
        .features-hgi-img {
          background: $primary-yellow;
        }
      }
    }
  }
}
</style>
