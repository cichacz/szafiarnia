import Vue from 'vue';
import Router from 'vue-router';
import IndexComponent from '@/components/index/Index';
import DashboardComponent from '@/components/dashboard/Dashboard';
import LoginComponent from '@/components/login/Login';
import RegisterComponent from '@/components/register/Register';

Vue.use(Router);

const isAuthorized = false;

const router = new Router({
  routes: [
    {
      path: '/',
      component: IndexComponent,
    },
    {
      path: '/dashboard',
      component: DashboardComponent,
      beforeEnter: (to, from, next) => {
        if (!isAuthorized) {
          next(new Error('NOT_LOGGED'));
          return;
        }
        next();
      },
    },
    {
      path: '/login',
      component: LoginComponent,
      beforeEnter: (to, from, next) => {
        if (isAuthorized) {
          next({ path: 'dashboard' });
          return;
        }
        next();
      },
    },
    {
      path: '/register',
      component: RegisterComponent,
      beforeEnter: (to, from, next) => {
        if (isAuthorized) {
          next({ path: 'dashboard' });
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
      router.push({ path: 'login' });
      break;
    default:
  }
});

export default router;
