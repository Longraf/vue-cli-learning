<template>
	<div class="vue-app__input-value">
		<!--        <p>{{newTask.task}}</p>-->
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text"
				v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task">
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="newTask.desc">
			<input class="vue-app__input" placeholder="Задайте период выполнения" type="text" v-model="newTask.executionPeriod ">
		</div>
		<input @click="addTask()" class="btn btn__submit  btn__default--h51" type="submit">
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
					executionPeriod: ''
                }
            }
        },
        methods: {
            addTask() {
                if (this.newTask.task == '') {
                    return this.newTask.taskError = true;
                } else {
                    this.newTask.taskError = false;
                }
                this.$emit('newTask', {
                    isComplete: this.newTask.isComplete,
                    task: this.newTask.task,
                    desc: this.newTask.desc,
					executionPeriod: this.newTask.executionPeriod,
                });
                this.newTask.task = '';
                this.newTask.desc = '';
                this.newTask.executionPeriod = '';
            },
        }
    }

</script>