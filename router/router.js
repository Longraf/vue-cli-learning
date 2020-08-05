import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../router/pages/index';
import todoList from '../router/pages/todo-list';
import todoItem from '../router/pages/todo-item';


Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/todo-list',
            name: 'todo-list',
            component: todoList
        },
        {
            path: '/todo-item',
            name: 'todo-item',
            component: todoItem
        },
    ]
});

export default router