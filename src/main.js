// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import util from './libs/util';
import moment from 'moment';

Vue.config.productionTip = false
Vue.use(ElementUI);
let localeLang ="zh-cn"

moment.locale(localeLang);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  methods:util,
  components: { App },
  template: '<App/>'
})
