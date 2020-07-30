<template >
    <div>
        <div class="input-value">
            <div class="input-value__wrapper">
                <input type="text" placeholder="Введите задачу">
                <input type="text" placeholder="Описание">
            </div>
            <input class="btn__submit btn__default btn__default--h51" type="submit">
        </div>
        <div class='task'>
            <input type="checkbox">
            <div class="task__wrapper">
                <h3 class="task__caption">{{}}</h3>
                <p class="task__text">{{}}</p>
            </div>
            <button class="task__btn-delete">Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyTask',
        // props: {
        //     tasks: Array,
        //     newTask: Object
        // },
        // methods: {
        //     deleteTask(task){
        //         this.tasks.splice(this.tasks.indexOf(task),1)
        //     }
        // }
    }
</script>
