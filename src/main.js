// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import WebFont from 'webfontloader';
import firebase from 'firebase';
import veeValidate from 'vee-validate';
import App from '@/App';
import router from '@/router';
import Ribbon from '@/components/common/ribbon/Ribbon';
import Parallax from '@/components/common/parallax/Parallax';

const config = {
  apiKey: 'AIzaSyBJrtUiM7tCG-yxLwsCJQUQsQzcJNdSMuQ',
  authDomain: 'szafiarnia-d3f21.firebaseapp.com',
  databaseURL: 'https://szafiarnia-d3f21.firebaseio.com',
  projectId: 'szafiarnia-d3f21',
  storageBucket: 'szafiarnia-d3f21.appspot.com',
  messagingSenderId: '262622244699',
};

firebase.initializeApp(config);

WebFont.load({
  google: {
    families: ['Lobster', 'Raleway:300,400:latin-ext'],
  },
});

Vue.component('ribbon', Ribbon);
Vue.component('parallax', Parallax);
Vue.use(veeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
