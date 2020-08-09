import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../router/pages/index';
import TasksList from './pages/tasks/list';
import Counter from "../router/pages/counter";
import TaskNew from "./pages/tasks/task-new";


Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      props: {}
    },
    {
      path: '/tasks/list',
      name: 'list',
      component: TasksList
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/change-task/:id',
      name: 'change-task',
      component: TaskNew,
    }

  ]
});

export default router