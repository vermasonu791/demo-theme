<template>
  <div class="home">
    <button @click="signout">logout</button>
    
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @clicked="addcount"/>
    <p>{{total}}</p>
    <p>{{message}}</p>
    <p>{{message2}}</p>
    <p>{{count}}</p>
    <button @click="pressed">pressed</button>
    <p v-for="(item,index ) in post" :key="index">{{item.title}}</p>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
import router from "../router";
export default {
  name: "home",

  components: {
    HelloWorld
  },
  data: function() {
    return {
      total: 0
    };
  },
  methods: {
    addcount() {
      this.total += 1;
      if (state.isSignedin == false) {
      }
    },
    pressed() {
      return this.$store.commit("increment", 10);
    },
    checked() {
      console.log("sonu");
      // if (this.$store.state.isSignedin == false) {
      //   router.push({ name: "login" });
      // }
    },
    // signout() {
    //   var auth2 = gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(function() {
    //     router.push({ name: "login" });
    //     console.log("User signed out.");
    //   });
    // }
    // This is null if the 'email' scope is not present.
  },
  mounted() {
    this.checked();
  },
  computed: {
    ...mapState(["post"]),
    message() {
      console.log(this.$store.state.frnd_name);
      return this.$store.state.message;
    },
    message2() {
      console.log(this.$store.getters.message);
      return this.$store.getters.message;
    },
    count() {
      console.log(this.$store.state.count);
      return this.$store.state.count;
    }
  }
};
</script>
