<template>
  <div id="app">
    <div class='cont-app'>
      <div class='terminal'>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      maxSum: 100,
      minSum: 1
    }
  }
}
</script>

<style scoped lang='scss'>
@import 'sass/default.scss';
@import 'sass/app.scss';
</style>
