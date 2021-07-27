<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-midle">
          <h2>Just like your Marketplace</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </p>
          <div class="cards-definition">CREATE IT</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-midle">
          <h2>Easily find the best products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </p>
          <div class="cards-definition">CREATE IT</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tab2Content",
  components: {},
  data() {
    return {};
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
</style>
