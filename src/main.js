import Vue from 'vue';
import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
import store from './store';

// {
//   primary: "#01579B",
//   secondary: "#29B6F6",
//   accent: "#8BC34A",
//   error: "#f44336",
//   warning: "#ffeb3b",
//   info: "#2196f3",
//   success: "#4caf50"
// }
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
