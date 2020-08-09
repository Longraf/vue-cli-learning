<template>
	<div class="vue-app" id="vue-app">

		<Sidebar/>
		<transition name="task-view">
			<router-view/>
		</transition>
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
