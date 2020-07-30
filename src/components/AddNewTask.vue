<template>
    <div class="input-value">
<!--        <p>{{newTask.task}}</p>-->
        <div class="input-value__wrapper">
            <input v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task" type="text" placeholder="Введите задачу">
            <input v-bind="newTask.desc" type="text" placeholder="Описание">
        </div>
        <input class="btn__submit btn__default btn__default--h51" type="submit" @click="addTask()">
    </div>
</template>

<script>
    export default {
        name: 'AddNewTask',
        props: {
            tasks: Array,
        },
        data(){
          return {
              newTask: {
                  task: '',
                  desc: '',
                  taskError: false,
                  isComplete: false,
              },
          }
        },
        methods:{
            addTask(){


                if (this.newTask.task == ''){
                    return this.newTask.taskError = true;
                } else{
                    this.newTask.taskError = false;
                }
                let tasks = this.tasks;
                console.log(tasks);
                this.newTask = {
                    task: this.newTask.task,
                    desc: this.newTask.desc,
                };
                tasks.push(this.newTask);
                this.tasks = tasks;

                this.newTask.task = '';
                this.newTask.desc = '';
            },
        }
    }

</script>