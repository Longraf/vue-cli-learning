import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 33,
    tasks: JSON.parse(localStorage.getItem('tasks')),
    caption: 'Список задач: ',
    isShowModal: false
  },
  mutations: {
    incrementCount(state, increment) {
      state.count += increment;
    },
    changeIsShowModal(state) {
      state.isShowModal = !state.isShowModal;
    },
    deleteTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    addTasksInLocalStorage(state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    addTaskInSore(state, newTask) {
      console.log('This is addTaskInStore');
      if (this.getTasksLength == 0) {
        newTask.id = 0
      } else {
        newTask.id = state.tasks[state.tasks.length - 1].id + 1
      }
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTaskById(state, obj) {
      // let task = state.tasks.filter(item => item.id === obj.id)[0]
      // console.log(task + ' => this task from state');
      console.log(obj)
      obj.obj.task = obj.value;

    }


  },
  actions: {},
  modules: {},
  getters: {
    getCount(state) {
      return state.count
    },
    getTasks(state) {
      return state.tasks
    },
    getTasksLength(state) {
      return state.tasks.length
    },
    // getTaskById(state) {
    //     return (id) => {
    //         state.tasks[id]
    //     };
    //
    //     // return state.tasks.filter(item => item.id === id);
    // },
    getSomeThing(state, getters) {
      return state(getters)
    },
    getCaption(state) {
      return state.caption
    },
    getIsShowModal(state) {
      return state.isShowModal
    },
  }
})
