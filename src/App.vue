<template>
	<div class="vue-app" id="vue-app">
		<router-view />
	</div>
</template>

<script>
    import router from "../router/router";

    export default {
        name: 'app',
        router,
    }
</script>
