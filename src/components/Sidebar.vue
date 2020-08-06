<template>

    <nav class="vue-app__sidebar">
        <router-link class="vue-app__sidebar-list" to="/">Home page</router-link>
        <router-link class="vue-app__sidebar-list" to="/todo-list">Todo-list</router-link>
        <router-link class="vue-app__sidebar-list" to="/todo-item">Todo-item</router-link>
        <router-link class="vue-app__sidebar-list" to="/counter">Counter page</router-link>
<!--        <router-link class="vue-app__sidebar-list" to="/new-task">Add new task</router-link>-->
<!--        <ul>-->

<!--            <li class="vue-app__sidebar-list">-->
<!--                -->
<!--            </li>-->
<!--            <li class="vue-app__sidebar-list">-->
<!--                -->
<!--            </li>-->
<!--            <li class="vue-app__sidebar-list">-->
<!--                -->
<!--            </li>-->
<!--            <li class="vue-app__sidebar-list">-->
<!--                -->
<!--            </li>-->
<!--        </ul>-->
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {

            }
        }
    }
</script>