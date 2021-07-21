<template>
  <div class="admin-my-profile">
    <h1 class="admin">My Profile</h1>

    <div class="my-profile-panel">
      <div class="row">
        <div class="col-auto">
          <div class="profile-pic">
            <font-awesome-icon class="user-icon" icon="user" />
          </div>
          <div class="profile-content">
            <h2>Thiago Cruz</h2>
            <div class="username">@thgcruz16</div>
            <div class="bio">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus maximus condimentum urna sed molestie. Cras varius dignissim ullamcorper.
              Morbi rhoncus suscipit leo, et imperdiet metus placerat nec."
            </div>

            <div class="gray-divider"></div>

            <div class="social-link email">
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <span>thgsantos16@gmail.com</span>
            </div>

            <div class="social-link instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <span>@thg.cruz</span>
            </div>

            <div class="social-link facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
              <span>@thgsantos16</span>
            </div>

            <div class="social-link twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span>@thgcruz16</span>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminMyProfile",
  components: {
  },
  data() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>

@import "../../scss/colors";

.admin-my-profile {
  .my-profile-panel {
    background: #FFF;
    margin-top: 115px;
    border-radius: 34px;
    color: $primary-gray;

    .col-auto {
      padding: 25px 70px;

      .profile-pic {
        width: 250px;
        height: 250px;
        border-radius: 100%;
        background-color: $light-gray;
        margin-top: -100px;

        .user-icon {
          color: #FFF;
          display: block;
          margin: auto;
          position: relative;
          font-size: 180px;
          padding-top: 60px;
        }
      }

      .profile-content {
        width: 250px;

        h2 {
          font-size: 2rem;
          text-align: left;
        }

        .username {
          margin: -12px 0 25px;
        }

        .bio {
          margin: 16px 0;
          font-size: 90%;
        }

        .social-link {
          font-size: 120%;
          padding: 4px 0;

          span {
            display: inline-block;
            vertical-align: top;
            margin: -1px 0 0 7px;
          }
        }
      }
    }
  }
}

</style>
