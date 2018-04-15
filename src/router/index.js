import Vue from 'vue';
import Router from 'vue-router';
import IndexComponent from '../components/index/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexComponent,
    },
  ],
});
