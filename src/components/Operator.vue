/*var operator = Vue.extend({ 
  template: '#operator',
  watch: {
    '$route' (to, from) {
      // обработка изменений параметров пути...
    }
  }
});

export default operator;*/

<template>
    <div class='cont-enter-number'>
    	<div class='title'>foo {{$route.params.name}}</div> 
    	<router-link to="/enterNumber">Go enter number</router-link>
    </div>
</template>

<script>

export default {
  name: 'Operator',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    '$route' (to, from) {
      // обработка изменений параметров пути...
    }
  }
}
</script>

<style scoped lang='scss'>

.cont-enter-number{

  .title{
  color: red;

  }
  a{
  color: blue;
  }
}

</style>