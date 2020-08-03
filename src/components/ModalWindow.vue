<template>
    <div class="modal-window">
        <div class="modal-window__close-wrapper">
            <div class="modal-window__close" @click="$emit('ClosePopup')"></div>
        </div>
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text"
                  v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task">
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="newTask.desc">
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
			}
		},
		data() {
			return {

			}
		},
        methods: {
			changeTask() {
				if (this.newTask.task == '') {
					return this.newTask.taskError = true;
				} else {
					this.newTask.taskError = false;
				}
				this.$emit('changeTask', {
					oldTask: this.newTask,
					isComplete: this.newTask.isComplete,
					task: this.newTask.task,
					desc: this.newTask.desc,
					executionPeriod: false,
				});
				// this.newTask.task = '';
				// this.newTask.desc = '';
			}
        }
    }
</script>