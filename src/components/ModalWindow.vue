<template>
  <div class="modal-window">
    <div class="modal-window__close-wrapper">
      <div class="modal-window__close" @click="this.changeIsShowModal"></div>
    </div>
    <div class="vue-app__input-value-wrapper">
      <input class="vue-app__input" placeholder="Введите задачу" type="text" v-model='task'
             v-bind:class="taskError ? 'input__red' : '' ">
      <input class="vue-app__input" placeholder="Описание" type="text" v-model="desc">
      <input class="vue-app__input" placeholder="Задайте период выполнения" type="text" v-model="executionPeriod ">

    </div>
    <input @click="this.addTask" type="submit" value="Добавить запись">
    <input @click="this.changeIsShowModal" type="submit" value="Отменить добавление">
    <!--		<input @click="deleteTask" type="button" value="Удалить запись">-->
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: 'ModalWindow',

    data() {
      return {
        task: '',
        desc: '',
        executionPeriod: '',
        isComplete: this.isComplete,
        taskError: false,
      }
    },
    computed: {
      ...mapGetters({
        getTasks: 'getTasks',
        getTasksLength: 'getTasksLength'
      })
    },
    methods: {
      ...mapMutations({
        changeIsShowModal: 'changeIsShowModal',
        addTaskInSore: 'addTaskInSore'
      }),
      changeTask() {
        console.log(this.task)
        if (this.task === '') {
          return this.taskError = true;
        } else {
          this.taskError = false;
        }
        // this = this.ntask;
        let newTask = {
          // oldTask: this,
          isComplete: false,
          task: this.task,
          desc: this.desc,
          executionPeriod: this.executionPeriod,
        };
        console.log(newTask);
        this.changeIsShowModal()
        this.$emit('addTask', newTask);

        // this.task = '';
        // this.desc = '';
      },
      deleteTask(task) {
        this.$emit('delTask', task)
      },
      addTask() {
        if (this.task === '') {
          this.taskError = true;
          return
        } else {
          this.taskError = false
        }
        let newTask = {
          task: this.task,
          desc: this.desc,
          // executionPeriod: this.executionPeriod;
        };
        // console.log(newTask);
        this.changeIsShowModal();
        console.log('addTaskk');
        this.addTaskInSore(newTask)


      }
    }
  }
</script>