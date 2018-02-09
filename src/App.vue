<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div v-for="todo in oper">
      <router-link :to="'/operator/' + todo">Go to {{todo}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{
      oper: ['mtc', 'megafon']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
