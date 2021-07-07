<template>
  <div class="contact-form">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contact-form-content">
            <h2 class="cfm-title">Still not convinced?</h2>
            <h3 class="cfm-subtitle">
              Book a demo for free and we’ll take you through our features
            </h3>
            <form class="cfm-form">
              <fieldset class="cfm-form-item">
                <input
                  type="text"
                  name="full-name"
                  required
                  spellcheck="false"
                />
                <label class="placeholder" for="full-name">
                  Your full name
                </label>
              </fieldset>
              <fieldset class="cfm-form-item">
                <input
                  type="text"
                  name="best-email"
                  required
                  spellcheck="false"
                />
                <label class="placeholder" for="best-email">
                  Your best email
                </label>
              </fieldset>
              <fieldset class="cfm-form-item">
                <textarea name="concerns-you" rows="3" required></textarea>
                <label class="placeholder" for="concerns-you">
                  What concerns you?
                </label>
              </fieldset>
              <ButtonDefault text="Send" submit />
            </form>
            <div class="or-content">
              <p>- or -</p>
            </div>
            <div class="input-contact">
              <input placeholder="Your email" />
              <button>Sign up</button>
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
  name: "ContactForm",
  components: { ButtonDefault },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.contact-form {
  display: block;
  width: 100%;
  background: #fff;
  position: relative;
  padding: 65px 0 126px 0;
  .contact-form-content {
    h2 {
      font-size: 50px;
      line-height: 1.2;
      margin-bottom: 30px;
      @media (min-width: 1200px) {
        font-size: 60px;
        line-height: 72px;
      }
    }
    h3 {
      font-size: 22px;
      line-height: 1.2;
      font-family: "Roboto", sans-serif;
      margin-bottom: 50px;
      @media (min-width: 1200px) {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 70px;
      }
    }
    .cfm-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      .cfm-form-item {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        input,
        textarea {
          font-size: 24px;
          line-height: 28px;
          color: #94a4a8;
          padding: 14px 15px;
          border-radius: 30px;
          border: 1px solid #758f95;
          outline: none;
          width: 100%;
          @media (min-width: 450px) {
            width: 400px;
          }
          @media (min-width: 768px) {
            width: 520px;
          }
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
          transform: scale(0.8) translateY(-35px) translateX(20px);
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
    }
  }
  .or-content {
    p {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 40px;
      color: #45595d;
    }
  }
  .input-contact {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      background: #bac7ca;
      border-radius: 50px;
      border: none;
      width: 100%;
      max-width: 520px;
      font-family: "Fredoka One", cursive;
      padding: 30px 170px 30px 35px;
      outline: none;
      font-size: 32px;
      line-height: 40px;
      color: #88989c;
      @media (min-width: 450px) {
        width: 400px;
      }
      @media (min-width: 768px) {
        width: 520px;
      }
    }

    button {
      transition: all 0.43s;
      background: $primary-red;
      border: none;
      width: 150px;
      border-radius: 50px;
      font-family: "Fredoka One", cursive;
      color: #fff;
      margin-left: -163px;
      padding: 22px 0;
      font-size: 30px;
      line-height: 35px;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &:hover {
        box-shadow: 0 0 7px #00000077;
        text-shadow: 0 0 7px #00000077;
      }

      &:active {
        box-shadow: none;
        text-shadow: none;
        background: darken($primary-blue, 16%);
      }
    }
  }
}
</style>
<style lang="scss">
.contact-form {
  .button-div button {
    padding: 12px 52px;
  }
}
</style>
