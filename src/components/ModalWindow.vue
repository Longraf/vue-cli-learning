<template>
  <div class="modal-window">
    <div class="modal-window__close-wrapper">
      <div class="modal-window__close" @click="this.changeIsShowModal"></div>
    </div>
    <div class="vue-app__input-value-wrapper">
      <input class="input" placeholder="Введите задачу" type="text" v-model='task'
             v-bind:class="taskError ? 'input__red' : '' ">
      <input class="input" placeholder="Описание" type="text" v-model="desc">
      <input class="input" placeholder="Задайте период выполнения" type="text" v-model="executePeriod ">

    </div>
    <input class="btn__submit btn__submit--w45p" @click="this.addTask" type="submit" value="Добавить запись">
    <input class="btn__submit btn__submit--w45p" @click="this.changeIsShowModal" type="submit" value="Отменить добавление">
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
        executePeriod: '',
        isComplete: false,
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
					executePeriod: this.executePeriod,
					isComplete: this.isComplete
          // executePeriod: this.executePeriod;
        };
        // console.log(newTask);
        this.changeIsShowModal();
        console.log('addTaskk');
        this.addTaskInSore(newTask)


      }
    }
  }
</script>