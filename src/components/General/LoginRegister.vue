<template>
  <section
    class="modal"
    :class="{ show: loginD || registerD }"
    @click="fecharModal"
  >
    <div class="modal-container" v-if="loginD">
      <div class="modal-icon active">
        <div class="icon-content"><i class="fas fa-user"></i></div>
      </div>
      <div class="modal-content">
        <h2 class="modal-title">Log In</h2>
        <div class="modal-inputs">
          <form class="modal-form">
            <fieldset class="modal-form-item">
              <input type="email" name="email" required spellcheck="false" />
              <label class="placeholder" for="email"> Email </label>
            </fieldset>
            <fieldset class="modal-form-item">
              <input
                type="password"
                name="password"
                required
                spellcheck="false"
              />
              <label class="placeholder" for="password"> Password </label>
            </fieldset>
            <button type="submit">Log In</button>
          </form>
        </div>
        <div class="modal-socials">
          <span>or login with</span>
          <div class="modal-socials-list">
            <div class="socials-item">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="socials-item">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="socials-item">
              <i class="fab fa-google"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span> <a href="#">Forgot your password?</a> </span
        ><span>Don’t have an account? <a href="#">Sign up</a></span>
      </div>
    </div>
    <div class="modal-container register-container" v-if="registerD">
      <div class="modal-icons-list">
        <div class="modal-icon active">
          <div class="icon-content">
            <i class="fas fa-user"></i>
          </div>
          <span>Sign up as a Buyer</span>
        </div>
        <div class="modal-icon">
          <span>Sign up as a Seller</span>
          <div class="icon-content">
            <i class="fas fa-industry"></i>
          </div>
        </div>
      </div>
      <div class="modal-content">
        <div class="modal-inputs">
          <form class="modal-form">
            <fieldset class="modal-form-item">
              <input type="text" name="firstName" required spellcheck="false" />
              <label class="placeholder" for="firstName"> First name </label>
            </fieldset>
            <fieldset class="modal-form-item">
              <input type="text" name="lastName" required spellcheck="false" />
              <label class="placeholder" for="lastName"> Last name </label>
            </fieldset>
            <fieldset class="modal-form-item">
              <input type="text" name="compName" required spellcheck="false" />
              <label class="placeholder" for="compName"> Company Name </label>
            </fieldset>
            <fieldset class="modal-form-item">
              <input type="email" name="email" required spellcheck="false" />
              <label class="placeholder" for="email"> Email </label>
            </fieldset>
            <fieldset class="modal-form-item">
              <input
                type="password"
                name="password"
                required
                spellcheck="false"
              />
              <label class="placeholder" for="password"> Password </label>
            </fieldset>
            <fieldset class="modal-form-item">
              <input
                type="password"
                name="rptPassword"
                required
                spellcheck="false"
              />
              <label class="placeholder" for="rptPassword">
                Repeat password
              </label>
            </fieldset>
            <div class="checkbox-item">
              <input type="checkbox" id="agree" name="agree" />
              <label for="agree"
                >I agree with the
                <router-link to="/terms" class="terms-link"
                  >Terms and Conditions</router-link
                ></label
              >
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div class="modal-socials">
          <span>or login with</span>
          <div class="modal-socials-list">
            <div class="socials-item">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="socials-item">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="socials-item">
              <i class="fab fa-google"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span>Already have an account? <a href="#">Sign In</a></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LoginRegister",
  components: {},
  props: {
    login: {
      type: Boolean,
    },
    register: {
      type: Boolean,
    },
  },
  data() {
    return {
      loginD: this.login,
      registerD: this.register,
    };
  },
  methods: {
    fecharModal: function ({ target, currentTarget }) {
      if (target == currentTarget) {
        this.loginD = false;
        this.registerD = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  align-items: center;
  justify-content: center;
  &.show {
    display: flex;
  }
  &::before {
    content: "";
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal-container {
    position: relative;
    background: #fff;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 30px;
    .modal-icon {
      position: absolute;
      top: -100px;
      left: calc(50% - 75px);
      z-index: 1;
      .icon-content {
        width: 105px;
        height: 105px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 48px;
        background: #45595d;
        border-radius: 100%;
        transition: all 0.4s;
      }
      &.active {
        .icon-content {
          width: 150px;
          height: 150px;
          font-size: 70px;
          background: #21b3d1;
          transition: all 0.4s;
        }
      }
    }
    &.register-container {
      width: 56%;
      .modal-content {
        max-width: 100%;
        margin-top: 25px;
        .modal-form {
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          .modal-form-item {
            margin-bottom: 0;
          }
        }
      }
      .modal-icons-list {
        position: absolute;
        top: -100px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .modal-icon {
          position: static;
          display: flex;
          align-items: center;
          span {
            display: none;
          }
          &.active {
            span {
              display: block;
              position: relative;
              font-family: Fredoka One;
              font-size: 34px;
              line-height: 1.2;
              text-align: center;
              color: #fff;
              padding: 24px 46px;
              background: #45595d;
              border-radius: 44px;
              margin-left: -35px;
              margin-right: -35px;
              z-index: -1;
            }
          }
        }
      }
    }
  }
  .modal-content {
    max-width: 400px;
    border: none;
    padding: 50px 45px 0 45px;
    border-radius: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    .modal-title {
      font-size: 42px;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 25px;
    }
    .modal-socials {
      span {
        font-size: 20px;
        line-height: 1.2;
        text-align: center;
        color: #94a4a8;
      }
      .modal-socials-list {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: 20px 0 25px 0;
        .socials-item {
          font-size: 28px;
          color: #fff;
          background: #45595d;
          width: 62px;
          height: 62px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
        }
      }
    }
  }
  .modal-footer {
    border: none;
    background: #bdced1;
    border-radius: 30px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    color: #45595d;
    display: flex;
    flex-direction: column;
    width: 100%;
    a {
      color: #21b3d1;
    }
  }
  .modal-form {
    display: grid;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .modal-form-item {
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
      width: 100%;
      input,
      textarea {
        font-size: 24px;
        line-height: 28px;
        color: #94a4a8;
        padding: 15px;
        border-radius: 30px;
        border: 1px solid #758f95;
        outline: none;
        width: 100%;
      }
      .placeholder {
        position: absolute;
        margin: 16px 0;
        padding: 0 4px;
        color: #94a4a8;
        display: flex;
        align-items: center;
        font-size: 24px;
        line-height: 28px;
        top: 0;
        transition: all 0.2s;
        transform-origin: 0% 0%;
        background: none;
        pointer-events: none;
        justify-content: center;
      }
      input:valid + .placeholder,
      input:focus + .placeholder,
      textarea:valid + .placeholder,
      textarea:focus + .placeholder {
        transform: scale(0.8) translateY(-35px) translateX(10px);
        background: #fff;
      }
      input:focus,
      textarea:focus {
        color: #94a4a8;
        border-color: #284b63;
      }
      input:focus + .placeholder,
      textarea:focus + .placeholder {
        color: #94a4a8;
      }
    }
    button {
      background: #21b3d1;
      border-radius: 30px;
      border: none;
      width: 100%;
      color: #fff;
      font-size: 24px;
      padding: 12px;
    }
  }
  .checkbox-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    label {
      font-size: 20px;
      line-height: 1.2;
      color: #94a4a8;
      margin-bottom: 0;
      a {
        color: #21b3d1;
      }
    }
  }
}
</style>
<style lang="scss">
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type="checkbox"],
  input[type="radio"] {
    --active: #21b3d1;
    --active-inner: #fff;
    /* --focus: 2px rgba(39, 94, 254, 0.3); */
    --border: #bdced1;
    --border-hover: #21b3d1;
    --background: #bdced1;
    --disabled: #f6f8ff;
    --disabled-inner: #e1e6f9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 22px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    &:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }
    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    &:not(.switch) {
      width: 22px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 22px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  input[type="checkbox"] {
    &:not(.switch) {
      border-radius: 8px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 20deg));
      }
      &:checked {
        --r: 43deg;
      }
    }
    &.switch {
      width: 38px;
      border-radius: 12px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }
      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: 0.6;
          }
        }
      }
    }
  }
  input[type="radio"] {
    border-radius: 50%;
    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, 0.7));
    }
    &:checked {
      --s: 0.5;
    }
  }
}
</style>