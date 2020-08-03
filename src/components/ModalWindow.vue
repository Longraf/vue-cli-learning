<template>
	<div class="modal-window">
		<div class="modal-window__close-wrapper">
			<div @click="$emit('ClosePopup')" class="modal-window__close"></div>
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
        methods: {}
    }
</script>