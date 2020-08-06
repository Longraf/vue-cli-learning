<template>
    <div class="modal-window">
        <div class="modal-window__close-wrapper">
            <div class="modal-window__close" @click="$emit('ClosePopup')"></div>
        </div>
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text" v-model='task' />
<!--                   v-bind:class="ntask.taskError ? 'input__red' : '' ">-->
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="desc">
			<input class="vue-app__input" placeholder="Задайте период выполнения" type="text" v-model="executionPeriod ">

		</div>
		<input @click="changeTask" type="submit" value="Добавить запись">
		<input @click="()=>this.$emit('ClosePopup', true)" type="submit" value="Отменить добавление">
<!--		<input @click="deleteTask" type="button" value="Удалить запись">-->
    </div>
</template>

<script>
    export default {
        name: 'ModalWindow',
        data() {
            return{
                task: '',
                desc: '',
                executionPeriod: '',
                isComplete: this.isComplete
            }
        },
        methods: {
			changeTask() {
                console.log(this.task)
				if (this.task == '') {
					return this.taskError = true;
				} else {
					this.taskError = false;
				}
				// this = this.ntask;
                let newTask = {
                    // oldTask: this,
                    isComplete: false,
                    task: this.task,
                    desc: this.desc,
                    executionPeriod: this.executionPeriod,
                };
				console.log(newTask);
				this.$emit('addTask', newTask);
				// this.task = '';
				// this.desc = '';
			},
            deleteTask(task) {
                this.$emit('delTask', task)
            },
        }
    }
</script>