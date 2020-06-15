<template>
  <b-container class="app-container">
    <div class="nav">
      <div
        v-if="!profile"
        id="google-signin-btn"
      />
    </div>
    <div class="profile">
      <div
        v-if="profile"
        class="profile-avatar"
        :style="{ backgroundImage: avatar }"
      />
      <div
        v-if="profile"
        class="profile-description"
      >
        {{ description }}
      </div>
      <button
        v-if="profile"
        id="sign-out"
        class="sign-out"
        @click="signOut"
      >
        Sign out
      </button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'GoogleOauth',
  components: {},
  data() {
    return {
      profile: false,
      avatar: null,
      description: null,
    };
  },
  mounted() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
  },
  methods: {
    onSignIn(user) {
      const profile = user.getBasicProfile();
      this.profile = profile;
      this.avatar = `url('${profile.hL}')`;
      this.description = `Signed as ${this.profile.Bd}`;
    },
    signOut() {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        this.profile = null;
        window.location.reload(true);
      });
    },
    renderGoogleLoginButton() {
      window.gapi.signin2.render('google-signin-btn', {
        onsuccess: this.onSignIn,
      });
    },
  },
};
</script>

<style>
.profile{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 1px solid red;
    background-size: 100%;
}
.profile-description {
    height: 80px;
    width: 500px;
    line-height: 80px;
    color: rgba(255, 255, 255, 0.733);
    font-size: 30px;
}
.sign-out {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: rgb(78, 0, 0);
    box-shadow: 0 0 20px 0 black;
    color: rgba(255, 255, 255, 0.692);
    border: 1px solid rgba(255, 255, 255, 0.137) ;
}
#google-signin-btn  .abcRioButtonLightBlue {
    background-color: black;
    border: 1px solid rgba(255, 255, 255, 0.637);
    border-radius: 10px;
    margin-bottom: 50px;
}

@media (max-width: 768px) {
    .profile{
        width: 768px;
        display: flex;
        justify-content: space-between;
    }
    .profile-description {
        font-size: 40px;
    }

    .abcRioButtonContents {
        font-size: 20px !important;
    }
}

</style>
