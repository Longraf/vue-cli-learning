<template>
    <div class='task'>
        <input type="checkbox" v-model="task.isComplete" @click="isCompleted(task)">
        <div class="task__wrapper">
            <h3 class="task__caption" :class="task.isComplete ? 'task__caption--complete' : ''">{{ task.task }}</h3>
            <p class="task__text" :class="task.isComplete ? 'task__text--complete' : ''">{{ task.desc }}</p>
        </div>
        <button @click="deleteTask(task)" class="task__btn-delete">Удалить</button>
    </div>
</template>

<script>
    export default {
        name: 'MyTask',
        props: {
            isComplete: Boolean,
            task: Object,
            tasks: Array,
        },
        methods: {
            deleteTask(task){
                console.log(task);
                this.$emit('delTask', task)
            },
            isCompleted(task){
                this.$emit('isComplete', task)
            }
        }
    }
</script>
