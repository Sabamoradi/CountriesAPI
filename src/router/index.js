import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Home/index';
import DetailPage from '@/views/DetailPage/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage,
    },
  ],
});
