<template>
  <div class="faq">
    <div class="common-questions">
      <h2 class="main-title">All the answers you need!</h2>
      <div class="common-questions-list">
        <div class="questions-item">
          <div class="number-item">1</div>
          <div class="text-item">What makes Fresh-net so good?</div>
        </div>
        <div class="questions-item">
          <div class="number-item">2</div>
          <div class="text-item">
            What makes Fresh-net so good? But using two lines of text to
            describe it.
          </div>
        </div>
        <div class="questions-item">
          <div class="number-item">3</div>
          <div class="text-item">What makes Fresh-net so good?</div>
        </div>
        <div class="questions-item">
          <div class="number-item">4</div>
          <div class="text-item">What makes Fresh-net so good?</div>
        </div>
        <div class="questions-item">
          <div class="number-item">5</div>
          <div class="text-item">
            What makes Fresh-net so good? But using two lines of text to
            describe it.
          </div>
        </div>
      </div>
    </div>
    <div class="search-questions">
      <h2 class="main-title">Didn’t find what you are looking for?</h2>
      <div class="search-questions-input">
        <input placeholder="Type your question here" />
        <button>Search</button>
      </div>
      <div class="search-questions-list">
        <div class="questions-item">
          <div class="text-item">
            What makes Fresh-net so good? But using two lines of text to
            describe it just because we need to test layouts.
          </div>
        </div>
        <div class="questions-item">
          <div class="text-item">
            What makes Fresh-net so good? But using two lines of text to
            describe it.
          </div>
        </div>
        <div class="questions-item">
          <div class="text-item">What makes Fresh-net so good?</div>
        </div>
        <div class="questions-item">
          <div class="text-item">What makes Fresh-net so good?</div>
        </div>
        <div class="questions-item">
          <div class="text-item">
            What makes Fresh-net so good? But using two lines of text to
            describe it.
          </div>
        </div>
      </div>
      <div class="pagination-faq">
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
</template>
<script>
export default {
  name: "faq",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.faq {
  .common-questions {
    margin-bottom: 100px;
    .main-title {
      margin-bottom: 90px;
    }
    .common-questions-list {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .questions-item {
        display: grid;
        background: #ffffff;
        box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
        border-radius: 68px;
        gap: 20px;
        padding: 15px 65px 15px 15px;
        grid-template-columns: 105px 1fr;
        cursor: pointer;
        .number-item {
          font-family: Fredoka One;
          font-size: 42px;
          line-height: 1.2;
          color: #ffffff;
          background: #87aab1;
          border-radius: 100%;
          width: 105px;
          height: 105px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 36px;
          line-height: 1.2;
          color: #45595d;
          font-weight: 700;
        }
      }
    }
  }
  .search-questions {
    .main-title {
      margin-bottom: 90px;
    }
    .search-questions-input {
      display: block;
      text-align: center;
      margin-bottom: 60px;
      input {
        border: none;
        width: 100%;
        max-width: 710px;
        font-family: "Fredoka One", cursive;
        font-size: 32px;
        padding: 22px 187px 22px 30px;
        color: #333;
        outline: none;
        background: #bac7ca;
        border-radius: 50px;
      }
      button {
        transition: all 0.43s;
        border: none;
        width: 150px;
        border-radius: 50px;
        font-family: "Fredoka One", cursive;
        font-size: 30px;
        padding: 14px 0;
        color: #fff;
        margin-left: -163px;
        background: #f8b823;
      }
    }
    .search-questions-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      .questions-item {
        background: #dff1f4;
        border-radius: 68px;
        padding: 25px 40px 25px 55px;
        .text-item {
          font-size: 28px;
          color: #45595d;
          font-weight: 700;
          line-height: 1.2;
        }
      }
    }
  }
  .pagination-faq {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
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
}
</style>