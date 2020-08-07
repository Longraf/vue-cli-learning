import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../router/pages/index';
import todoList from '../router/pages/todo-list';
import Counter from "../router/pages/counter";
import ChangeTask from "../src/components/ChangeTaskComponent";


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
            path: '/todo-list',
            name: 'todo-list',
            component: todoList
        },
        {
            path: '/counter',
            name: 'counter',
            component: Counter
        },
        {
            path: '/change-task',
            name: 'change-task',
            component: ChangeTask,
        }

    ]
});

export default router