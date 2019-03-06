<template>
  <div class="login">
    <div id="google-signin-btn" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data: function() {
    return {};
  },
  methods: {
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      this.$store.dispatch("signedIn", profile);
    }
  },
  mounted() {
    gapi.signin2.render("google-signin-btn", {
      // this is the button "id"
      onsuccess: this.onSignIn // note, no "()" here
    });
  }
};
</script>
