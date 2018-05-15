import Vue from 'vue';
import Router from 'vue-router';
import IndexComponent from '@/components/index/Index';
import DashboardComponent from '@/components/dashboard/Dashboard';
import LoginComponent from '@/components/login/Login';
import RegisterComponent from '@/components/register/Register';
import * as firebase from 'firebase';
import ItemComponent from '@/components/item/Item';
import ContainerComponent from '@/components/container/Container';

Vue.use(Router);

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
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          name: 'container',
          path: 'container/:type',
          component: ContainerComponent,
          props: true,
        },
        {
          name: 'item',
          path: 'item/:id',
          component: ItemComponent,
          props: true,
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: LoginComponent,
    },
    {
      path: '/register',
      component: RegisterComponent,
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (currentUser && (to.path === '/login' || to.path === '/register')) next('dashboard');
  else next();
});

export default router;
