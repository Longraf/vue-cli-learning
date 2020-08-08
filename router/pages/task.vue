<template>
  <div class="vue-app__input-value">
    <!--        <p>{{newTask.task}}</p>-->
    <div class="vue-app__input-value-wrapper">
      <input class="vue-app__input" placeholder="Введите задачу" type="text" v-model="task"
             :class="taskError ? 'input__red' : '' ">
      <input class="vue-app__input" placeholder="Описание" type="text" :value="this.taskObj.desc">
      <input class="vue-app__input" placeholder="Задайте период выполнения" type="text">
    </div>

    <input @click="addTask()" class="btn btn__submit  btn__default--h51" type="submit" value="Изменить">
    <!--		<input @click="taskByID()" type="submit" class="btn" value="GetTask">-->
  </div>
</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'ChangeTask',
    data() {
      return {
        // taskObj: this.taskObj,
        taskObj: this.taskObj,
        routeID: this.routeID,
        taskError: false,
        isComplete: false,
        executionPeriod: '',
      }
    },
    created() {
      this.taskObj = this.getTasks.filter(item => item.id === this.$route.params.id)[0]
      this.routeID = this.$route.params.id;
    },
    computed: {
      ...mapGetters({
        getSomeThing: 'getSomeThing',
        getTasks: 'getTasks'
      }),
      task: {
        get() {
          return this.taskObj.task
        },
        set(value) {
          this.updateTaskById({
            value: value,
            obj: this.taskObj
          })
          // this.$store.commit('updateTaskById', value)
        }
      }

    },
    methods: {
      ...mapMutations({
        updateTaskById: 'updateTaskById'
      }),
      addTask() {
        console.log(this.task);
        this.updateTaskById({
          id: this.routeID,
          task: this.task
        });
        this.$router.push({
          name: 'todo-list',
        })
      },
    }
  }

</script>