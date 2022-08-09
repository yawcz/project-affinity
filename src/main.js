import VueTextareaAutosize from 'vue-textarea-autosize';
import VueNumber from 'vue-number-animation';
import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import '@/assets/global.css';

Vue.use(VueTextareaAutosize);
Vue.use(VueNumber);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
