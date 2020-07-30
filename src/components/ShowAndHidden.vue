<template>
    <div class="is-show">
        <div class="is-show__wrapper">
            <h1 v-if=isShowInComponent >This is show</h1>
        </div>
        <button class="btn__default" type="submit" @click="ShowOrHidden(isShowInComponent)">{{btnText}}</button>
    </div>
</template>

<script>
    export default {
        name: 'ShowAndHidden',
        props: {
            isShow: Boolean,
            showText: String,
        },
        data(){
            return {
                isShowInComponent: this.isShow,
                btnText: this.isShow ? 'Скрыть' : 'Показать'
            };

        },
        watch: {
            isShowInComponent(stat){
                stat ? this.btnText = 'Скрыть' : this.btnText = 'Показать'
            }
        },
        methods: {
            ShowOrHidden(){
                this.isShowInComponent = !this.isShowInComponent
            },
        }
    }
</script>