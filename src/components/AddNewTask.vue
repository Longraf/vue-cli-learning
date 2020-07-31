<template>
    <div class="input-value">
<!--        <p>{{newTask.task}}</p>-->
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
            newTask: Object,
            tasks: Array
        },
        methods:{
            addTask(){


                if (this.newTask.task == ''){
                    return this.newTask.taskError = true;
                } else{
                    this.newTask.taskError = false;
                }
                // console.log(this.tasks);
                this.$emit('newTask', {
                    task: this.newTask.task,
                    desc: this.newTask.desc
                });
                // console.log(`${this.newTask} it is thisNewTask`)
                // let tasks = this.tasks;
                // tasks.push(this.newTask);
                //
                // this.tasks = tasks;
                // localStorage.setItem('tasks', JSON.stringify(tasks));
                // this.tasks.push({
                //     task: this.newTask.task,
                //     desc: this.newTask.desc
                // });

                // this.tasks.push({
                //     task: this.newTask.task,
                //     desc: this.newTask.desc
                // });

                this.newTask.task = '';
                this.newTask.desc = '';
                // localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
        }
    }

</script>