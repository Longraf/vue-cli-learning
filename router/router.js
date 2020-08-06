import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../router/pages/index';
import todoList from '../router/pages/todo-list';
import todoItem from '../router/pages/todo-item';
import Counter from "../router/pages/counter";
import AddNewTask from "../src/components/AddNewTask";


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
            path: '/todo-item',
            name: 'todo-item',
            component: todoItem
        },
        {
            path: '/counter',
            name: 'counter',
            component: Counter
        },
        {
            path: '/new-task',
            name: 'new-task',
            component: AddNewTask,
        }

    ]
});

export default router