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
        incrementCount (state, increment) {
            state.count += increment
            console.log('incrementCount = ' + state.count)
        },
        changeIsShowModal (state) {
            state.isShowModal = !state.isShowModal;
            console.log(state.isShowModal)
        }

    },
    actions: {

    },
    modules: {

    },
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
        getCaption(state) {
            return state.caption
        },
        getIsShowModal(state) {
            return state.isShowModal
        }

    }
})
