<template>
  <v-app>
  <v-content>
      <toolbarr/>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import toolbarr from './components/toolbarr'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    toolbarr,
    Login
  },
  data() {
    return {
      //
    }
  }
}
</script>
