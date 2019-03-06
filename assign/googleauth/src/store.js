import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignedIn: false,
    user: null
  },
  mutations: {
    signedCheck(state, payload) {
      state.isSignedIn = true;
      state.user = {
        name: payload.getName(),
        image: payload.getImageUrl(),
        email: payload.getEmail()
      };
      console.log(state.user);
      console.log(state.user.name);
    }
  },
  getters: {
    getUserData(state) {
      return state.user;
    }
  },
  actions: {
    signedIn({ commit }, payload) {
      commit("signedCheck", payload);
      router.push({
        name: "home"
      });
    }
  }
});
