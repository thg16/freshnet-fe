<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="main-title">We care about the World</h2>
        <div class="it-oddeven">
          <div class="it-oddeven-content">
            <div class="it-oddeven-content-txt">
              <h3>Naturally Fresh</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed vitae vulputate nulla.
              </p>
            </div>
            <div class="it-oddeven-content-img">
              <div class="icons-tabs"><i class="fas fa-leaf"></i></div>
            </div>
          </div>
          <div class="it-oddeven-content">
            <div class="it-oddeven-content-txt">
              <h3>The Marketplace you love</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed vitae vulputate nulla.
              </p>
            </div>
            <div class="it-oddeven-content-img">
              <div class="icons-tabs"><i class="fas fa-shopping-cart"></i></div>
            </div>
          </div>
          <div class="it-oddeven-content">
            <div class="it-oddeven-content-txt">
              <h3>Naturally Fresh</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed vitae vulputate nulla.
              </p>
            </div>
            <div class="it-oddeven-content-img">
              <div class="icons-tabs"><i class="fas fa-leaf"></i></div>
            </div>
          </div>
          <div class="it-oddeven-content">
            <div class="it-oddeven-content-txt">
              <h3>The Marketplace you love</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed vitae vulputate nulla.
              </p>
            </div>
            <div class="it-oddeven-content-img">
              <div class="icons-tabs"><i class="fas fa-shopping-cart"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="map">
    <img src="../../assets/map.png" class="img-fluid" />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-midle">
          <h3>Every mile counts!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </p>
          <div class="card-list">
            <div class="card-item">
              <div class="icon"><i class="fas fa-truck"></i></div>
              <h4>Food Miles</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia.
              </p>
            </div>
            <div class="card-item">
              <div class="icon"><i class="fas fa-cloud"></i></div>
              <h4>CO2 Footprint</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia.
              </p>
            </div>
            <div class="card-item">
              <div class="icon"><i class="fas fa-recycle"></i></div>
              <h4>Sustainability</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tab3Content",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.main-title {
  margin-bottom: 90px;
}
.it-oddeven-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 0px;
    margin-bottom: 100px;
    &:nth-child(even) {
      flex-direction: row-reverse;
      .it-oddeven-content-txt {
        align-items: flex-start;
        p {
          text-align: left;
        }
      }
    }
  }
  .it-oddeven-content-txt {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    width: 100%;
    h3 {
      font-size: 35px;
      margin-bottom: 20px;
      @media (min-width: 992px) {
        font-size: 40px;
        margin-bottom: 25px;
      }
    }
    p {
      font-size: 20px;
      // margin-bottom: 40px;
      @media (min-width: 992px) {
        font-size: 24px;
        // margin-bottom: 50px;
      }
    }
  }
  .it-oddeven-content-img {
    // width: 100%;
    .icons-tabs {
      width: 160px;
      height: 160px;
      border-radius: 100%;
      background: $primary-green;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 70px;
        line-height: 81px;
        color: #fff;
      }
    }
    img {
      max-width: 100%;
    }
  }
  &:nth-child(4n + 1) {
    .it-oddeven-content-img {
      .icons-tabs {
        background: $primary-green;
      }
    }
    .it-oddeven-content-txt {
      h3 {
        color: $primary-green;
      }
    }
  }
  &:nth-child(4n + 2) {
    .it-oddeven-content-img {
      .icons-tabs {
        background: $primary-blue;
      }
    }
    .it-oddeven-content-txt {
      h3 {
        color: $primary-blue;
      }
    }
  }
  &:nth-child(4n + 3) {
    .it-oddeven-content-img {
      .icons-tabs {
        background: $primary-red;
      }
    }
    .it-oddeven-content-txt {
      h3 {
        color: $primary-red;
      }
    }
  }
  &:nth-child(4n) {
    .it-oddeven-content-img {
      .icons-tabs {
        background: $primary-yellow;
      }
    }
    .it-oddeven-content-txt {
      h3 {
        color: $primary-yellow;
      }
    }
  }
}
.map {
  margin: 90px 0;
}
.text-midle {
  h3 {
    font-size: 3rem;
    line-height: 3.4rem;
    text-align: center;
    margin-bottom: 60px;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    margin-bottom: 100px;
  }
  .card-list {
    display: flex;
    gap: 35px;
    .card-item {
      background: #dff1f4;
      border-radius: 20px;
      padding: 45px 30px;
      &.active {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        background: #fff;
      }
      .icon {
        font-size: 88px;
        line-height: 100px;
        text-align: center;
        color: #87aab1;
        margin-bottom: 25px;
      }
      h4 {
        font-family: Fredoka One;
        font-size: 30px;
        line-height: 36px;
        text-align: center;
        color: #45595e;
        margin-bottom: 15px;
      }
      p {
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-bottom: 0;
        color: #45595d;
      }
    }
  }
}
</style>
