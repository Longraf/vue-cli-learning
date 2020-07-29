<template>
    <h1 class="my-counter">
        <button class="btn__default" @click="changeCount('+10')">+10</button>
        <button class="btn__default" @click="changeCount('+1')">+1</button>
        <p>{{count}}</p>
        <button class="btn__default" v-on:click="changeCount('-1')">-1</button>
        <button class="btn__default" v-on:click="changeCount('-10')">-10</button>
    </h1>
</template>
<script>
    export default {
        name: 'Counter',
        props: {
            count: Number
        },
        methods:{
            changeCount(act){
                if (act == '-1'){
                    return this.count--
                } else if (act == '+1') {
                    return this.count++
                } else if (act == '+10'){
                    return this.count = +this.count + 10
                } else if (act == '-10'){
                    return this.count -= 10
                }
                this.count < 0 ? this.count = 0 : ''
                if (this.count < 0){
                    this.count = 0
                }
            },
        }
    }
</script>
