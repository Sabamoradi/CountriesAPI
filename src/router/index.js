import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main,
    },
  ],
});
