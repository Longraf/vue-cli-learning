<template>
    <div class="modal-window">
        <div class="modal-window__close-wrapper">
            <div class="modal-window__close" @click="hideWindow"></div>
            <div class="modal-window__body">Модальное окно видно !</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ModalWindow',
        // data(){
        //     return {
        //         isShowModal: true
        //     }
        // },
        methods: {
            hideWindow() {
                this.$emit('isVisibleModal', false)
            }
        }
    }
</script>