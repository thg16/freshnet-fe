<template>
  <div class="events resources" v-if="detail != true">
    <div class="title-resources">
      <h2 class="main-title">Our next Events</h2>
    </div>
    <div class="resources-content">
      <div class="resources-list">
        <div class="resources-item">
          <div class="item-date"><span>May/03</span></div>
          <div class="item-image">
            <img src="../../assets/resources.png" alt="" class="img-fluid" />
          </div>
          <div class="item-title">
            <h3>Name of the latest post</h3>
            <div class="item-author">
              <span> By <b>Thiago Cruz</b> in <b>Coffees</b></span>
            </div>
          </div>
          <div class="item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </div>
          <div class="item-btn">
            <ButtonDefault text="Continue reading" href="/resources" />
          </div>
        </div>
        <div class="resources-item">
          <div class="item-date"><span>May/03</span></div>
          <div class="item-image">
            <img src="../../assets/resources.png" alt="" class="img-fluid" />
          </div>
          <div class="item-title">
            <h3>Name of the latest post but in two lines</h3>
            <div class="item-author">
              <span> By <b>Thiago Cruz</b> in <b>Coffees</b></span>
            </div>
          </div>
          <div class="item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </div>
          <div class="item-btn">
            <ButtonDefault text="Continue reading" href="/resources" />
          </div>
        </div>
        <div class="resources-item">
          <div class="item-date"><span>May/03</span></div>
          <div class="item-image">
            <img src="../../assets/resources.png" alt="" class="img-fluid" />
          </div>
          <div class="item-title">
            <h3>Name of the latest post</h3>
            <div class="item-author">
              <span> By <b>Thiago Cruz</b> in <b>Coffees</b></span>
            </div>
          </div>
          <div class="item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            sem convallis, bibendum nunc vel, lacinia neque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed vitae vulputate nulla.
          </div>
          <div class="item-btn">
            <ButtonDefault text="Continue reading" href="/resources" />
          </div>
        </div>
      </div>
      <div class="sidebar">
        <Sidebar />
      </div>
    </div>
    <div class="pagination-resources">
      <div class="pagination">
        <div class="prev-button nav-button">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="pages-list">
          <div class="pages-list-item">1</div>
          <div class="pages-list-item">2</div>
          <div class="pages-list-item">3</div>
          <div class="pages-list-item">4</div>
          <div class="pages-list-item">5</div>
          <div class="pages-list-item">...</div>
          <div class="pages-list-item">16</div>
        </div>
        <div class="next-button nav-button">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="details-items" v-else>
    <div class="details">
      <Details />
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>
<script>
import ButtonDefault from "@/components/Helpers/Button.vue";
import Sidebar from "@/components/Resources/Sidebar.vue";
import Details from "@/components/Resources/EventDetail.vue";
export default {
  name: "Events",
  components: { ButtonDefault, Sidebar, Details },
  data() {
    return { detail: true };
  },
};
</script>
<style lang="scss" scoped>
.details-items {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 70px;
  margin-bottom: 80px;
}
.events {
  .pagination-resources {
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 70px;
    margin-bottom: 80px;
  }
  .title-resources {
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 70px;
    .main-title {
      margin-bottom: 100px;
    }
  }
  .resources-content {
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 70px;
    .resources-list {
      display: flex;
      flex-direction: column;
      gap: 90px;
      .resources-item {
        position: relative;
        .item-date {
          background: #45595d;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
          border-radius: 38px;
          position: absolute;
          padding: 20px 30px;
          top: -36px;
          right: 36px;
          span {
            font-family: Fredoka One;
            font-size: 28px;
            line-height: 34px;
            color: #fff;
          }
        }
        .item-image {
          margin-bottom: 40px;
        }
        .item-title {
          padding-left: 60px;
          margin-bottom: 35px;
          h3 {
            font-family: Fredoka One;
            font-style: normal;
            font-weight: normal;
            font-size: 44px;
            line-height: 53px;
            color: #21b3d1;
            text-align: left;
            margin-bottom: 10px;
          }
          .item-author {
            font-size: 20px;
            line-height: 23px;
            color: #45595d;
          }
        }
        .item-text {
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 28px;
          color: #45595d;
          margin-bottom: 35px;
        }
        .item-btn {
          text-align: center;
        }
      }
    }
  }
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 90px 0 30px 0;
  .nav-button {
    background: #45595d;
    width: 48px;
    height: 48px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    transition: all 0.2s;
    border-radius: 100%;
    cursor: pointer;
    &:hover,
    &:focus {
      background: #21b3d1;
      transition: all 0.2s;
    }
  }
  .pages-list {
    margin: 0 50px;
    display: grid;
    gap: 20px;
    font-size: 28px;
    text-align: center;
    color: #45595d;
    grid-template-columns: repeat(7, 1fr);
    .pages-list-item {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      cursor: pointer;
      &:hover,
      &:focus {
        background: #21b3d1;
        color: #fff;
      }
    }
  }
}
</style>