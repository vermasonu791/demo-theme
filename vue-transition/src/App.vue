<template>
  <div id="app" style="text-align:center;">
    <input v-model="query">
    <ul>
      <li v-for="(item, index) in list " :key="index" transition="staggered" stagger="100">{{item.msg | capitalize}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      show: true,
      query: "",
      list: [
        { msg: "Bruce Lee" },
        { msg: "Jackie Chan" },
        { msg: "Chuck Norris" },
        { msg: "Jet Li" },
        { msg: "Kung Fury" }
      ]
    };
  }
};
</script>

<style>
ul {
    padding-left: 0;
    font-family: Helvetica, Arial, sans-serif;
}
.staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 20px;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
}
</style>
