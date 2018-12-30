<template>
  <nav>
    <v-toolbar app>
      <v-icon @click="drawer=!drawer">menu</v-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey" dark>
            <v-icon left>expand_more</v-icon> 
            <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.icon" router :to="link.route">
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat color="grey">
        <span>Sign-out</span>
        <v-icon right>logout</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="purple white--text">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" color="red">
            <img src="1.jpg" alt="alt">
          </v-avatar>
          <p class="white--text subheading mt-4">The code Ninja</p>
        </v-flex>
        <v-flex >
            <popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="(link,index) in links" :key="index" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import popup from './popup.vue'
export default {
  components:{
      popup
  }, 
  name: "navbar",
  data: function() {
    return {
      drawer: true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/project" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>