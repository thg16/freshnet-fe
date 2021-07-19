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
      }
    }
  }
}

</style>
