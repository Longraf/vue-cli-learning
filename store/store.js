import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 33,
        tasks: JSON.parse(localStorage.getItem('tasks')),
        caption: 'Список задач: ',
    },
    mutations: {
        incrementCount (state, increment) {
            state.count += increment
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
        getCaption(state) {
            return state.caption
        }

    }
})
