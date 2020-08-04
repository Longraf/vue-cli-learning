<template>
	<div class="vue-app" id="vue-app">
		<ChangeName v-bind:text="text"></ChangeName>
		<Counter v-bind:count="count" v-on:count="ChangeCount"/>

		<ShowAndHidden v-model="isShow"/>

		<Caption :caption="caption" :tasksCount="tasks ? tasks.length : 0"/>

		<AddNewTask v-on:newTask="CreateNewTask"/>
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks" v-on:delTask="DeleteTask" v-on:changeTask="ChangeTask"/>
		<button @click="isShowModal = true" type="button">Показать модальное окно</button>
		<ModalWindow @click="isShowModal = !isShowModal" v-if="isShowModal" :newTask="newTask"
                     v-on:ClosePopup="isShowModal = false" v-on:changeTask="ChangeOldTask"/>
	</div>
</template>

<script>
    //components
    import Caption from "./components/Caption";
    import MyTask from "./components/MyTask";
    import AddNewTask from "./components/AddNewTask"
    import Counter from "./components/Counter";
    import ChangeName from "./components/ChangeName";
    import ShowAndHidden from "./components/ShowAndHidden";
    import ModalWindow from "./components/ModalWindow";


    export default {
        name: 'App',
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
                // newTask: {}
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
        computed: {},
        methods: {
            CreateNewTask(data) {
                if (this.tasks == null) {
					this.tasks = [];
				}
                if (this.tasks.length == 0){
					data.id = 0
				} else {
                    data.id = this.tasks[this.tasks.length-1].id + 1;
				}
                this.tasks.push(data)
				console.log(this.tasks)
            },
            ChangeCount(value) {
                this.count += value;
            },
            DeleteTask(task) {
				let rezult = this.tasks.filter((item)=>{return item.id == task.id});
                this.tasks.splice(this.tasks.indexOf(rezult), 1);

                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
            ShowModal(boolean, newTask) {
                console.log(newTask);
				this.isShowModal = boolean;
                this.newTask = newTask;


            },
            ChangeTask(newTask) {
                // console.log(newTask);
                this.ShowModal(true, newTask)
            },
            ChangeOldTask(newTask){
                this.isShowModal = false;
                let findDataTask = this.tasks.filter(item=>item.id == newTask.id)[0]
				findDataTask.task = newTask.task;
				findDataTask.desc = newTask.desc;
				findDataTask.extcutionPeriod = newTask.extcutionPeriod;
				// this.tasks[this.tasks.indexOf()]
                console.log('It is newTask');
                console.log(newTask);
            }
        },
        components: {
            AddNewTask,
            ChangeName,
            Caption,
            MyTask,
            Counter,
            ShowAndHidden,
			ModalWindow
        }
    }

</script>

<style lang="scss">

</style>
