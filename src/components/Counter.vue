<template>
	<div class="vue-app__my-counter">
		<button @click="ChangeCount(-10)" class="btn btn__default">-10</button>
		<button @click="ChangeCount(-1)" class="btn btn__default">-1</button>
		<p class="vue-app__paragraph">{{count}}</p>
		<button class="btn btn__default" v-on:click="ChangeCount(+1)">+1</button>
		<button class="btn btn__default" v-on:click="ChangeCount(+10)">+10</button>
	</div>
</template>
<script>
    export default {
        name: 'Counter',
        props: {
            count: Number
        },
        methods: {
			ChangeCount(act) {
				this.$emit('count', act);
			},
        }
    }
</script>
