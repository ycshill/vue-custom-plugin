// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './styles/common.css';
// import Toast from './components/toastSimple';
import Toast from './components/toastV1';
// import Toast from './components/ComponentPlugin';

Vue.config.productionTip = false;

window.Vue = Vue;
Vue.use(Toast);


/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
