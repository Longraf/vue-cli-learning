<template>
	<div class="vue-app__container">
		<h2>{{getCaption}} {{getTasks.length}}</h2>
		<MyTask :key="task.id" :task="task" v-for="task in this.getTasks"/>

		<button @click="changeIsShowModal" type="button">Добавить новую задачу</button>
		<transition name="modal-window">
			<ModalWindow v-if="getIsShowModal"/>
		</transition>

	</div>
</template>

<script>
  import MyTask from "../../../src/components/MyTask";
  import ModalWindow from "../../../src/components/ModalWindow";
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: "list",
    components: {
      MyTask,
      ModalWindow
    },
    computed: {
      ...mapGetters({
        getTasks: 'getTasks',
        getTasksLength: 'getTasksLength',
        getCaption: 'getCaption',
        getIsShowModal: 'getIsShowModal'
      })
    },
    mounted() {
      if (localStorage.getItem('tasks')) {
        this.tasks = this.getTasks;
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
    methods: {
      ...mapMutations({
        changeIsShowModal: 'changeIsShowModal',
      }),
      ChangeCount(value) {
        this.count += value;
      },
    }
  }
</script>