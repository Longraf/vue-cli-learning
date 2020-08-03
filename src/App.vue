<template>
	<div id="vue-app">
		<Counter v-bind:count="count" v-on:count="ChangeCount"/>
		<ChangeName v-bind:text="text"></ChangeName>
		<ShowAndHidden v-model="isShow"/>

		<Caption :caption="caption" :tasksCount="tasks.length"/>

        <AddNewTask v-on:newTask="CreateNewTask"/>
		<MyTask v-on:isComplete="reloadTask" v-on:delTask="DeleteTask" :key="task.id" :task="task" :tasks="tasks" v-for="task in tasks"/>
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
      // newTask: {}
    }
  },
  created(){
	this.tasks = JSON.parse(localStorage.getItem('tasks'));
  },
  watch:{
      // reloadTask(task){
      //     console.log(`old count ${task}`)
      // },
      tasks: {
          handler () {
              localStorage.setItem('tasks', JSON.stringify(this.tasks));
          },
          deep: true
      },
      // tasks(){
      //     console.log('watch on taskS');
      //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
      //     localStorage.setItem('tasks', JSON.stringify(this.tasks))
      // }
  },
  computed:{
  },
  methods:{
    CreateNewTask(data){
        this.tasks.push(data);
        // localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    ChangeCount(value){
        this.count += value;
    },
    DeleteTask(task){
        this.tasks.splice(this.tasks.indexOf(task),1);
		localStorage.setItem('tasks', JSON.stringify(this.tasks))
	},
    reloadTask(){
        // console.log('reloadTask');
        // this.tasks[this.tasks.indexOf(task)].isComplete = task.isComplete;
		// localStorage.setItem('tasks', JSON.stringify(this.tasks))
    //     // task.isComplete = !task.isComplete;
    //     // this.tasks.splice(this.tasks.indexOf(task),1);
    //     // this.tasks.push(task);
    //     // console.log(task.task.isComplete);
    //     // this.tasks[this.tasks.indexOf(task.task)].isComplete = task.task.isComplete
    //     localStorage.setItem('tasks', JSON.stringify(this.tasks))
    //     // // console.log(this.tasks[this.tasks.indexOf(task.task)].isComplete);
    //     // this.tasks[this.tasks.indexOf(task.task)].isComplete = !task.task.isComplete;
    //
    //     // this.tasks.splice(this.tasks.indexOf(task),1);
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
