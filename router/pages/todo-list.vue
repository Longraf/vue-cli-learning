<template>
	<div class="vue-app__container">
		<h2>{{$store.getters.getCaption}} {{$store.getters.getTasks.length}}</h2>
<!--		<AddNewTask v-on:newTask="CreateNewTask"/>-->
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks" v-on:changeTask="ChangeTask"
				v-on:delTask="DeleteTask"/>

		<button @click="isShowModal = true " type="button">Добавить новую задачу</button>
		<ModalWindow @click="isShowModal = !isShowModal" v-if="isShowModal"
		v-on:ClosePopup="isShowModal = false" v-on:addTask="AddTask" v-on:delTask="DeleteTask"/>
	</div>
</template>

<script>

	import MyTask from "../../src/components/MyTask";
	// import AddNewTask from "../../src/components/AddNewTask";
	import ModalWindow from "../../src/components/ModalWindow";

    export default {
        name: "todo-list",
		components: {
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
				this.tasks = this.$store.getters.getTasks;
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
			ChangeCount(value) {
				this.count += value;
			},
			DeleteTask(task) {
				let findDataTask = this.tasks.filter(item => item.id === task.id)[0];
				findDataTask.task = task.task;
				findDataTask.desc = task.desc;
				findDataTask.executionPeriod = task.executionPeriod;
				this.tasks.splice(this.tasks.indexOf(findDataTask), 1);
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			},
			ChangeTask() {
			},
			AddTask(newTask) {
				if (this.tasks.length == 0 ) {
					newTask.id = 0
				} else {
					newTask.id = this.tasks[this.tasks.length-1].id + 1
				}
				this.isShowModal = false;
				this.tasks.push(newTask)
			},
			ClosePopup() {
				this.isShowModal = false
			}
		}
    }
</script>

<style scoped>

</style>