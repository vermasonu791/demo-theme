<template>
  <div class="hello">
    <ul v-for="(list, index) in list" :key="index">
      <li>{{pseudoslot(list) }}</li>
     <li> <slot :row="list"></slot></li>
    </ul>
    <div :class="[ isDark ? 'background-dark' : 'background-light' ]">
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["pseudoslot"],
  data: function() {
    return {
      list: [
        { name: "sonu" },
        { name: "sam" },
        { name: "rahman" },
        { name: "joe" }
      ],
      isDark:false,
      data:"Some Text"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.background-dark {
  background-color: #000;
}
.background-light {
  background-color: #fff;
  color:red;
}
</style>
