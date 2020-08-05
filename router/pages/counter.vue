<template>
    <div class="vue-app__container">
        <h3>Counter page</h3>
        <Counter v-bind:count="count" v-on:count="ChangeCount"/>
    </div>
</template>

<script>
    import Counter from "../../src/components/Counter";

    export default {
        name: 'counter',
        data() {
            return {
                count: 20
            }
        },
        methods: {
            ChangeCount(value) {
                this.count += value;
            },
        },
        components: {
            Counter
        }
    }

</script>

<style scoped>

</style>