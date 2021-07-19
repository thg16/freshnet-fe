<template>
  <div class="fresh-net-difference">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title fnd-title">
            One Platform, Thousands of Suppliers
          </h2>
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
              <div class="pile-of-cards">
                <div class="card-item card-3">
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
                <div class="card-item card-2">
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
                <div class="card-item card-1">
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
  padding-bottom: 60px;
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
      // grid-gap: 0px;
      grid-gap: 50px;
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
.fnd-content-cards {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 550px;
  .pile-of-cards {
    position: relative;
    .card-item {
      box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.16);
      border-radius: 20px;
      padding: 15px;
      width: 270px;
      height: 390px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      position: absolute;
      &.card-1 {
        top: -15px;
      }
      &.card-2 {
        background: #dff1f4;
        transform: rotate(16.75deg);
        left: 95px;
        top: -30px;
        .img-card {
          background: #d81f44;
        }
      }
      &.card-3 {
        left: 203px;
        top: -20px;
        background: #dff1f4;
        transform: rotate(36.1deg);
        .img-card {
          background: #5ccd62;
        }
      }
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
