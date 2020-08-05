import Vue from 'vue'
import VueRouter from 'vue-router'

import ToDoItem from "../src/components/ToDoItem";


Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/todo',
            name: 'todo',
            component: ToDoItem
        }
    ]
});

export default router