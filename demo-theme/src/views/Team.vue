<template>
  <div class="Team">
    <P>Team</P>
    <v-container class="my-3">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person,index) in team" :key="index">
          <v-card flat class="text-xs-center ma-3 pa-2">
            <v-responsive class="pt-4">
              <v-avatar
                size="70"
                color="red"
              >
                <img :src="person.avtar" alt="alt">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <a v-bind:href="`${person.url}`">
                <v-btn small depressed color="black white--text" :class="`btn-center`">
                  <v-icon small left>message</v-icon>
                  <span class="text-capitalize">Message</span>
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Sonu",
          role: "Frontend Developer",
          url: "https://portfolio-sonu.firebaseapp.com/",
          avtar:'/1.jpg'
        },
        {
          name: "Rahman",
          role: "Laravel Developer",
          url: "https://www.google.com/",
          avtar:'/2.png'
        },
        {
          name: "Sam",
          role: "Full Stack Developer",
          url: "https://www.google.com/",
          avtar:'/1.jpg'
        },
        {
          name: "Rajnish",
          role: "Kuwait Developer",
          url: "https://www.google.com/",
          avtar:'/2.png'
        },
        { name: "Anas", 
          role: "Designer",
          url: "https://www.google.com/",
          avtar:'/1.jpg'
        },
        {
          name: "Malkeet",
          role: "Full stack Developer",
          url: "https://www.google.com/",
          avtar:'/2.png'
        }
      ]
    };
  }
};
</script>

<style>
a {
  margin: 0 auto !important;
  text-decoration: none;
}
.v-btn.btn-center {
  background-color: purple !important;
}
</style>
