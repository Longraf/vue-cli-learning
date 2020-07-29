<template>
  <div id="vue-app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>
      <p>{{count}}</p>
      <button class="btn__default" @click="changeCount('+10')">+10</button>
      <button class="btn__default" @click="changeCount('+')">+</button>
      <button class="btn__default" v-on:click="changeCount('-')">-</button>
      <button class="btn__default" v-on:click="changeCount('-10')">-10</button>
    </h1>
    <h1 v-on:click.once="changeName()">{{text}} !!</h1>
    <input type="text">
    <Caption caption="123"/>

  </div>
</template>

<script>
import Caption from "./components/Caption";

export default {
  name: 'MyApp',
  data (){
    return {
      count: "11",
      text: "lalala"
    }
  },
  computed:{
  },
  methods:{
    changeCount(act){
      if (act == '-'){
        return this.count--
      } else if (act == '+') {
        return this.count++
      } else if (act == '+10'){
        return this.count = +this.count + 10
      } else if (act == '-10'){
        return this.count -= 10
      }
      this.count < 0 ? this.count = 0 : ''
      if (this.count < 0){
        this.count = 0
      }
    },
    changeName(){
      let newText = 'trololo';
      console.log(this.text);

      this.text = `Вы изменили ${this.text} на ${newText}`
      setTimeout(()=>{
        this.text = newText;
      }, 1000)
    },
  },
  components: {
    Caption
  }
}
</script>

<style lang="scss">

</style>
