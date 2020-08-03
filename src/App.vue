<template>
	<div class="vue-app" id="vue-app">
		<ChangeName v-bind:text="text"></ChangeName>
		<Counter v-bind:count="count" v-on:count="ChangeCount"/>

		<ShowAndHidden v-model="isShow"/>

		<Caption :caption="caption" :tasksCount="tasks ? tasks.length : 0"/>

		<AddNewTask v-on:newTask="CreateNewTask"/>
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks" v-on:delTask="DeleteTask"/>
		<button type="button" @click="ShowModal(1)">Показать модальное окно</button>
		<ModalWindow v-if="isShowModal" v-modal:isVisibleModal="ShowModal(0)"/>
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

    //filters
    // import upperCase from "./filters/filter"

    //data
    // import {data} from './data/data';

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
                // newTask: {}
            }
        },
        created() {
            if (localStorage.getItem('tasks')) {
                this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } else {
                localStorage.setItem('tasks', JSON.stringify([]));
                this.tasks = [];
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
                // console.log(data);
                // console.log(this.tasks);
                if (this.tasks == null) {
					this.tasks = [];
				}
				this.tasks.push(data);

            },
            ChangeCount(value) {
                this.count += value;
            },
            DeleteTask(task) {
                this.tasks.splice(this.tasks.indexOf(task), 1);
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
			ShowModal(boolean) {
                this.isShowModal = boolean;
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
