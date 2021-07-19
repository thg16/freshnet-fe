<template>
  <div class="forum">
    <h2 class="main-title">Welcome to our community forum</h2>
    <div class="forum-content">
      <div class="forum-questions">
        <div class="forum-questions-list">
          <div class="grid-item">
            <div class="item-img">
              <img
                src="../../assets/supplierforum.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="item-content">
              <div class="item-content-top-bar">
                <div class="name-status">
                  <div class="title">
                    <span class="name-user">Thiago Cruz</span> asked:
                  </div>
                  <div class="status answered"><p>Answered</p></div>
                </div>
                <div class="post-date">Jan 8, 3:12 pm</div>
              </div>
              <div class="item-content-text">
                What makes Fresh-net so good? But using two lines of text to
                describe it. Please, explain.
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="item-img">
              <img
                src="../../assets/supplierforum.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="item-content">
              <div class="item-content-top-bar">
                <div class="name-status">
                  <div class="title">
                    <span class="name-user">Thiago Cruz</span> asked:
                  </div>
                  <div class="status reported"><p>Reported</p></div>
                </div>
                <div class="post-date">Jan 8, 3:12 pm</div>
              </div>
              <div class="item-content-text">
                What makes Fresh-net so good? But using two lines of text to
                describe it. Please, explain.
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="item-img">
              <img
                src="../../assets/supplierforum.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="item-content">
              <div class="item-content-top-bar">
                <div class="name-status">
                  <div class="title">
                    <span class="name-user">Thiago Cruz</span> asked:
                  </div>
                  <div class="status cloned"><p>Clone of #1347</p></div>
                </div>
                <div class="post-date">Jan 8, 3:12 pm</div>
              </div>
              <div class="item-content-text">
                What makes Fresh-net so good? But using two lines of text to
                describe it. Please, explain.
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="item-img">
              <img
                src="../../assets/supplierforum.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="item-content">
              <div class="item-content-top-bar">
                <div class="name-status">
                  <div class="title">
                    <span class="name-user">Thiago Cruz</span> asked:
                  </div>
                  <div class="status"><p>Open</p></div>
                </div>
                <div class="post-date">Jan 8, 3:12 pm</div>
              </div>
              <div class="item-content-text">
                What makes Fresh-net so good? But using two lines of text to
                describe it. Please, explain.
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="item-img">
              <img
                src="../../assets/supplierforum.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="item-content">
              <div class="item-content-top-bar">
                <div class="name-status">
                  <div class="title">
                    <span class="name-user">Thiago Cruz</span> asked:
                  </div>
                  <div class="status answered"><p>Answered</p></div>
                </div>
                <div class="post-date">Jan 8, 3:12 pm</div>
              </div>
              <div class="item-content-text">
                What makes Fresh-net so good? But using two lines of text to
                describe it. Please, explain.
              </div>
            </div>
          </div>
        </div>
        <div class="pagination-forum">
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
      <div class="sidebar"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forum",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.forum {
  .main-title {
    margin-bottom: 90px;
  }
  .forum-questions {
    .forum-questions-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      .grid-item {
        background: #dff1f4;
        border-radius: 54px;
        padding: 10px 35px 10px 10px;
        display: grid;
        grid-template-columns: 90px 1fr;
        gap: 15px;
        .item-content {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .item-content-top-bar {
            display: flex;
            justify-content: space-between;
            .name-status {
              display: flex;
              gap: 10px;
              justify-content: center;
              align-items: center;
              .title {
                font-size: 18px;
                line-height: 1.2;
                .name-user {
                  font-weight: 700;
                }
              }
              .status {
                font-size: 14px;
                line-height: 1.2;
                text-align: center;
                padding: 4px 20px;
                border-radius: 54px;
                color: #fff;
                background: #21b3d1;
                &.answered {
                  background: #5ccd62;
                }
                &.cloned {
                  background: #f8b823;
                }
                &.reported {
                  background: #d81f44;
                }
                p {
                  margin-bottom: 0;
                }
              }
            }
            .post-date {
              font-size: 14px;
              line-height: 1.2;
              text-align: right;
              color: #5c757a;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .item-content-text {
            font-weight: 500;
            font-size: 20px;
            line-height: 1.2;
            color: #5c757a;
          }
        }
      }
    }
  }
  .pagination-forum {
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
  .forum-content {
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 70px;
  }
}
</style>