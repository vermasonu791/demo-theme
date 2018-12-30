import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
    isSignedin:false,
    frnd_name:"Rahman",
    frnd_2_name:"Rajnish",
    count:0,
    post:[]
  },
  mutations: {
    increment(state,paylod){
      state.count+=paylod;
    },
    set_post(state,data){
      
      state.post=data;
      console.log(state.post);
    },
    redirectafter(state){
      state.isSignedin=true;
      router.push({
        name: 'home', 
    });
    }
  },
  actions: {
    loadpost({commit}){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
        console.log(response.data);
        let data=response.data;
        commit('set_post',data);
      })
      .catch(error =>{
        console.log(error);
      });
      
    },
  
     
  },
  getters:{
    message(state){
return state.frnd_2_name="Rahman";
    }
  }
})
