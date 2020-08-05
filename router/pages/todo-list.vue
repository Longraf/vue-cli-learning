<template>
	<div class="vue-app__container">
		<Caption :caption="caption" :tasksCount="tasks ? tasks.length : 0"/>
		<AddNewTask v-on:newTask="CreateNewTask"/>
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks" v-on:changeTask="ChangeTask"
				v-on:delTask="DeleteTask"/>

		<button @click="isShowModal = true " type="button">Показать модальное окно</button>
		<ModalWindow :newTask="newTask" @click="isShowModal = !isShowModal" v-if="isShowModal"
		v-on:ClosePopup="isShowModal = false" v-on:changeTask="ChangeOldTask" v-on:delTask="DeleteTask"/>
	</div>
</template>

<script>

	import Caption from "../../src/components/Caption";
	import MyTask from "../../src/components/MyTask";
	import AddNewTask from "../../src/components/AddNewTask";
	import ModalWindow from "../../src/components/ModalWindow";

    export default {
        name: "todo-list",
		components: {
			AddNewTask,
			Caption,
			MyTask,
			ModalWindow
		},
		data() {
			return {
				count: 112,
				text: "Привет",
				isShow: true,
				caption: 'Список задач: ',
				showText: 'ss123',
				tasks: [],
				isShowModal: false,
				newTask: {},
			}
		},
		created() {
			if (localStorage.getItem('tasks')) {
				this.tasks = JSON.parse(localStorage.getItem('tasks'));
			} else {
				localStorage.setItem('tasks', JSON.stringify([]));
				this.tasks = {};
				this.tasks = JSON.parse(localStorage.getItem('tasks'));
			}
		},
		watch: {
			tasks: {
				handler() {
					localStorage.setItem('tasks', JSON.stringify(this.tasks));
				},
				deep: true,
			},
		},
		methods: {
			CreateNewTask(data) {
				if (this.tasks == null) {
					this.tasks = [];
				}
				if (this.tasks.length === 0) {
					data.id = 0
				} else {
					data.id = this.tasks[this.tasks.length - 1].id + 1;
				}
				this.tasks.push(data);
				console.log(this.tasks)
			},
			ChangeCount(value) {
				this.count += value;
			},
			DeleteTask(task) {
				let result = this.tasks.filter((item) => {
					return item.id === task.id
				});
				this.tasks.splice(this.tasks.indexOf(result), 1);
				this.isShowModal = false;
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			},
			ShowModal(boolean, newTask) {
				console.log(newTask);
				this.isShowModal = boolean;
				this.newTask = newTask;


			},
			ChangeTask(newTask) {
				this.ShowModal(true, newTask)
			},
			ChangeOldTask(newTask) {
				this.isShowModal = false;
				let findDataTask = this.tasks.filter(item => item.id === newTask.id)[0];

				findDataTask.task = newTask.task;
				findDataTask.desc = newTask.desc;
				findDataTask.executionPeriod = newTask.executionPeriod;

				console.log('It is newTask');
				console.log(newTask);
			},
			ClosePopup() {
				this.isShowModal = false
			}
		}
    }
</script>

<style scoped>

</style>