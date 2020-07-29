<template>
    <div class="is-show">
        <div class="is-show__wrapper">
            <h1 v-if=isShow >This is show</h1>
        </div>
        <button class="btn__default" type="submit" @click.prevent="ShowOrHidden()">{{showText}}</button>
    </div>
</template>

<script>
    export default {
        name: 'ShowAndHidden',
        props: {
            isShow: Boolean,
            showText: String,
        },
        watch: {
            isShow(stat){
                if (stat){
                    this.showText = 'Скрыть'
                } else {
                    this.showText = 'Показать'
                }
            }
        },
        methods: {
            ShowOrHidden(){
                this.isShow = !this.isShow;
            },
        }
    }
</script>