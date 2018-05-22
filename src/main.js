// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import WebFont from 'webfontloader';
import App from '@/app/App';
import router from '@/router';
import Ribbon from '@/components/common/ribbon/Ribbon';
import Parallax from '@/components/common/parallax/Parallax';
import pl from 'vee-validate/dist/locale/pl';
import vuePl from '@/i18n/pl';
import store from '@/store';
import FirebaseDAO from '@/dao/FirebaseDAO';
import VeeValidate, { Validator } from 'vee-validate';
import VueI18n from 'vue-i18n';

/* eslint-disable */

const config = {
  apiKey: 'AIzaSyBJrtUiM7tCG-yxLwsCJQUQsQzcJNdSMuQ',
  authDomain: 'szafiarnia-d3f21.firebaseapp.com',
  databaseURL: 'https://szafiarnia-d3f21.firebaseio.com',
  projectId: 'szafiarnia-d3f21',
  storageBucket: 'szafiarnia-d3f21.appspot.com',
  messagingSenderId: '262622244699',
};


WebFont.load({
  google: {
    families: ['Lobster', 'Raleway:300,400:latin-ext'],
  },
});

Vue.component('ribbon', Ribbon);
Vue.component('parallax', Parallax);

Validator.localize('pl', pl);

Vue.use(VeeValidate);
Vue.use(VueI18n);
Vue.use(FirebaseDAO, config);

const messages = {
  'pl': vuePl
};

const i18n = new VueI18n({
  locale: 'pl', // set locale
  messages // set locale messages
});

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>',
});
