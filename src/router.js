import Vue from 'vue';
import Router from 'vue-router';
import * as Cookie from 'js-cookie';
import IndexComponent from '@/components/index/Index';
import DashboardComponent from '@/components/dashboard/Dashboard';
import LoginComponent from '@/components/login/Login';
import ContainerComponent from './components/container/Container';

Vue.use(Router);

const isAuthorized = () => Cookie.get('auth') === '1';

const router = new Router({
  routes: [
    {
      path: '/',
      component: IndexComponent,
    },
    {
      name: 'panel',
      path: '/panel',
      component: DashboardComponent,
      beforeEnter: (to, from, next) => {
        if (!isAuthorized()) {
          next(new Error('NOT_LOGGED'));
          return;
        }
        next();
      },
      children: [
        {
          name: 'container',
          path: 'container/:type',
          component: ContainerComponent,
          props: true,
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: LoginComponent,
      beforeEnter: (to, from, next) => {
        if (isAuthorized()) {
          next({ name: 'panel' });
          return;
        }
        next();
      },
    },
  ],
});

router.onError((e) => {
  switch (e.message) {
    case 'NOT_LOGGED':
      router.push({ name: 'login' });
      break;
    default:
  }
});

export default router;
