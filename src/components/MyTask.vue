<template v-for="item in tasks">
    <div class='task'>
        <input type="checkbox">
        <div class="task__wrapper">
            <h3 class="task__caption">{{item}}</h3>
            <p class="task__text">{{}}  !!</p>
        </div>
        <button class="task__btn-delete">Удалить</button>
    </div>
</template>

<script>
    export default {
        name: 'MyTask',
        props: {
            tasks: Array,
            // newTask: Object
        },

        // methods: {
        //     deleteTask(task){
        //         this.tasks.splice(this.tasks.indexOf(task),1)
        //     }
        // }
    }
</script>
