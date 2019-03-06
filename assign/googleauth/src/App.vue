<template>
  <v-app>
    <v-content>
       <navbar/>
       <v-container grid-list-xs>
          <router-view></router-view>
       </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
