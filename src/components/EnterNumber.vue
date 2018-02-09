<template>
  <div class='cont-enter-number'>
    	<div class='title'>Пополнение счета на {{$route.params.name}} </div>
      <div class='d-flex justify-content-center'>
        <div v-for="num in lenNumber" >
          {{arrNumber[num] ? arrNumber[num] : '_'}}

        </div>
      </div>
      <div>
        <button type='button' value='1'  v-on:click='incAge'> 1 </button>
        <button type='button' value='2'  v-on:click='incAge'> 2 </button>
        <button type='button' value='3'  v-on:click='incAge'> 3 </button><br>
        <button type='button' value='4'  v-on:click='incAge'> 4 </button>
        <button type='button' value='5'  v-on:click='incAge'> 5 </button>
        <button type='button' value='6'  v-on:click='incAge'> 6 </button><br>
        <button type='button' value='7'  v-on:click='incAge'> 7 </button>
        <button type='button' value='8'  v-on:click='incAge'> 8 </button>
        <button type='button' value='9'  v-on:click='incAge'> 9 </button><br>
        <button type='button' v-on:click='clearNum'> C </button>
        <button type='button' value='0'  v-on:click='incAge'> 0 </button>
        <button type='button' v-on:click='delNum'> <- </button>
      </div>
      <div class='footer d-flex'>
        <router-link to="/" class='btn btn-back'> Отмена </router-link>
    	  <router-link to="/enterAmount"  class='btn btn-next-page' :class='{disabled: arrNumber.length <= lenNumber }'> Go enter number </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'EnterNumber',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arrNumber: [],
      lenNumber: 10
    }
  },
  methods: {
    incAge (event) {
      if (this.arrNumber.length > this.lenNumber) return
      var val = event.target.value
      this.arrNumber.push(val)
    },
    clearNum () {
      this.arrNumber = []
    },
    delNum () {
      this.arrNumber.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/enterNumber.scss';
</style>
