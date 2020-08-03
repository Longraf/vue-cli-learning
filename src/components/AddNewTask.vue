<template>
	<div class="vue-app__input-value">
		<!--        <p>{{newTask.task}}</p>-->
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text"
				v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task">
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="newTask.desc">
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
					executionPeriod: false,
                });
                this.newTask.task = '';
                this.newTask.desc = '';
            },
        }
    }

</script>