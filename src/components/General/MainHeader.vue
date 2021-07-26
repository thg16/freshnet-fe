<template>
  <header class="main-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="top-menu fixed-top" v-if="!isLogged">
            <nav class="navbar navbar-expand-md justify-content-between">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-top"
              >
                <span class="navbar-toggler-icon">Menu</span>
              </button>
              <router-link to="/" class="header-logo navbar-brand">
                <img src="../../assets/logo_header.png" alt="Logo Header" />
              </router-link>
              <div class="collapse navbar-collapse" id="navbar-top">
                <ul class="navbar-nav ml-md-auto">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link"
                      >Home <span class="sr-only">(current)</span></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/marketplace" class="nav-link"
                      >Marketplace</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/community" class="nav-link"
                      >Community</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/resources" class="nav-link"
                      >Resources</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <div @click="setLogin" class="nav-link">Log In</div>
                  </li>
                  <li class="nav-item signin">
                    <!-- <div @click="setRegister"> -->
                    <ButtonDefault text="Sign in" @click="setRegister" />
                    <!-- </div> -->
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="logged-menu top-menu fixed-top" v-else>
            <div class="top-logged-menu">
              <router-link to="/" class="header-logo">
                <img src="../../assets/logo_header.png" alt="Logo Header" />
              </router-link>
              <div class="address">
                <p class="address-item">
                  Shipping to Leopold Road, <br />Caxias do...
                  <span>95082-380</span>
                </p>
                <span class="address-icon"
                  ><i class="fas fa-map-marker-alt"></i
                ></span>
              </div>
              <div class="search">
                <div class="big-input">
                  <input placeholder="Type your search" />
                  <button><i class="fas fa-search"></i></button>
                </div>
              </div>
              <div class="buttons">
                <div class="shopping-cart" data-count="1">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="shopping-bell" data-count="74">
                  <i class="fas fa-bell"></i>
                </div>
              </div>
              <div class="user">
                <span class="user-name"> Thiago Cruz</span
                ><span class="user-photo"
                  ><img src="../../assets/supplier4.png" alt="User Photo"
                /></span>
              </div>
            </div>
            <nav class="navbar navbar-expand-md justify-content-between">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-top"
              >
                <span class="navbar-toggler-icon">Menu</span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-top">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link"
                      >Home <span class="sr-only">(current)</span></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/marketplace" class="nav-link"
                      >Marketplace</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/community" class="nav-link"
                      >Community</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link"
                      >Marketplace</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Community</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="login" v-if="!!login"><LoginRegister login /></div>
  <div class="register" v-if="!!register"><LoginRegister register /></div>
</template>

<script>
import ButtonDefault from "@/components/Helpers/Button.vue";
import LoginRegister from "@/components/General/LoginRegister.vue";
export default {
  name: "MainHeader",
  components: { LoginRegister, ButtonDefault },
  data() {
    return {
      isLogged: false,
      login: false,
      register: false,
    };
  },
  methods: {
    setLogin() {
      this.login = true;
      this.register = false;
    },
    setRegister() {
      this.login = false;
      this.register = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  .navbar {
    padding: 36px;
    padding-bottom: 0;
    transition: all 0.3s;

    .navbar-collapse {
      justify-content: flex-end;
    }
  }
  .navbar-nav {
    align-items: center;
    gap: 50px;
    .nav-item {
      .nav-link {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        text-align: right;
        color: #fff;
        text-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
.logged-menu {
  display: flex;
  flex-direction: column;
  .top-logged-menu {
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;
    padding: 10px 36px;
    align-items: center;
  }
  .navbar .navbar-collapse {
    justify-content: space-around;
  }
  .address {
    display: flex;
    grid-gap: 10px;
    align-items: center;
    color: #fff;
    .address-item {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      text-align: right;
      margin: 0;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      span {
        font-weight: 700;
      }
    }
    .address-icon {
      font-size: 32px;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }
  }
  .search {
    .big-input {
      input {
        width: 340px;
        padding: 15px 54px 15px 15px;
        font-family: "Fredoka One", cursive;
        font-size: 18px;
        line-height: 22px;
        color: #bdced1;
        &::placeholder {
          color: #bdced1;
        }
      }
      button {
        font-size: 18px;
        width: 44px;
        padding: 8px 0;
        margin-left: -50px;
        border-radius: 100%;
      }
    }
  }
  .buttons {
    display: flex;
    grid-gap: 20px;
    color: #fff;
    font-size: 32px;
    line-height: 36px;
    align-items: center;
    div {
      position: relative;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
      &:after {
        content: attr(data-count);
        position: absolute;
        width: 22px;
        height: 22px;
        background: #d81f44;
        border-radius: 50%;
        top: -5px;
        right: -10px;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
      }
    }
  }
  .user {
    display: flex;
    grid-gap: 15px;
    justify-content: center;
    align-items: center;
    .user-name {
      font-size: 20px;
      font-weight: 700;
      line-height: 23px;
      text-align: right;
      color: #fff;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }
    .user-photo {
      padding: 5px;
      background: #fff;
      border-radius: 100%;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
<style lang="scss">
.navbar-nav {
  .nav-item.signin a {
    padding: 12px 45px;
  }
}
.top-menu.scrolled.fixed-top {
  .top-logged-menu {
    background: linear-gradient(
      90.39deg,
      rgba(45, 126, 142, 0.52) -2.69%,
      rgba(42, 52, 54, 0.52) 104.35%
    );
    padding: 10px 25px;
    transition: all 0.3s;
  }
  .navbar {
    padding: 15px 25px;
    transition: all 0.3s;
    background: rgba(0, 0, 0, 0.34);
  }
}
</style>
