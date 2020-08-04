<template>
    <div class="modal-window">
        <div class="modal-window__close-wrapper">
            <div class="modal-window__close" @click="$emit('ClosePopup')"></div>
        </div>
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text" v-model="this.ntask">
<!--                   v-bind:class="ntask.taskError ? 'input__red' : '' ">-->
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="this.newTask.desc">
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
                ntask : this.newTask.task
			}
		},
        methods: {
			changeTask() {
				if (this.task == '') {
					return this.newTask.taskError = true;
				} else {
                    console.log(this.Task);
					this.newTask.taskError = false;
				}

				this.$emit('changeTask', {
					// oldTask: this.newTask,
					isComplete: this.newTask.isComplete,
					task: this.value,
					desc: this.newTask.desc,
					executionPeriod: false,
				});
				// this.newTask.task = '';
				// this.newTask.desc = '';
			}
        }
    }
</script>