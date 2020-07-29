<template >


</template>

<script>
    export default {
        name: 'Task',
        props: {
            tasks: Array
        },
        methods: {
            deleteTask(task){
                this.tasks.splice(this.tasks.indexOf(task),1)
            }
        }
    }
</script>
