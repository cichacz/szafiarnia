import Vue from 'vue';
import Router from 'vue-router';
import IndexComponent from '@/components/index/Index';
import DashboardComponent from '@/components/dashboard/Dashboard';
import LoginComponent from '@/components/login/Login';
import RegisterComponent from '@/components/register/Register';
import ItemComponent from '@/components/item/Item';
import ContainerComponent from '@/components/container/Container';
import PackingComponent from '@/components/packing/Packing';

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
          path: 'container/:id',
          component: ContainerComponent,
          props: true,
        },
        {
          name: 'item-add',
          path: 'new-item',
          component: ItemComponent,
          props: true,
        },
        {
          name: 'item-pack',
          path: 'pack',
          component: PackingComponent,
          props: true,
        },
        {
          name: 'item',
          path: 'container/:container/item/:id',
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
  router.app.$dao.getUser().then((currentUser) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next({ name: 'login' });
    else if (currentUser && (to.path === '/login' || to.path === '/register')) next({ name: 'panel' });
    else next();
  }).catch(() => {
    next('/');
  });
});

export default router;
