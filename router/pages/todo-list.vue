<template>
	<div class="vue-app__container">
		<h2>{{getCaption}} {{getTasks.length}}</h2>
<!--		<AddNewTask v-on:newTask="CreateNewTask"/>-->
		<MyTask :key="task.id" :task="task" v-for="task in this.getTasks"/>

		<button @click="changeIsShowModal" type="button">Добавить новую задачу</button>
		<ModalWindow v-if="getIsShowModal"/>
	</div>
</template>

<script>

	import MyTask from "../../src/components/MyTask";
	// import AddNewTask from "../../src/components/AddNewTask";
	import ModalWindow from "../../src/components/ModalWindow";
	import {mapGetters, mapMutations} from 'vuex';


    export default {
        name: "todo-list",
		components: {
			MyTask,
			ModalWindow
		},
		computed: {
			...mapGetters([
				'getTasks',
				'getTasksLength',
				'getCaption',
				'getIsShowModal'
			])
		},
		created() {
			if (localStorage.getItem('tasks')) {
				this.tasks = this.getTasks;
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
			...mapMutations([
				'changeIsShowModal',

			]),
			ChangeCount(value) {
				this.count += value;
			},
			// DeleteTask(task) {
			//
			// 	let findDataTask = this.tasks.filter(item => item.id === task.id)[0];
			// 	findDataTask.task = task.task;
			// 	findDataTask.desc = task.desc;
			// 	findDataTask.executionPeriod = task.executionPeriod;
			// 	this.tasks.splice(this.tasks.indexOf(findDataTask), 1);
			// 	localStorage.setItem('tasks', JSON.stringify(this.tasks))
			// },
			// AddTask(newTask) {
			// 	if (this.getTasksLength == 0 ) {
			// 		newTask.id = 0
			// 	} else {
			// 		newTask.id = this.tasks[this.tasks.length-1].id + 1
			// 	}
			// 	this.isShowModal = false;
			// 	this.tasks.push(newTask)
			// },
		}
    }
</script>

<style scoped>

</style>