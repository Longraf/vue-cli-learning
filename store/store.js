import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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
      console.log(newTask)
      if (this.getTasksLength === 0) {
        newTask.id = 0
      } else {
        newTask.id = state.tasks[state.tasks.length - 1].id + 1
      }
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTaskById(state, obj) {
      obj.currentObj.task = obj.task;
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateDescById(state, obj) {
      obj.currentObj.desc = obj.desc;
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateExecutePeriodById(state, obj) {
      obj.currentObj.executePeriod = obj.executePeriod;
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },


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
