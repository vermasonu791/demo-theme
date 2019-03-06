<template>
  <div class="hello">
   <button @click="update">click me to get msg</button>
   <p>{{item}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data:() => {
    return {
     
    }
  },
  methods:{
    update(){
    // console.log(this.$store.state.msg);
    // this.$store.commit('fun' ,1);
    this.$store.dispatch('func',10)
    console.log(this.$store.getters.getdata);
    console.log("countvalue "+ this.$store.state.count);
    }
  },
  computed:{
   ...mapGetters({
     item:'getdata'
   })
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
