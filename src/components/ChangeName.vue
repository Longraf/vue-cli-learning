<template>
    <h1 v-on:click.once="changeName()">{{text}} !</h1>
</template>

<script>
    export default {
        name: 'ChangeName',
        props: {
            text: String
        },
        methods:{
            changeName(){
                let newText = 'trololo';
                this.text = `Вы изменили ${this.text} на ${newText}`
                setTimeout(()=>{
                    this.text = newText;
                }, 1000)
            },
        }
    }
</script>