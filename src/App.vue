<template>
	<div id="vue-app">
		<Counter v-bind:count="count" v-on:count="ChangeCount"/>
		<ChangeName v-bind:text="text"></ChangeName>
		<ShowAndHidden v-bind:isShow="isShow" v-bind:showText="showText"/>

		<Caption :caption="caption" :tasksCount="tasks.length"/>

        <AddNewTask v-bind:newTask="newTask"/>
		<MyTask :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks"/>
<!--		<h1>{{caption}}</h1>-->
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
      caption: 'Список задач: ',
      showText: 'Скрыть',
      tasks: [],
      newTask: {
        task: '',
        desc: '',
        taskError: false,
		isComplete: false,
      }
    }
  },
  watch: {
  },
  created(){
    this.tasks = data;
    localStorage.setItem('tasks', this.tasks)
  },
  filters:{
    // upperCase
  },
  computed:{
  },
  methods:{
    ChangeCount(value){
        this.count += value;
    }
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
