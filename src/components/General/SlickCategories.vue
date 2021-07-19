<template>
  <div class="slick-categories">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main-title">Our Categories</h2>
          <div class="categories-slick">
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/categoriesslick.png" alt="" />
                <h3 class="title-categories-slick">Title</h3>
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
  name: "Slick Categories",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../scss/colors";
.slick-categories {
  display: flex;
  background: #fff;
  position: relative;
  flex-direction: column;
  margin-top: -2px;
  .main-title {
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: 40px;
    @media (min-width: 1200px) {
      margin-bottom: 45px;
    }
  }
}

.categories-slick {
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
    .title-categories-slick {
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
    top: 65px;
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
}
</style>
