import Vue from 'vue'
import VueRouter from 'vue-router'

import ShowAndHidden from '../src/components/ShowAndHidden'
import Counter from "../src/components/Counter";
import ChangeName from "../src/components/ChangeName";
import AddNewTask from "../src/components/AddNewTask";
import MyTask from "../src/components/MyTask";
import Caption from "../src/components/Caption";


Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/show',
            name: 'ShowAndHidden',
            component: ShowAndHidden
        },
        {
            path: '/Counter',
            name: 'Counter',
            component: Counter
        },
        {
            path: '/change-name',
            name: 'ChangeName',
            component: ChangeName
        },{
            path: '/',
            name: 'AddNewTask',
            component: AddNewTask
        },{
            path: '/',
            name: 'MyTask',
            component: MyTask
        },{
            path: '/',
            name: 'Caption',
            component: Caption
        },
    ]
});

export default router