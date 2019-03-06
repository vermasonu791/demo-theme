<template>
  <v-container>
    <v-subheader>User Data</v-subheader>
    <v-avatar :tile="tile" :size="100" color="grey lighten-4">
      <img :src="userData.image" alt="avatar">
    </v-avatar>
    <v-subheader>Name : {{userData.name}}</v-subheader>
    <v-subheader>Email: {{userData.email}}</v-subheader>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import router from "../router.js";
export default {
  computed: {
    ...mapGetters({
      userData: "getUserData"
    })
  },
  created() {
    if (this.$store.state.isSignedIn == false) {
      router.push({
        name: "login"
      });
    }
  }
};
</script>