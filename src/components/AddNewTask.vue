<template>
    <div class="input-value">
        <div class="input-value__wrapper">
            <input v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task" type="text" placeholder="Введите задачу">
            <input v-model="newTask.desc" type="text" placeholder="Описание">
        </div>
        <input class="btn__submit btn__default btn__default--h51" type="submit" @click="addTask()">
    </div>
</template>

<script>
    export default {
        name: 'AddNewTask',
        props: {
            newTask: Object
        },
        methods:{
            addTask(){
                if (this.newTask.task == ''){
                    return this.newTask.taskError = true;
                } else{
                    this.newTask.taskError = false;
                }
                this.$emit('t')
                this.$emit.tasks.push({
                    task: this.newTask.task,
                    desc: this.newTask.desc
                });
                this.newTask.task = '';
                this.newTask.desc = '';
                // localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
        }
    }

</script>