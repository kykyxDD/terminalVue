<template>
  <div id="app">
    <div class='terminal'>
      <div class="header"></div>
      <router-view/>
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
