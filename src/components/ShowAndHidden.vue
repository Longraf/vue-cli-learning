<template>
    <div class="is-show">
        <div class="is-show__wrapper">
            <h1 v-if=isShow >This is show</h1>
        </div>
        <button class="btn__default" type="submit" @click="ShowOrHidden(isShow)">{{isShow}}</button>
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
                    // this.$emit('showText', 'Скрыть')
                    // this.showText = 'Скрыть'
                } else {
                    // this.$emit('showText', 'Показать');
                    // this.showText = 'Показать'
                }
            }
        },
        methods: {
            ShowOrHidden(){
                this.$emit('isShow', !this.isShow);
                // this.isShow = !this.isShow;
            },
        }
    }
</script>