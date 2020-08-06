<template>
	<div class="vue-app" id="vue-app">

		<Sidebar/>
		<router-view />
	</div>
</template>

<script>
    import router from "../router/router";
    import Sidebar from "./components/Sidebar";

    export default {
        name: 'app',
        router,

		components: {
            Sidebar
		},
    }
</script>
