<template >
    <div class="input-value">
      <div class="input-value__wrapper">
        <input v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task" type="text" placeholder="Введите задачу">
        <input v-model="newTask.desc" type="text" placeholder="Описание">
      </div>
      <input class="btn__submit btn__default btn__default--h51" type="submit" @click="addTask()">
    </div>
    <div class='task' v-for="item in tasks" :key="item.id">
        <input type="checkbox">
        <div class="task__wrapper">
            <h3 class="task__caption">{{item.task}}</h3>
            <p class="task__text">{{item.desc}}</p>
        </div>
        <button class="task__btn-delete" @click="deleteTask(item)">Удалить</button>
    </div>

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
