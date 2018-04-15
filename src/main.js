// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import WebFont from 'webfontloader';
import App from '@/App';
import router from '@/router';
import Ribbon from '@/components/ribbon/Ribbon';

WebFont.load({
  google: {
    families: ['Lobster', 'Raleway:300,400:latin-ext'],
  },
});

Vue.component('ribbon', Ribbon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
