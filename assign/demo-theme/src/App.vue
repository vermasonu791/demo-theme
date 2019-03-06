<template>
  <v-app class="grey lighten-4">
    <navabar/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navabar from "@/components/navbar"

export default {
  name: 'App',
  components:{
      navabar
  }
}
</script>
