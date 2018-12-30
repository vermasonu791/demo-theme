<template>
  <div class="hello">
    <input type="text" v-model="newvalue" @keyup.enter="add($event)">
    <p>{{newvalue}}</p>
    <ul v-for="(task , index) in tasks" :key="index">
      <li>{{task.name}}</li>
      <button @click="remove(task)">Remove</button>
     
    </ul>
     <button @click="increment">click me</button>
 
  </div>
</template>

<script>
import mapState from 'vuex'
export default {
  name: "HelloWorld",
  data: function() {
    return {
      newvalue: "",
      tasks: [{ name: "learn angular" }]
    };
  },
  methods: {
    add(e) {
      console.log(e.target.value);
      this.tasks.push({ name: e.target.value });
    },

    remove(t) {
      this.tasks.splice(this.tasks.indexOf(t), 1);
    },
    increment() {
      console.log("hello");
      this.$emit("clicked");
    },
    
  },
    mounted() {
    return this.$store.dispatch("loadpost");
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
