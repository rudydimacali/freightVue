import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const serverBus = new Vue();
export default serverBus;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App),
});
