<template>
    <div class="vue-app__input-value">
<!--        <p>{{newTask.task}}</p>-->
        <div class="vue-app__input-value-wrapper">
            <input class="vue-app__input" v-model="newTask.task" v-bind:class="newTask.taskError ? 'input__red' : '' " type="text" placeholder="Введите задачу">
            <input class="vue-app__input" v-model="newTask.desc" type="text" placeholder="Описание">
        </div>
        <input class="btn__submit btn__default btn__default--h51" type="submit" @click="addTask()">
    </div>
</template>

<script>
    export default {
        name: 'AddNewTask',
        props: {
            tasks: Array
        },
        data() {
            return {
                newTask: {
                    task: '',
                    desc: '',
                    taskError: false,
                    isComplete: false,
                }
            }
        },
        methods:{
            addTask(){
                if (this.newTask.task == ''){
                    return this.newTask.taskError = true;
                } else{
                    this.newTask.taskError = false;
                }
                this.$emit('newTask', {
                    isComplete: this.newTask.isComplete,
                    task: this.newTask.task,
                    desc: this.newTask.desc
                });
                this.newTask.task = '';
                this.newTask.desc = '';
            },
        }
    }

</script>