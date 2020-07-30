<template>
    <h1 class="my-counter">
        <button class="btn__default" @click="ChangeCount(10)">+10</button>
        <button class="btn__default" @click="ChangeCount(1)">+1</button>
        <p>{{count}}</p>
        <button class="btn__default" v-on:click="ChangeCount(-1)">-1</button>
        <button class="btn__default" v-on:click="ChangeCount(-10)">-10</button>
    </h1>
</template>
<script>
    export default {
        name: 'Counter',
        props: {
            count: Number
        },
        methods:{
            ChangeCount(act){
                this.$emit('count', act);
            },
        }
    }
</script>
