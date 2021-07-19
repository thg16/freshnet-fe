<template>
  <div class="find-here">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title fnd-title">What you will find here</h2>
          <div class="fnd-content">
            <p class="fnd-text">
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
</template>

<script>
export default {
  name: "FindHere",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.find-here {
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
    .fnd-text {
      font-size: 20px;
      line-height: 1.2;
      @media (min-width: 1200px) {
        font-size: 24px;
        max-width: 715px;
        text-align: center;
      }
    }
  }
}
</style>
