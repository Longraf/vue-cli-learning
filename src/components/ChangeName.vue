<template>
    <h1 class="vue-app__caption" v-on:click.once="changeName()">{{textIn}} !</h1>
</template>

<script>
    export default {
        name: 'ChangeName',
        props: {
            text: String
        },
        data(){
            return{
                textIn: this.text
            }
        },
        methods:{
            changeName(){
                let newText = 'Здравствуйте';
                this.textIn = `Вы изменили ${this.textIn} на ${newText}`
                setTimeout(()=>{
                    this.textIn = newText;
                }, 1000)
            },
        }
    }
</script>