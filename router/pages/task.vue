<template>
  <div class="vue-app__inputs-wrapper">
    <div class="vue-app__input-value">
      <!--        <p>{{newTask.task}}</p>-->
      <div class="vue-app__input-value-wrapper">
        <input class="input input--w300" placeholder="Введите задачу" type="text" v-model="task"
               :class="taskError ? 'input__red' : '' ">
        <input class="input input--w300" placeholder="Описание" type="text" v-model="desc">
        <input class="input input--w300" placeholder="Задайте период выполнения" type="text" v-model="executePeriod">
        <input @click="this.goToDoList" class="btn btn__submit btn__submit--w200" type="submit" value="Вернуться к списку дел">
      </div>



    </div>
    <p class="vue-app__change-warning"><b>Внимание</b> изменений данных происходит мгновенно </p>
  </div>


</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'ChangeTask',
    data() {
      return {
        taskObj: this.taskObj,
        routeID: this.routeID,
        taskError: false,
      }
    },
    created() {
      this.taskObj = this.getTasks.filter(item => item.id === this.$route.params.id)[0];
      this.routeID = this.$route.params.id;
    },
    computed: {
      ...mapGetters({
        getSomeThing: 'getSomeThing',
        getTasks: 'getTasks',
        getDesc: 'getDesc,',
        getExecutePeriod: 'getExecutePeriod'
      }),
      task: {
        get() {
          return this.taskObj.task
        },
        set(task) {
          this.updateTaskById({
            task: task,
            currentObj: this.taskObj
          })
        }
      },
      desc: {
        get() {
          return this.taskObj.desc
        },
        set(desc) {
          this.updateDescById({
            desc: desc,
            currentObj: this.taskObj
          })
        }
      },
      executePeriod: {
        get() {
          return this.taskObj.executePeriod
        },
        set(executePeriod) {
          this.updateExecutePeriodById({
            executePeriod: executePeriod,
            currentObj: this.taskObj
          })
        }
      }

    },
    methods: {
      ...mapMutations({
        updateTaskById: 'updateTaskById',
        updateDescById: 'updateDescById',
        updateExecutePeriodById: 'updateExecutePeriodById',
      }),
      goToDoList() {
        this.$router.push({name: 'todo-list'})
      },
      addTask() {
        console.log(this.task);
        this.updateTaskById({
          id: this.routeID,
          task: this.task,
          desc: this.desc,
        });
        this.$router.push({
          name: 'todo-list',
        })
      },
    }
  }

</script>