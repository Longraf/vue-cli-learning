<template>
    <div class="modal-window">
        <div class="modal-window__close-wrapper">
            <div class="modal-window__close" @click="$emit('ClosePopup')"></div>
            <div class="modal-window__body">Модальное окно видно !</div>
            <div class="task__wrapper">
                <input :value="task.task" class="task__caption">
                <input :value="task.desc" class="task__text">
            </div>
            <div class="modal-window__execution-period">{{executionPeriod ? 'executionPeriod' : 'Период не  задан'}}</div>
            <button type="submit" class="btn btn__change" @click="changeTask('changeTask')">Изменить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalWindow',
        props: {
            executionPeriod: [String, Number, Boolean],
            isComplete: Boolean,
            task: Object,
            tasks: Array,
        },
        data(){
            return {
                newTask: {
                    task: '',
                    desc: '',
                    taskError: false,
                    isComplete: false,
                }
            }
        },
        methods: {
            changeTask(state){
                if (this.newTask.task == '') {
                    return this.newTask.taskError = true;
                } else {
                    this.newTask.taskError = false;
                }
                this.$emit(state, {
                    isComplete: this.newTask.isComplete,
                    task: this.newTask.task,
                    desc: this.newTask.desc,
                    executionPeriod: this.newTask.executionPeriod
                });
                console.log('changeTask IN')
                this.newTask.task = '';
                this.newTask.desc = '';
            }
        }
    }
</script>