<template>
  <div class="it-oddeven">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="it-oddeven-content">
            <div class="it-oddeven-content-txt">
              <h2>Join Fresh-net as a Seller</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed vitae vulputate nulla.
              </p>
              <ButtonDefault
                text="Join Now"
                color="green"
                href="http://google.com"
              />
            </div>
            <div class="it-oddeven-content-img">
              <img src="../../assets/image1.jpg" alt="" />
            </div>
          </div>
          <div class="it-oddeven-content">
            <div class="it-oddeven-content-txt">
              <h2>Build your Marketplace on Fresh-net</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu sem convallis, bibendum nunc vel, lacinia neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed vitae vulputate nulla.
              </p>
              <ButtonDefault text="Join Now" color="yellow" />
            </div>
            <div class="it-oddeven-content-img">
              <img src="../../assets/image2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDefault from "@/components/Helpers/Button.vue";
export default {
  name: "IT odd even",
  components: { ButtonDefault },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.it-oddeven {
  background: #fff;
  position: relative;
  padding: 60px 0 65px 0;
  @media (min-width: 1200px) {
    padding: 126px 0 65px 0;
  }
  .container-fluid {
    padding: 0;
  }
  .it-oddeven-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (min-width: 1200px) {
      flex-direction: row;
      gap: 0px;
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
    &:first-child {
      margin-bottom: 80px;
      @media (min-width: 992px) {
        margin-bottom: 0px;
      }
    }
    .it-oddeven-content-txt {
      padding: 0 10vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      @media (min-width: 992px) {
        width: 50vw;
      }
      h2 {
        font-size: 35px;
        margin-bottom: 30px;
        @media (min-width: 992px) {
          font-size: 40px;
          margin-bottom: 50px;
        }
      }
      p {
        font-size: 20px;
        margin-bottom: 40px;
        @media (min-width: 992px) {
          font-size: 24px;
          margin-bottom: 50px;
        }
      }
    }
    .it-oddeven-content-img {
      width: 100%;
      @media (min-width: 992px) {
        width: 50vw;
      }
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
