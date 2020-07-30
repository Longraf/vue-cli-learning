<template>
    <div class='task'>
        <input type="checkbox">
        <div class="task__wrapper">
            <h3 class="task__caption">{{ task.task }}</h3>
            <p class="task__text">{{ task.desc }}  !!</p>
        </div>
        <button class="task__btn-delete">Удалить</button>
    </div>
</template>

<script>
    export default {
        name: 'MyTask',
        props: {
            task: Object,
        },

        // methods: {
        //     deleteTask(task){
        //         this.tasks.splice(this.tasks.indexOf(task),1)
        //     }
        // }
    }
</script>
