<template>
	<div class="vue-app__input-value">
		<!--        <p>{{newTask.task}}</p>-->
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text" v-model="task"
				v-bind:class="taskError ? 'input__red' : '' ">
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="desc">
			<input class="vue-app__input" placeholder="Задайте период выполнения" type="text" v-model="executionPeriod ">
		</div>
		<input @click="addTask()" class="btn btn__submit  btn__default--h51" type="submit" value="Изменить">
	</div>
</template>

<script>
    export default {
        name: 'ChangeTask',
        data() {
            return {
                task: '',
				desc: '',
				taskError: false,
				isComplete: false,
				executionPeriod: '',
            }
        },
        methods: {
            addTask() {
                if (this.task == '') {
                    return this.taskError = true;
                } else {
                    this.taskError = false;
                }
                this.$emit('newTask', {
                    isComplete: this.isComplete,
                    task: this.task,
                    desc: this.desc,
					executionPeriod: this.executionPeriod,
                });
                console.log('addNew = ' + this.task)
                this.task = '';
                this.desc = '';
                this.executionPeriod = '';
            },
        }
    }

</script>