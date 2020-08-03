<template>
	<h1>
		<p>{{caption}} {{tasksCount}}</p>
	</h1>
</template>

<script>
    export default {
        name: 'Caption',
        props: {
            caption: String,
            tasksCount: Number
        }
    }
</script>