<template>
  <div class="vue-app__container">
    <h3>Counter page</h3>
    <Counter/>
  </div>
</template>

<script>
  import Counter from "../../src/components/Counter";

  export default {
    name: 'counter',
    methods: {},
    components: {
      Counter,
    }
  }

</script>

<style scoped>

</style>