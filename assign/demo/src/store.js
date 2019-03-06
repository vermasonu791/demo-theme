import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "hello",
    count: 0
  },
  mutations: {
    fun(state, payload) {
      state.count += payload;
      console.log(state.count);
    },
    data_received(state, payload) {
      state.count += payload;
      console.log(state.count);
    }
  },
  getters: {
    getdata(state) {
      return state.count;
    }
  },

  actions: {
    func({ commit }, payload) {
      console.log(payload);
      commit("data_received", payload);
    }
  }
});
