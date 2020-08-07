<template>
	<div class="vue-app__input-value">
		<!--        <p>{{newTask.task}}</p>-->
		<div class="vue-app__input-value-wrapper">
			<input class="vue-app__input" placeholder="Введите задачу" type="text" v-model="this.taskObj.task"
				v-bind:class="taskError ? 'input__red' : '' ">
			<input class="vue-app__input" placeholder="Описание" type="text" v-model="this.taskObj.desc">
			<input class="vue-app__input" placeholder="Задайте период выполнения" type="text" v-model="this.taskObj.executionPeriod ">
		</div>

		<input @click="addTask()" class="btn btn__submit  btn__default--h51" type="submit" value="Изменить">
<!--		<input @click="taskByID()" type="submit" class="btn" value="GetTask">-->
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

    export default {
        name: 'ChangeTask',
        data() {
            return {
				taskError: false,
				isComplete: false,
				executionPeriod: '',
            }
        },
		created() {
			this.taskObj = this.getTasks.filter(item=>item.id == this.$route.params.id)[0]
		},
		computed: {
			...mapGetters([
				'getTaskById',
				'getSomeThing',
				'getTasks'
			]),
		},
        methods: {
			// taskByID() {
			// 	console.log(this.getTasks.filter(item=>item.id == this.$route.params.id)[0])
			// },
            addTask() {
                if (this.task == '') {
                    return this.taskError = true;
                } else {
                    this.taskError = false;
                }
                this.$emit('newTask', {
                    isComplete: this.isComplete,
                    task: this.task,
                    desc: this.desc,
					executionPeriod: this.executionPeriod,
                });
                console.log('addNew = ' + this.task)
                this.task = '';
                this.desc = '';
                this.executionPeriod = '';
            },
        }
    }

</script>