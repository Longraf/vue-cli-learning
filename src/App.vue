<template>
	<div id="vue-app">
		<Counter v-bind:count="count" v-on:count="ChangeCount"/>
		<ChangeName v-bind:text="text"></ChangeName>
		<ShowAndHidden :isShow="isShow"/>

		<Caption :caption="caption" :tasksCount="tasks.length"/>

        <AddNewTask :tasks="tasks"/>
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks"/>
<!--		<button @click="deleteTask(1)">Delete</button>-->
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

//filters
// import upperCase from "./filters/filter"

//data
import {data} from './data/data';

 export default {
  name: 'App',
  data (){
    return {
      count: 112,
      text: "lalala",
      isShow: true,
      isChange: '',
      caption: 'Список задач: ',
      tasks: [],
      newTask: {
        task: '',
        desc: '',
        taskError: false,
		isComplete: false,
      }
    }
  },
  created(){
	// this.tasks = JSON.parse(localStorage.getItem('tasks'))
    // localStorage.setItem('tasks', JSON.stringify(this.tasks))
	this.tasks = data;
  },
  watch:{
  },
  computed:{
  },
  methods:{
    ChangeCount(value){
        this.count += value;
    },
    // deleteTask(num){
	// 	this.tasks.splice(num, 1);
	// 	// localStorage.setItem('tasks', JSON.stringify(this.tasks))
	// },
  },
  components: {
    AddNewTask,
    ChangeName,
    Caption,
    MyTask,
    Counter,
    ShowAndHidden
  }
}
</script>

<style lang="scss">

</style>
