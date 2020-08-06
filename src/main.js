import Vue from 'vue'
import App from './App.vue'
import './modules/scss/style.scss'
import store from '../store/store'

Vue.config.productionTip = false;

new Vue({
  render: hhh => hhh(App),
  store,
  el: '#app'
});
