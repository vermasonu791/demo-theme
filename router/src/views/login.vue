<template>
<div>
<div id="google-signin-button"></div>
</div>  


 


</template>

<script>
export default {
  name: "login",
  methods: {
    
    onSignIn(googleUser) {

    this.$store.commit("redirectafter");
    const profile = googleUser.getBasicProfile();
     googleUser.disconnect()
    console.log(profile.getId());
// This is null if the 'email' scope is not present.
    }
  
  },

  mounted() {
   gapi.signin2.render("google-signin-button", {
        onsuccess: this.onSignIn
        });
  }
 
};
</script>
