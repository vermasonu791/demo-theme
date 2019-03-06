<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" v-on:clicked="handle">
    </HelloWorld>
    <Mylist >
      <template slot-scope="list">
        <div>
          {{list.list}}
        </div>
      </template>
    </Mylist>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Mylist from "@/components/myList"

export default {
  name: "home",
  components: {
    HelloWorld,
    Mylist
  },
  methods: {
    handle(a){
      console.log(a)
    }
  },
};
</script>
