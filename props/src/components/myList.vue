<template>
  <div>
    <ul v-for="list in list" :key="list.id">
      <li>{{list}}</li>
      <!-- <div>{{msg({list:list})}}</div> -->
      <div>
          <slot :list=list></slot>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mylist",
  props: ["msg"],
  data() {
    return {
      list: ["1", "two", "three"]
    };
  }
};
</script>

<style>
</style>
