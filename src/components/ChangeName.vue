<template>
    <h1 v-on:click.once="changeName()">{{textIn}} !</h1>
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
                let newText = 'trololo';
                this.textIn = `Вы изменили ${this.textIn} на ${newText}`
                setTimeout(()=>{
                    this.textIn = newText;
                }, 1000)
            },
        }
    }
</script>