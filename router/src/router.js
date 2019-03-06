import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import login from "./views/login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "login", component: login },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
