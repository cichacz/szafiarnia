// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import WebFont from 'webfontloader';
import App from '@/App';
import router from '@/router';
import Ribbon from '@/components/common/ribbon/Ribbon';
import Parallax from '@/components/common/parallax/Parallax';

WebFont.load({
  google: {
    families: ['Lobster', 'Raleway:300,400:latin-ext'],
  },
});

Vue.component('ribbon', Ribbon);
Vue.component('parallax', Parallax);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
