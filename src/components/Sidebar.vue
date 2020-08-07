<template>

    <nav class="vue-app__sidebar">
        <router-link class="vue-app__sidebar-list" to="/">Home page</router-link>
        <router-link class="vue-app__sidebar-list" to="/todo-list">Todo-list</router-link>
        <router-link class="vue-app__sidebar-list" to="/counter">Counter page</router-link>
        <router-link class="vue-app__sidebar-list" to="/change-task">Change task</router-link>
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