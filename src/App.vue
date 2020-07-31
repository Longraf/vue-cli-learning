<template>
	<div id="vue-app">
		<Counter v-bind:count="count" v-on:count="ChangeCount"/>
		<ChangeName v-bind:text="text"></ChangeName>
		<ShowAndHidden v-model="isShow"/>

		<Caption :caption="caption" :tasksCount="tasks.length"/>

        <AddNewTask :newTask="newTask" v-on:newTask="CreateNewTask"/>
		<MyTask v-on:delTask="DeleteTask" :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks"/>
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
// import {data} from './data/data';

 export default {
  name: 'App',
  data (){
    return {
      count: 112,
      text: "lalala",
      isShow: true,
      caption: 'Список задач: ',
      showText: 'ss123',
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
	this.tasks = JSON.parse(localStorage.getItem('tasks'));
  },
  watch:{
  },
  computed:{
  },
  methods:{
    CreateNewTask(data){
        this.tasks.push(data);
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    ChangeCount(value){
        this.count += value;
    },
    DeleteTask(task){
        this.tasks.splice(this.tasks.indexOf(task),1);
		localStorage.setItem('tasks', JSON.stringify(this.tasks))
	},
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
