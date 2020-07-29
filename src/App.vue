<template>
  <div id="vue-app">
    <Counter v-bind:count="count"/>
    <ChangeName v-bind:text="text"></ChangeName>
    <ShowAndHidden v-bind:isShow="isShow" v-bind:showText="showText"/>

    <Caption v-bind:caption="caption"/>

    <div class="input-value">
      <div class="input-value__wrapper">
        <input v-bind:class="newTask.taskError ? 'input__red' : '' " v-model="newTask.task" type="text" placeholder="Введите задачу">
        <input v-model="newTask.desc" type="text" placeholder="Описание">
      </div>
      <input class="btn__submit btn__default btn__default--h51" type="submit" @click="addTask()">
    </div>
    <div class='task' v-for="item in tasks" :key="item.id">
      <input type="checkbox">
      <div class="task__wrapper">
        <h3 class="task__caption">{{item.task}}</h3>
        <p class="task__text">{{item.desc}}</p>
      </div>
      <button class="task__btn-delete" @click="deleteTask(item)">Удалить</button>
    </div>
<!--    <Task v-bind:tasks="tasks"/>-->
    
  </div>
</template>

<script>
import Caption from "./components/Caption";
// import Task from "./components/Task";
import Counter from "./components/Counter";
import {data} from './data/data';
import ChangeName from "./components/ChangeName";
import ShowAndHidden from "./components/ShowAndHidden";

export default {
  name: 'App',
  data (){
    return {
      count: 112,
      text: "lalala",
      isShow: true,
      caption: 'Заголовок',
      showText: 'Скрыть',
      tasks: [],
      newTask: {
        task: '',
        desc: '',
        taskError: false,
      }
    }
  },
  created(){
    this.tasks = data;
    localStorage.setItem('tasks', this.tasks)
  },
  computed:{
  },
  methods:{
    deleteTask(task){
      this.tasks.splice(this.tasks.indexOf(task),1)
    },
    addTask(){
      if (this.newTask.task == ''){
         return this.newTask.taskError = true;
      } else{
         this.newTask.taskError = false;
      }
      this.tasks.push({
        task: this.newTask.task,
        desc: this.newTask.desc
      });
      this.newTask.task = '';
      this.newTask.desc = '';
      // localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
  },
  components: {
    ChangeName,
    Caption,
    // Task,
    Counter,
    ShowAndHidden
  }
}
</script>

<style lang="scss">

</style>
