<template>
  <div class="detail-page">
    <div class="detail-content">
      <div class="author">
        <span> By <b>Thiago Cruz</b> in <b>Coffees</b></span>
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem
        convallis, bibendum nunc vel, lacinia neque. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
        vitae vulputate nulla.
      </p>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
        sagittis eros. Aliquam a erat in libero finibus laoreet vitae non
        lectus. Mauris id aliquet ipsum. Ut convallis auctor tristique. Donec
        consectetur non velit in lacinia. Integer hendrerit mollis arcu a
        lobortis. Nullam at tortor augue. Pellentesque varius vitae eros sed
        gravida. Etiam quis placerat justo. Morbi orci erat, semper tempus
        tellus vitae, dapibus tempus purus. Nam elementum dui eget felis laoreet
        lobortis. Vestibulum finibus lorem vel ipsum aliquam, in porta diam
        aliquet.
      </p>
      <div class="detail-slider">
        <img
          src="../../assets/detail-image-middle.png"
          alt=""
          class="img-fluid"
        />
        SLIDER
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem
        convallis, bibendum nunc vel, lacinia neque. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
        vitae vulputate nulla.
      </p>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
        sagittis eros. Aliquam a erat in libero finibus laoreet vitae non
        lectus. Mauris id aliquet ipsum. Ut convallis auctor tristique. Donec
        consectetur non velit in lacinia. Integer hendrerit mollis arcu a
        lobortis.
      </p>
      <div class="detail-image">
        <img
          src="../../assets/detail-image-middle.png"
          alt=""
          class="img-fluid"
        />
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem
        convallis, bibendum nunc vel, lacinia neque. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
        vitae vulputate nulla.
      </p>
      <div class="footer-detail">
        <div class="icons">
          <span class="icon"><i class="fas fa-heart"></i> 295</span>
          <span class="icon"><i class="fas fa-comment"></i> 1295</span>
        </div>
        <div class="breadcrumbs">
          <span>Blog <i class="fas fa-angle-double-right"></i> Coffes</span>
        </div>
        <div class="footer-author">
          <span> By <b>Thiago Santos</b></span>
        </div>
      </div>
    </div>
  </div>
  <div class="other-posts">
    <div class="other-posts-title">
      <h2 class="main-title">See some more Posts</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog Detail",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.detail-page {
  .detail-content {
    margin-bottom: 400px;
    .author {
      font-size: 20px;
      line-height: 23px;
      color: #45595d;
      text-align: right;
      margin-bottom: 50px;
    }
    .text {
      margin-bottom: 20px;
      font-size: 22px;
      line-height: 1.3;
      color: #45595d;
    }
    .detail-slider {
      margin: 70px 0;
    }
    .detail-image {
      margin: 50px 0;
    }
    .footer-detail {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      & > div {
        position: relative;
        &:after {
          content: "";
          width: 1px;
          height: 100%;
          background: #b1ccd0;
          position: absolute;
          right: -66px;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
      }
      .breadcrumbs {
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #45595d;
        font-weight: 700;
        i {
          color: #7f9498;
          margin: 0 15px;
        }
      }
      .footer-author {
        font-size: 20px;
        line-height: 23px;
        font-weight: 700;
        text-align: right;
        color: #7f9498;
        b {
          font-weight: 700;
          color: #45595d;
        }
      }
      .icons {
        display: flex;
        color: #7f9498;
        align-items: center;
        font-size: 16px;
        gap: 20px;
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
}
</style>