<template>
	<div class="vue-app__container">
		<Caption :caption="$store.getters.getCaption" :tasksCount="tasks ? tasks.length : 0"/>
<!--		<AddNewTask v-on:newTask="CreateNewTask"/>-->
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks" v-on:changeTask="ChangeTask"
				v-on:delTask="DeleteTask"/>

		<button @click="isShowModal = true " type="button">Добавить новую задачу</button>
		<ModalWindow @click="isShowModal = !isShowModal" v-if="isShowModal"
		v-on:ClosePopup="isShowModal = false" v-on:addTask="AddTask" v-on:delTask="DeleteTask"/>
	</div>
</template>

<script>

	import Caption from "../../src/components/Caption";
	import MyTask from "../../src/components/MyTask";
	// import AddNewTask from "../../src/components/AddNewTask";
	import ModalWindow from "../../src/components/ModalWindow";

    export default {
        name: "todo-list",
		components: {
			// AddNewTask,
			Caption,
			MyTask,
			ModalWindow
		},
		data() {
			return {
				isShow: true,
				showText: 'ss123',
				tasks: [],
				isShowModal: false,
				newTask: {},
			}
		},
		created() {
			if (this.$store.getters.getTasks) {
				this.tasks = this.$store.getters.getTasks;
			} else {
				localStorage.setItem('tasks', JSON.stringify([]));
				this.tasks = {};
				this.tasks = this.$store.getters.getTasks;
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
				// this.$router
				console.log(newTask)
			},
			AddTask(newTask) {
				console.log(newTask)
				this.isShowModal = false;
				this.tasks.push(newTask)
				// let findDataTask = this.tasks.filter(item => item.id === newTask.id)[0];

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