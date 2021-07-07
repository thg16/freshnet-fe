<template>
  <div class="fresh-net-difference">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title fnd-title">The fresh-net difference</h2>
          <div class="fnd-content">
            <div class="fnd-content-info">
              <h3 class="fnd-subtitle">
                Connect with sustainable, <br />ethical suppliers
              </h3>
              <p class="fnd-text">
                Fresh-Net allows state of the art searcheability <br />to
                efficiently find suppliers that meet your<br />
                requirements
              </p>
              <div class="fnd-stats">
                <div class="fnd-stats-content">
                  <div class="fnd-stats-content-item">
                    <h3>20%+</h3>
                    <span>Cost Savings</span>
                  </div>
                  <hr class="vertical-separator" />
                  <div class="fnd-stats-content-item">
                    <h3>40%+</h3>
                    <span>Efficiency gains</span>
                  </div>
                  <hr class="vertical-separator" />
                  <div class="fnd-stats-content-item">
                    <h3>20%+</h3>
                    <span>Cost Savings</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="fnd-content-cards">
              <h1>FAZER CARDS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreshNetDifference",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.fresh-net-difference {
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  .fnd-title {
    margin-bottom: 60px;
    font-size: 50px;
    line-height: 1.2;
    @media (min-width: 1200px) {
      font-size: 60px;
      margin-bottom: 150px;
    }
  }
  .fnd-subtitle {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: $primary-gray;
    line-height: 1.2;
    text-align: right;
    @media (min-width: 1200px) {
      font-size: 36px;
    }
  }
  .fnd-content {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 50px;
    @media (min-width: 1200px) {
      flex-direction: row;
      grid-gap: 0px;
    }
    .fnd-content-info {
      text-align: right;
      display: flex;
      flex-direction: column;
      grid-gap: 20px;
      @media (min-width: 1200px) {
        grid-gap: 40px;
      }
    }
    .fnd-text {
      font-size: 20px;
      line-height: 1.2;
      @media (min-width: 1200px) {
        font-size: 24px;
      }
    }
  }
}
.fnd-stats {
  display: flex;
  width: 100%;
  .fnd-stats-content {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    .fnd-stats-content-item {
      h3 {
        margin: 0;
        margin-block-end: 0;
        font-family: "Roboto", sans-serif;

        font-weight: 700;
        font-size: 36px;
        color: $primary-red;
      }
      span {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
      &:first-child {
        h3 {
          color: $primary-green;
        }
      }
      &:last-child {
        h3 {
          color: $primary-blue;
        }
      }
    }
  }
}
hr.vertical-separator {
  display: flex;
  width: 200px;
  height: 1px;
  background: #c4c4c4;
  border: 1px solid #c4c4c4;
  @media (min-width: 768px) {
    width: 1px;
    height: 100%;
  }
}
</style>
