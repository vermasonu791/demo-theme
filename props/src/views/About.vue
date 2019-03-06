<template>
  <hello>
    <template v-slot:sonu>
      <h1>This is about sonu</h1>
    </template>
  </hello>
</template>

<script>
import Hello from "../components/HelloWorld";
export default {
  components: {
    hello: Hello
  },
  data(){
    return {
      name:[
        'sonu',
        'akash',
        'sam'
      ]
    }
  },
  created(){
    console.log("created");
  },
  mounted(){
    console.log("mounted");
  }
};
</script>

<style>
</style>
