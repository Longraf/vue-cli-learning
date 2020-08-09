<template>
  <div class="vue-app__inputs-wrapper">
    <div class="vue-app__input-value">
      <div class="vue-app__input-value-wrapper">
        <input class="input input--w300" placeholder="Введите задачу" type="text" v-model="task.task"
               :class="task.length <= 0 ? 'input__red' : '' ">
        <input class="input input--w300" placeholder="Описание" type="text" v-model="task.desc">
        <input class="input input--w300" placeholder="Задайте период выполнения" type="text" v-model="task.executePeriod">
        <input @click="$router.push('/todo-list')" class="btn btn__submit btn__submit--w200" type="submit" value="Вернуться к списку дел">
      </div>
    </div>
    <p class="vue-app__change-warning"><b>Внимание</b> изменений данных происходит мгновенно </p>
  </div>


</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'ChangeTask',
    computed: {
      ...mapGetters({
        getTasks: 'getTasks',
      }),
      task: {
        get() {
          return this.getTasks.filter(item => item.id === parseInt(this.$route.params.id))[0]
        },
        set(task) {
          this.updateTaskById({
            task: task,
            currentObj: this.getTasks.filter(item => item.id === this.$route.params.id)[0]
          })
        }
      },
    },
    methods: {
      ...mapMutations({
        updateTaskById: 'updateTaskById',
      }),
    }
  }

</script>