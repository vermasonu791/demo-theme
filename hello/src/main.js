import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
