// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import WebFont from 'webfontloader';
import App from '@/app/App';
import router from '@/router';
import Ribbon from '@/components/common/ribbon/Ribbon';
import Parallax from '@/components/common/parallax/Parallax';
import pl from 'vee-validate/dist/locale/pl';
import VeeValidate, { Validator } from 'vee-validate';
import VueFire from 'vuefire';

const firebase = require('firebase');
require('firebase/firestore');

/* eslint-disable */

let app;

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


// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('pl', pl);
Vue.use(VeeValidate);
Vue.use(VueFire);

firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);
Vue.prototype.$db = db;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app', 
      router,
      components: { App },
      template: '<App/>',
      });
  }
});
