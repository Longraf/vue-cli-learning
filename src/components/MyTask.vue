<template>
	<div class='task'>
		<input @click="isCompleted(task)" type="checkbox" v-model="task.isComplete">
		<div class="task__wrapper">
			<h3 :class="task.isComplete ? 'task__caption--complete' : ''" class="task__caption">{{ task.task }}</h3>
			<p :class="task.isComplete ? 'task__text--complete' : ''" class="task__text">{{ task.desc }}</p>
		</div>
		<a href="/change-task">
			<button @click="changeTask(task)" class="btn btn__change">Редактировать</button>
		</a>

		<button @click="deleteTask(task)" class="btn btn__delete">Удалить</button>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'

    export default {
        name: 'MyTask',
        props: {
            isComplete: Boolean,
            task: Object,
            tasks: Array,
			executionPeriod: [String, Number],
			id: Number,
        },
        methods: {
			...mapMutations([
				'deleteTask'
			]),
        }
    }
</script>
