<template>
    <div class="modal-window">
        <div class="modal-window__close-wrapper">
            <div class="modal-window__close" @click="$emit('ClosePopup')"></div>
        </div>
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text" v-model='task' />
<!--                   v-bind:class="ntask.taskError ? 'input__red' : '' ">-->
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="desc">
		</div>
		<input @click="changeTask" type="submit" value="Сохранить изменения">
    </div>
</template>

<script>
    export default {
        name: 'ModalWindow',
        props: {
            newTask: {
                task: String,
                desc: String,
                taskError: Boolean,
                isComplete: Boolean,
                id: Number,
                executionPeriod: [String, Number, Boolean]
            }
        },
        data() {
            return{
                task: this.newTask.task,
                desc: this.newTask.desc,
                executionPeriod: this.newTask.executionPeriod,
                isComplete: this.newTask.isComplete
            }
        },
        methods: {
			changeTask() {
                console.log(this.task)
				if (this.task == '') {
					return this.newTask.taskError = true;
				} else {
					this.newTask.taskError = false;
				}
				// this.newTask = this.ntask;
                let newTask = {
                    // oldTask: this.newTask,
                    id: this.newTask.id,
                    isComplete: this.isComplete,
                    task: this.task,
                    desc: this.desc,
                    executionPeriod: this.executionPeriod,
                };
				console.log(newTask);
				this.$emit('changeTask', newTask);
				// this.newTask.task = '';
				// this.newTask.desc = '';
			}
        }
    }
</script>