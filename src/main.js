import Vue from 'vue'
import App from './App.vue'

import VueAnime from './vue-anime';

Vue.use(VueAnime);
console.log(Vue.$animeJS);

require('./assets/sass/main.scss');
new Vue({
  el: '#app',
  render: h => h(App)
})

